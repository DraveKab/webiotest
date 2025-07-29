import { expect } from 'expect-webdriverio';
import { YouTubeLocators } from '../specs/locator/youtube.locator';


describe('WebdriverIO and Appium, when interacting with youtube,', () => {

    it('should be youtube', async () => {
        await $(YouTubeLocators.searchIcon).click();
         expect($(YouTubeLocators.searchIcon)).toBeClickable();
    });

    it('should type 4eve into search box', async () => {
        await $(YouTubeLocators.searchInput).addValue('4eve situationship');
         expect($(YouTubeLocators.searchInput)).toHaveValue('4eve');
    });

    it('should click on 4eve keyword', async () => {
        await $(YouTubeLocators.firstKeywordResult).click();
         expect($(YouTubeLocators.firstKeywordResult)).toBeClickable();
    });

    it('should click on video thumbnail', async () => {
        await $(YouTubeLocators.firstVideoThumbnail).click();
         expect($(YouTubeLocators.firstVideoThumbnail)).toBeClickable();
    });

    it('should click on video screen', async () => {
        await $(YouTubeLocators.videoScreen).click();
         expect($(YouTubeLocators.videoScreen)).toBeClickable();
    });

    it('should click on pause', async () => {
         $(YouTubeLocators.pauseButton).click();
         expect($(YouTubeLocators.pauseButton)).toBeClickable();
    });

    it('should continue the video', async () => {
         $(YouTubeLocators.playButton).click();
         expect($(YouTubeLocators.playButton)).toBeClickable();
    });

});
