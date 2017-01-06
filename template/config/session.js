'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Session Driver
  |--------------------------------------------------------------------------
  |
  | Cookie driver will save session on cookies, but make sure to setup
  | APP_KEY inside .env file to keep cookies encrypted and signed.
  |
  | Available Options are :-
  | cookie, file, redis
  */
  driver: Env.get('SESSION_DRIVER', 'cookie'),

  /*
  |--------------------------------------------------------------------------
  | Cookie Name
  |--------------------------------------------------------------------------
  |
  | Cookie name defines the name of key to used for saving session cookie.
  | Cookie name is required even if you are not using cookie driver.
  |
  */
  cookie: 'adonis-session',

  /*
  |--------------------------------------------------------------------------
  | Session Age
  |--------------------------------------------------------------------------
  |
  | Define session life in minutes. Session will be destroyed after defined
  | minutes of inactivity.
  |
  */
  age: 120,

  /*
  |--------------------------------------------------------------------------
  | Clear on browser close
  |--------------------------------------------------------------------------
  |
  | You can make your sessions to be removed once browser has been closed/killed
  | by setting below value to true. Also it will disregard age parameter.
  |
  */
  clearWithBrowser: false,

  /*
  |--------------------------------------------------------------------------
  | Http Only Cookie
  |--------------------------------------------------------------------------
  |
  | Keep cookie http only, which means javascript cannot access the cookie
  | by document.cookie.
  |
  */
  httpOnly: true,

  /*
  |--------------------------------------------------------------------------
  | Same site only
  |--------------------------------------------------------------------------
  |
  | Keep cookie accessible from the same domain. Available values are
  | true, false, lax and strict.
  | https://tools.ietf.org/html/draft-west-first-party-cookies-07
  |
  */
  sameSite: true,

  /*
  |--------------------------------------------------------------------------
  | Domain
  |--------------------------------------------------------------------------
  |
  | Set domain for session cookie. If not defined it will be set to current
  | domain. For single and subdomains use. ".adonisjs.com"
  |
  */
  domain: null,

  /*
  |--------------------------------------------------------------------------
  | Path
  |--------------------------------------------------------------------------
  |
  | Path defines where the session will be available. If you want to access
  | it anywhere on your website. Set it to /
  |
  */
  path: '/',

  /*
  |--------------------------------------------------------------------------
  | Secure
  |--------------------------------------------------------------------------
  |
  | Define whether to keep session cookie secure or not. Secured cookies
  | are only served over HTTPS.
  |
  */
  secure: false,

  /*
  |--------------------------------------------------------------------------
  | File Driver Config
  |--------------------------------------------------------------------------
  |
  | Here we define settings for file driver. For now we define directory
  | in which we want to store our sessions. Defined directory will be
  | created inside storage directory.
  |
  */
  file: {
    directory: 'sessions'
  }

}
