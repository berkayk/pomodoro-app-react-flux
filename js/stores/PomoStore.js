var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PomoConstants = require('../constants/PomoConstants');
var assign = require('object-assign');

var _pomodoroCount = 0;
var _timeLeft = 25;
var _currentState = PomoConstants.STATE_STOPPED;

var EVENT_STATE_CHANGE = 'state_change';

function startPomodoro() {
    if (_currentState == PomoConstants.STATE_RUNNING) {
        return;
    }

    if (_currentState == PomoConstants.STATE_STOPPED) {
        _timeLeft = 25;
        _pomodoroCount++;
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitStateEvent(_currentState);
    }
    else {
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitStateEvent(_currentState);
    }
}

function shortBreak() {
    if (_currentState == PomoConstants.STATE_RUNNING) {
        return;
    }

    if (_currentState == PomoConstants.STATE_STOPPED) {
        _timeLeft = 5;
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitStateEvent(_currentState);
    }
    else {
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitStateEvent(_currentState);
    }
}

function longBreak() {
    if (_currentState == PomoConstants.STATE_RUNNING) {
        return;
    }

    if (_currentState == PomoConstants.STATE_STOPPED) {
        _timeLeft = 10;
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitStateEvent(_currentState);
    }
    else {
        _currentState = PomoConstants.STATE_RUNNING;
        PomoStore.emitStateEvent(_currentState);
    }
}

var PomoStore = assign({}, EventEmitter.prototype, {
    getTimeLeft: function() {
        return _timeLeft;
    },
    emitStateEvent: function(state) {
        this.emit(EVENT_STATE_CHANGE, state);
    },
    addChangeListener: function(callback) {
        this.on(EVENT_STATE_CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(EVENT_STATE_CHANGE, callback);
    },
    dispatcherIndex: AppDispatcher.register(function(action) {

        switch(action) {
            case PomoConstants.ACTION_START_POMODORO:
                startPomodoro();
                break;
            case PomoConstants.ACTION_SHORT_BREAK:
                shortBreak();
                break;
            case PomoConstants.ACTION_LONG_BREAK:
                longBreak();
                break;
        }

        return true; // No errors. Needed by promise in Dispatcher.
    })
});

module.exports = PomoStore;