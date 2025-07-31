import * as locator from '../specs/locator';

export class YouTubeHomePage {
  typeInSearchBox(arg0: string) {
    throw new Error('Method not implemented.');
  }
  async clickSearchIcon() {
    await $(locator.youtube.search_icon).click();
  }

  async typeInSearchInput(text: string) {
    await $(locator.youtube.search_input).addValue(text);
  }

  async clickFirstKeywordResult() {
    await $(locator.youtube.first_keyword_result).click();
  }

  async clickFirstVideoThumbnail() {
    await $(locator.youtube.first_video_thumbnail).click();
  }
}
