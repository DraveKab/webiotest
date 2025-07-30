export const YouTubeLocators = {
  search_icon: '//android.widget.ImageView[@content-desc="Search"]',
  search_input: '//android.widget.EditText[@resource-id="com.google.android.youtube:id/search_edit_text"]',
  first_keyword_result: '(//android.widget.ImageView[@resource-id="com.google.android.youtube:id/search_type_icon"])[1]',
  first_video_thumbnail: '//android.view.ViewGroup[@content-desc="4EVE - Situationship | Official MV - 3 minutes, 30 seconds - Go to channel - 4EVE - 15 million views - 1 year ago - play video"]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView[1]',
  video_screen: '//android.view.ViewGroup[@resource-id="com.google.android.youtube:id/watch_while_time_bar_view"]',
  pause_button: '//android.widget.ImageView[@content-desc="Pause video"]',
  play_button: '//android.widget.ImageView[@content-desc="Play video"]'
};
