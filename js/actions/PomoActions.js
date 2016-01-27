/**
 * Created by berkay on 1/26/2016.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var PomoConstants = require('../constants/PomoConstants');

var PomoActions = {
    setMode: function(mode) {
        AppDispatcher.handleViewAction({
            type: PomoConstants.ACTION_SET_MODE,
            mode: mode
        });
    },
    start: function() {
        AppDispatcher.handleViewAction({
            type: PomoConstants.ACTION_START
        });
    },
    pause: function() {
        AppDispatcher.handleViewAction({
            type: PomoConstants.ACTION_PAUSE
        });
    },
    reset: function() {
        AppDispatcher.handleViewAction({
            type: PomoConstants.ACTION_RESET
        });
    }
};

module.exports = PomoActions;