var React = require('react');
var ReactDOM = require('react-dom');
// Components
var Header = require('./Header.react');
var ModeControls = require('./ModeControls.react');
var ActionControls = require('./ActionControls.react');
var Timer = require('./Timer.react');
var PomoCount = require('./PomoCount.react');
// Store
var PomoStore = require('../stores/PomoStore');
var PomoConstants = require('../constants/PomoConstants');

function formMinuteSeconds(timeLeft) {
    var minutes = Math.floor(timeLeft / 60);
    if (minutes < 10)
        minutes = "0" + minutes;
    var seconds = timeLeft % 60;
    if (seconds < 10)
        seconds = "0" + seconds;
    return {
        timeLeft: timeLeft,
        minutes: minutes,
        seconds: seconds,
        count: PomoStore.getPomodoroCount(),
        mode: PomoStore.getCurrentMode()
    }
}

function initState() {
    var timeLeft = PomoStore.getTimeLeft();
    return formMinuteSeconds(timeLeft);
}

var PomodoroApp = React.createClass({
    getInitialState: function() {
        return initState();
    },
    _setMode: function() {
        this.setState(initState());
    },
    _pause: function() {
        clearInterval(this.interval);
    },
    _start: function() {
        this.interval = setInterval(this._tick, 1000);
    },
    _tick: function() {
        var timeLeft = this.state.timeLeft - 1;
        this.setState(formMinuteSeconds(timeLeft));

        if (timeLeft == 0) {
            PomoStore.timerComplete();
            console.log("Clearing interval.");
            clearInterval(this.interval);

            var player = this.refs.player;
            if (player) {
                player.play();
            }
        }
    },
    componentDidMount: function() {
        PomoStore.addStateChangeListener(this._onChanged);
        PomoStore.addModeChangeListener(this._onModeChanged);
    },
    componentWillUnmount: function() {
        PomoStore.removeStateChangeListener(this._onChanged);
        PomoStore.removeStateChangeListener(this._onModeChanged);
        /*
        if (this.interval) {
            clearInterval(this.interval);
        }
        */
    },
    _onModeChanged: function() {
        console.log("Mode changed.");
        this._setMode();
    },
    _onChanged: function() {
        console.log("onChange.");
        var currentState = PomoStore.getCurrentState();
        switch (currentState) {
            case PomoConstants.STATE_RUNNING:
                this._start();
                break;
            case PomoConstants.STATE_PAUSED:
                this._pause();
                break;
        }
    },
    render: function() {
        return (
            <div className="container">
                <Header />
                <PomoCount count={this.state.count}/>
                <ModeControls mode={this.state.mode} />
                <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
                <ActionControls />
            </div>
        );
    }
});

module.exports = PomodoroApp;
