import * as locator from '../specs/locator';
import { expect } from 'expect-webdriverio';

export class YouTubePlayerPage {
  async clickVideoScreen() {
    await $(locator.youtube.video_screen).click();
  }
  async screenToBeDisplayed() {
    const screenplay = await $<WebdriverIO.Element>(locator.youtube.video_screen);
    await screenplay.waitForDisplayed({
      timeout: 40000,
      timeoutMsg: 'Expected video screen to be visible after video starts playing',
    });  
  }
 async skipButtonToBeDisplayed() {
  try {
    const skipBtn = await $<WebdriverIO.Element>(locator.youtube.skip_button);
    const isExisting = await skipBtn.isExisting(); // ป้องกัน error ถ้า element ไม่มีเลย

    if (isExisting) {
      await skipBtn.waitForDisplayed({
        timeout: 30000,
        timeoutMsg: 'Skip button not visible in time',
      });
      await skipBtn.click();
    }
  } catch (err) {
    // ไม่ต้อง throw error ถ้าไม่เจอ ให้ไป action ถัดไปเลย
    console.log('Skip button not found or not clickable in time, continue test flow');
  }
}

  async waitToBeDisplayed() {
    const pauseBtn = await $<WebdriverIO.Element>(locator.youtube.pause_button);
    await pauseBtn.waitForDisplayed({
      timeout: 40000,
      timeoutMsg: 'Expected pause button to be visible after video starts playing',
    });
  }
  async pauseVideo() {
    await $(locator.youtube.pause_button).click();
  }

  async playVideo() {
    await $(locator.youtube.play_button).click();
  }

  async verifyPauseButtonIsVisible() {
    await expect($(locator.youtube.pause_button)).toBeDisplayed();
  }

  async verifyPlayButtonIsVisible() {
    await expect($(locator.youtube.play_button)).toBeDisplayed();
  }
}
