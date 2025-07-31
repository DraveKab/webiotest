import { expect } from 'expect-webdriverio';
import { YouTubeHomePage } from '../pages/youtube.page';
import { YouTubePlayerPage } from '../pages/youtube.player.page';
import * as locator from '../specs/locator';

const yt = new YouTubeHomePage();
const ytp = new YouTubePlayerPage();

describe('YouTube search and play flow', () => {

  it('should search for a song', async () => {
    await yt.clickSearchIcon();
    await yt.typeInSearchInput('4eve situationship');
    await yt.clickFirstKeywordResult();
  });

  it('should open the first video result', async () => {
    await yt.clickFirstVideoThumbnail();
    await ytp.skipButtonToBeDisplayed();
    await ytp.screenToBeDisplayed();
    await ytp.clickVideoScreen(); // show controls first
    await ytp.waitToBeDisplayed(); // wait for pause button

    // ✅ Validate: ปุ่ม pause ต้องแสดง → แปลว่า video กำลังเล่น
    expect(await $(locator.youtube.pause_button)).toBeDisplayed();
  });

  it('should pause and resume the video', async () => {
    await ytp.pauseVideo();
    const playBtn = await $<WebdriverIO.Element>(locator.youtube.play_button);
      await playBtn.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'Expected pause button to be visible'
        });
    await ytp.verifyPlayButtonVisible();// ytp.verify...

    await ytp.playVideo();
    const pauseBtn = await $<WebdriverIO.Element>(locator.youtube.pause_button);
await pauseBtn.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'Expected play button to be visible'
        });
    await ytp.verifyPlayButtonVisible(); // ytp.verify...
  });

});