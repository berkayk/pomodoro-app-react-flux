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
    }
};

module.exports = PomoActions;