const global_data =  {
    nacl_keys:      null,
    request_header: null,
    session_params: null,
    is_admin:       false,
    public_api:     null,
    user_api:       null,
    admin_api:      null,
    userInfo:       null,
    settings_keys: {
        settingsTwoFa : "twoFARequired",
        settingsAds:    "animals_do_not_scramble", // Do not scramble animal positions randomly (Less secure)
        settingsMui:    "masterkey_use_ignored",  // Do not use masterkey (Less secure)
        settingsMao:    "masterkey_ask_once",       // Ask master key once when regenerating password
        settingsPasnc:  "password_always_show_not_copy", // Always show passwords rather than copying to clipboard
        settingsPdl:    "password_default_length",  // Default password length
        settingsPdc:    "password_default_complexity"
    }
}

export default global_data;