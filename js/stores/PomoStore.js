var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PomoConstants = require('../constants/PomoConstants');
var assign = require('object-assign');


var _pomodoroCount = 0;
var _timeLeft = PomoConstants.INTERVAL_POMODORO;
var _mode = PomoConstants.MODE_POMODORO;
var _currentState = PomoConstants.STATE_PAUSED;

var EVENT_STATE_CHANGED = 'state_changed';
var EVENT_MODE_CHANGED = 'mode_changed';

function setMode(mode) {
    _mode = mode;
    switch (mode) {
        case PomoConstants.MODE_POMODORO:
            _timeLeft = PomoConstants.INTERVAL_POMODORO;
            PomoStore.emitModeChanged();
            break;
        case PomoConstants.MODE_SHORT_BREAK:
            _timeLeft = PomoConstants.INTERVAL_SHORT_BREAK;
            PomoStore.emitModeChanged();
            break;
        case PomoConstants.MODE_LONG_BREAK:
            _timeLeft = PomoConstants.INTERVAL_LONG_BREAK;
            PomoStore.emitModeChanged();
            break;
        default:
            console.log("Shouldn't happen. Invalid mode: " + mode);
    }
}

function start() {
    console.log("Starting pomodoro at store.");
    if (_currentState == PomoConstants.STATE_PAUSED) {
        _timeLeft = 25;
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitStateChanged();
    }
}

function pause() {
    console.log("Entered pause.");
    if (_currentState == PomoConstants.STATE_RUNNING) {
        // emit only if timer is running
        _currentState = PomoConstants.STATE_PAUSED;
        PomoStore.emitStateChanged();
    }
}

function reset() {
    console.log("Entered reset.");
    setMode(_mode);
    _currentState = PomoConstants.STATE_PAUSED;
    PomoStore.emitStateChanged();
}


var PomoStore = assign({}, EventEmitter.prototype, {
    getTimeLeft: function() {
        return _timeLeft;
    },
    getCurrentState: function() {
        return _currentState;
    },
    getCurrentMode: function() {
        return _mode;
    },
    pomodoroComplete: function() {
        console.log("Entered pomodoroComplete!");
        _pomodoroCount++;
        reset();
    },
    getPomodoroCount: function() {
        return _pomodoroCount;
    },
    emitStateChanged: function() {
        this.emit(EVENT_STATE_CHANGED, _currentState);
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
                case PomoConstants.ACTION_START:
                    start();
                    break;
                case PomoConstants.ACTION_PAUSE:
                    pause();
                    break;
                case PomoConstants.ACTION_RESET:
                    reset();
                    break;
            }
        }

        return true; // No errors. Needed by promise in Dispatcher.
    })
});

module.exports = PomoStore;