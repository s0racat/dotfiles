// VA-API
// https://wiki.archlinux.org/title/firefox#Hardware_video_acceleration
// Disable AV1 decoding
// user_pref("media.av1.enabled", false);

// Download
// Preview pdf
//user_pref("browser.download.start_downloads_in_tmp_dir", true);
// Confirm when downloading files
user_pref("browser.download.always_ask_before_handling_new_types", true);

// Security
// Do not save passwords
// user_pref("signon.rememberSignons", false);
// Enable HTTPS-Only Mode in all windows
user_pref("dom.security.https_only_mode", true);

// https://wiki.archlinux.org/title/Firefox#Right_mouse_button_instantly_clicks_the_first_option_in_window_managers
user_pref("ui.context_menus.after_mouseup", true);

// Turn off disk cache
user_pref("browser.cache.disk.enable", false);

// UserAgent
// Faking useragent and platform
//user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0");
//user_pref("general.platform.override", "Win32");

// Do not show warning when opening about:config
user_pref("browser.aboutConfig.showWarning", false);

// Disable firefox intro tabs on the first start
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Disable Firefox View
user_pref("browser.tabs.firefox-view", false);

// Disable Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Enable automatic extension installation from /usr/lib/firefox/browser/extensions/* and profile directory only
// https://searchfox.org/mozilla-central/rev/08f7e9ef03dd2a83118fba6768d1143d809f5ebe/toolkit/mozapps/extensions/AddonManager.jsm#4111-4123
// https://mike.kaply.com/2012/02/21/understanding-add-on-scopes/
// 1 + 4 = 5
user_pref("extensions.enabledScopes", 5);

// Do not open "Firefox Privacy Policy" tab in first launch
user_pref("datareporting.policy.firstRunURL", "");

// Enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Tracking protection
user_pref("privacy.trackingprotection.enabled", true);

// WebRTC LAN IP Address
user_pref("media.peerconnection.ice.default_address_only", true);

// Disable connection tests
user_pref("network.captive-portal-service.enabled", false);

// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// Enable titlebar
//user_pref("browser.tabs.inTitlebar", 0);

user_pref("browser.urlbar.showSearchSuggestionsFirst", false);

user_pref("browser.tabs.unloadOnLowMemory", true);

// user_pref("widget.wayland.fractional-scale.enabled", true);
user_pref("privacy.sanitize.useOldClearHistoryDialog", true);

user_pref("sidebar.revamp", true);
user_pref("sidebar.verticalTabs", true);

// Check syntax
user_pref("_user.js.parrot", "Everything is OK.");
