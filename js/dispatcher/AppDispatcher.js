var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
            source: "VIEW",
            action: action
        });
    },
    handleServerAction: function(action) {
        this.dispatch({
            source: "SERVER",
            action: action
        });
    }
});

module.exports = AppDispatcher;