var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {
    handleViewAction: function(action) {
        this.dispatch(action);
    },
    handleServerAction: function(action) {

    }
});

module.exports = AppDispatcher;