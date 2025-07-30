import { YouTubeLocators } from '../specs/locator/youtube.locator';
import { expect } from 'expect-webdriverio';

export class YouTubePage {
  async clickSearchIcon() {
    await $(YouTubeLocators.search_icon).click();
  }

  async typeInSearchBox(keyword: string) {
    await $(YouTubeLocators.search_input).addValue(keyword);
  }

  async clickFirstKeywordResult() {
    await $(YouTubeLocators.first_keyword_result).click();
  }

  async clickFirstVideoThumbnail() {
    await $(YouTubeLocators.first_video_thumbnail).click();
  }

  async clickVideoScreen() {
    await $(YouTubeLocators.video_screen).click();
  }

  async pauseVideo() {
    await $(YouTubeLocators.pause_button).click();
  }

  async playVideo() {
    await $(YouTubeLocators.play_button).click();
  }

  // ✅ Validate methods
  async expectPauseButtonVisible() {
    await expect($(YouTubeLocators.pause_button)).toBeDisplayed();
  }

  async expectPlayButtonVisible() {
    await expect($(YouTubeLocators.play_button)).toBeDisplayed();
  }
}
