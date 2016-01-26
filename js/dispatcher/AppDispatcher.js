var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var PomoConstants = require('../constants/PomoConstants');

// This is different from the original docs
var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
            source: PomoConstants.DISPATCH_SOURCE_VIEW,
            action: action
        });
    },
    handleServerAction: function(action) {
        this.dispatch({
            source: PomoConstants.DISPATCH_SOURCE_SERVER,
            action: action
        });
    }
});

module.exports = AppDispatcher;