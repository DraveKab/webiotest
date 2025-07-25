import { expect } from 'expect-webdriverio';

describe('WebdriverIO and Appium, when interacting with youtube,', () => {

    it('should be youtube', async () => {
        await $('//android.widget.ImageView[@content-desc="Search"]').click()
        await expect('//android.widget.ImageView[@content-desc="Search"]').toBeClickable()
    });

    it('should type 4eve into search box', async () => {
        await $('//android.widget.EditText[@resource-id="com.google.android.youtube:id/search_edit_text"]').addValue('4eve situationship');
        await expect ('//android.widget.EditText[@resource-id="com.google.android.youtube:id/search_edit_text"]').toHaveText('4eve');
        
    });

    it('should click on 4eve keyword', async () => {
        await $('(//android.widget.ImageView[@resource-id="com.google.android.youtube:id/search_type_icon"])[1]').click()
        await expect('(//android.widget.ImageView[@resource-id="com.google.android.youtube:id/search_type_icon"])[1]').toBeClickable()
    });

    it('should click on video thumbnail', async () => {
  await $('//android.view.ViewGroup[@content-desc="4EVE - Situationship | Official MV - 3 minutes, 30 seconds - Go to channel - 4EVE - 15 million views - 1 year ago - play video"]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView[1]').click();
  await expect('//android.view.ViewGroup[@content-desc="4EVE - Situationship | Official MV - 3 minutes, 30 seconds - Go to channel - 4EVE - 15 million views - 1 year ago - play video"]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView[1]').toBeClickable()
        await browser.pause(20000);
    });
    
    it('should click on video sceen', async () => {
  await $('//android.view.ViewGroup[@resource-id="com.google.android.youtube:id/watch_while_time_bar_view"]').click();
   await expect('//android.view.ViewGroup[@resource-id="com.google.android.youtube:id/watch_while_time_bar_view"]').toBeClickable()
    });

    it('should click on pause', async () => {
  await $('//android.widget.ImageView[@content-desc="Pause video"]').click();
   await expect('//android.widget.ImageView[@content-desc="Pause video"]').toBeClickable()
    });

    it('should continue the video', async () => {
  await $('//android.widget.ImageView[@content-desc="Play video"]').click();
   await expect('//android.widget.ImageView[@content-desc="Play video"]').toBeClickable()
    
    });

    
});