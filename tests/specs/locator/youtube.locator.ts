export const YouTubeLocators = {
  searchIcon: '//android.widget.ImageView[@content-desc="Search"]',
  searchInput: '//android.widget.EditText[@resource-id="com.google.android.youtube:id/search_edit_text"]',
  firstKeywordResult: '(//android.widget.ImageView[@resource-id="com.google.android.youtube:id/search_type_icon"])[1]',
  firstVideoThumbnail: '//android.view.ViewGroup[@content-desc="4EVE - Situationship | Official MV - 3 minutes, 30 seconds - Go to channel - 4EVE - 15 million views - 1 year ago - play video"]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView[1]',
  videoScreen: '//android.view.ViewGroup[@resource-id="com.google.android.youtube:id/watch_while_time_bar_view"]',
  pauseButton: '//android.widget.ImageView[@content-desc="Pause video"]',
  playButton: '//android.widget.ImageView[@content-desc="Play video"]'
};
