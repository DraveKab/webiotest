import { expect } from 'expect-webdriverio';
import { YouTubePage } from '../pages/youtube.page';
import { YouTubeLocators } from './locator';

const yt = new YouTubePage();

describe('YouTube search and play flow', () => {

  it('should search for a song', async () => {
    await yt.clickSearchIcon();
    await yt.typeInSearchBox('4eve situationship');
    await yt.clickFirstKeywordResult();
  });

  it('should open the first video result', async () => {
    await yt.clickFirstVideoThumbnail();
    await browser.pause(3000); // wait for video to load
    await yt.clickVideoScreen(); // show controls

    // ✅ Validate: ปุ่ม pause ต้องแสดง → แปลว่า video กำลังเล่น
    expect(await $(YouTubeLocators.pause_button)).toBeDisplayed();
  });

  it('should pause and resume the video', async () => {
    await yt.pauseVideo();
    await browser.pause(1000);
    expect(await $(YouTubeLocators.play_button)).toBeDisplayed();

    await yt.playVideo();
    await browser.pause(1000);
    expect(await $(YouTubeLocators.pause_button)).toBeDisplayed();
  });

});
