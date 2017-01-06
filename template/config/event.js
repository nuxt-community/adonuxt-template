'use strict'

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | WildCard
  |--------------------------------------------------------------------------
  |
  | Keeping wildcard true will let you register listeners using wildcards
  | instead of always using full names.
  |
  */
  wildcard: true,

  /*
  |--------------------------------------------------------------------------
  | Handle New Listener
  |--------------------------------------------------------------------------
  |
  | Whether or not to emit new listener event, it's set to false by default.
  |
  */
  newListener: false,

  /*
  |--------------------------------------------------------------------------
  | Max Listeners/Event
  |--------------------------------------------------------------------------
  |
  | Maximum number of listeners to be registered for a single event. 10
  | seems to be a good number.
  |
  */
  maxListeners: 10

}
