'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Content Security Policy
  |--------------------------------------------------------------------------
  |
  | Content security policy filters out the origins not allowed to execute
  | and load resources like scripts, styles and fonts. There are wide
  | variety of options to choose from.
  | @examples
  | directives: {
  |   defaultSrc: ['self', '@nonce', 'cdnjs.cloudflare.com']
  | }
  */
  csp: {
    directives: {
    },
    reportOnly: false,
    setAllHeaders: false,
    disableAndroid: true
  },

  /*
  |--------------------------------------------------------------------------
  | X-XSS-Protection
  |--------------------------------------------------------------------------
  |
  | X-XSS Protection saves from applications from XSS attacks. It is adopted
  | by IE and later followed by some other browsers.
  |
  */
  xss: {
    enabled: true,
    enableOnOldIE: false
  },

  /*
  |--------------------------------------------------------------------------
  | Iframe Options
  |--------------------------------------------------------------------------
  |
  | xframe defines whether or not your website can be embedded inside an
  | iframe. Choose from one of the following options.
  | @available options
  | DENY, SAMEORIGIN, ALLOW-FROM http://example.com
  */
  xframe: 'DENY',

  /*
  |--------------------------------------------------------------------------
  | No Sniff
  |--------------------------------------------------------------------------
  |
  | Browsers have a habit of sniffing content-type of a response. Which means
  | files with .txt extension containing Javascript code will be executed as
  | Javascript. You can disable this behavior by setting nosniff to false.
  |
  */
  nosniff: true,

  /*
  |--------------------------------------------------------------------------
  | No Open
  |--------------------------------------------------------------------------
  |
  | IE users can execute webpages in the context of your website, which is
  | a serious security risk. Below options will manage this for you.
  |
  */
  noopen: true,

  /*
  |--------------------------------------------------------------------------
  | CSRF Protection
  |--------------------------------------------------------------------------
  |
  | CSRF Protection adds another layer of security by making sure, actionable
  | routes does have a valid token to execute an action.
  |
  */
  csrf: {
    enable: true,
    methods: ['POST', 'PUT', 'DELETE'],
    filterUris: [],
    compareHostAndOrigin: true
  }

}
