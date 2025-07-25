import { expect } from 'expect-webdriverio';
import { YouTubeLocators } from '../specs/locator/youtube.locator';


describe('WebdriverIO and Appium, when interacting with youtube,', () => {

    it('should be youtube', async () => {
        await $(YouTubeLocators.searchIcon).click();
        await expect($(YouTubeLocators.searchIcon)).toBeClickable();
    });

    it('should type 4eve into search box', async () => {
        await $(YouTubeLocators.searchInput).addValue('4eve situationship');
        await expect($(YouTubeLocators.searchInput)).toHaveText('4eve');
    });

    it('should click on 4eve keyword', async () => {
        await $(YouTubeLocators.firstKeywordResult).click();
        await expect($(YouTubeLocators.firstKeywordResult)).toBeClickable();
    });

    it('should click on video thumbnail', async () => {
        await $(YouTubeLocators.firstVideoThumbnail).click();
        await expect($(YouTubeLocators.firstVideoThumbnail)).toBeClickable();
        await browser.pause(15000);
    });

    it('should click on video screen', async () => {
        await $(YouTubeLocators.videoScreen).click();
        await expect($(YouTubeLocators.videoScreen)).toBeClickable();
    });

    it('should click on pause', async () => {
        await $(YouTubeLocators.pauseButton).click();
        await expect($(YouTubeLocators.pauseButton)).toBeClickable();
    });

    it('should continue the video', async () => {
        await $(YouTubeLocators.playButton).click();
        await expect($(YouTubeLocators.playButton)).toBeClickable();
    });

});
