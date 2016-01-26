var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PomoConstants = require('../constants/PomoConstants');
var assign = require('object-assign');

var _pomodoroCount = 0;
var _timeLeft = 25;
var _mode = PomoConstants.MODE_POMODORO;
var _currentState = PomoConstants.STATE_STOPPED;

var EVENT_STATE_CHANGED = 'state_changed';
var EVENT_MODE_CHANGED = 'mode_changed';

function setMode(mode) {
    _mode = mode;
    switch (mode) {
        case PomoConstants.MODE_POMODORO:
            _timeLeft = 25;
            PomoStore.emitModeChanged(_currentState);
            break;
        case PomoConstants.MODE_SHORT_BREAK:
            _timeLeft = 5;
            PomoStore.emitModeChanged(_currentState);
            break;
        case PomoConstants.MODE_LONG_BREAK:
            _timeLeft = 10;
            PomoStore.emitModeChanged(_currentState);
            break;
        default:
            console.log("Shouldn't happen. Invalid mode: " + mode);
    }
}

function start() {
    console.log("Starting pomodoro at store.");
    if (_currentState == PomoConstants.STATE_RUNNING) {
        return;
    }

    if (_currentState == PomoConstants.STATE_STOPPED) {
        _timeLeft = 25;
        _pomodoroCount++;
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitChanged(_currentState);
    }
    else {
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitChanged(_currentState);
    }
}


var PomoStore = assign({}, EventEmitter.prototype, {
    getTimeLeft: function() {
        return _timeLeft;
    },
    getCurrentState: function() {
        return _currentState;
    },
    getPomodoroCount: function() {
        return _pomodoroCount;
    },
    emitChanged: function(state) {
        this.emit(EVENT_STATE_CHANGED, state);
    },
    emitModeChanged: function() {
        this.emit(EVENT_MODE_CHANGED, _mode);
    },
    addStateChangeListener: function(callback) {
        this.on(EVENT_STATE_CHANGED, callback);
    },
    removeStateChangeListener: function(callback) {
        this.removeListener(EVENT_STATE_CHANGED, callback);
    },
    addModeChangeListener: function(callback) {
        this.on(EVENT_MODE_CHANGED, callback);
    },
    removeModeChangeListener: function(callback) {
        this.removeListener(EVENT_MODE_CHANGED, callback);
    },
    dispatcherIndex: AppDispatcher.register(function(event) {
        console.log("Dispatcher received action: " + JSON.stringify(event));
        if (event.source == PomoConstants.DISPATCH_SOURCE_VIEW) {
            // View Actions
            switch(event.action.type) {
                case PomoConstants.ACTION_SET_MODE:
                    setMode(event.action.mode);
                    break;
            }
        }

        return true; // No errors. Needed by promise in Dispatcher.
    })
});

module.exports = PomoStore;