'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Data Limit
  |--------------------------------------------------------------------------
  |
  | Data limit to be sent on a POST request.
  |
  */
  limit: '1mb',

  /*
  |--------------------------------------------------------------------------
  | Strict
  |--------------------------------------------------------------------------
  |
  | Keeping strict to true will make body parse only parse array and objects
  | using JSON.parse. Keeping it to false will force the parse to parse all
  | values include null.
  |
  */
  strict: true,

  qs: {
    /*
    |--------------------------------------------------------------------------
    | Depth
    |--------------------------------------------------------------------------
    |
    | How deep to parse nested values submitted as form body.
    |
    */
    depth: 5,

    /*
    |--------------------------------------------------------------------------
    | Parameter Limit
    |--------------------------------------------------------------------------
    |
    | Max number of parameters to parse. 1000 is a way decent number for any
    | normal application.
    |
    */
    parameterLimit: 1000,

    /*
    |--------------------------------------------------------------------------
    | Delimiter
    |--------------------------------------------------------------------------
    |
    | Delimiter to be used for parsing values. Example - a=b&b=c
    |
    */
    delimiter: '&',

    /*
    |--------------------------------------------------------------------------
    | Allow Dots
    |--------------------------------------------------------------------------
    |
    | Keeping this value to true will enable dot notation. For example
    | 'a.b=c' will be parsed as {a: {b: 'c'}}
    |
    */
    allowDots: false
  },
  uploads: {

    /*
    |--------------------------------------------------------------------------
    | Multiple
    |--------------------------------------------------------------------------
    |
    | Whether or not to allow multiple file uploads.
    |
    */
    multiple: true,

    /*
    |--------------------------------------------------------------------------
    | CheckSums
    |--------------------------------------------------------------------------
    |
    | This option will enable checksums for uploaded files. Following are
    | the support options.
    |
    | md5, sha1
    |
    */
    hash: false,

    /*
    |--------------------------------------------------------------------------
    | Max Upload Size
    |--------------------------------------------------------------------------
    |
    | Max file upload size for all files. Example - 2 files of 1mb will reach
    | the maximum limit.
    |
    */
    maxSize: '2mb'
  }
}
