var React = require('react');
var Header = require('./Header.react');
var ActionControls = require('./ActionControls.react');
var Timer = require('./Timer.react');
var PomoStore = require('../stores/PomoStore');
var PomoConstants = require('../constants/PomoConstants');

function initState() {
    var timeLeft = PomoStore.getTimeLeft();
    console.log("Store timeLeft: " + timeLeft);
    var minutes = Math.floor(timeLeft / 60);
    if (minutes < 10)
        minutes = "0" + minutes;
    var seconds = timeLeft % 60;
    if (seconds < 10)
        seconds = "0" + seconds;
    return {
        timeLeft: timeLeft,
        minutes: minutes,
        seconds: seconds
    }
}

var PomodoroApp = React.createClass({
    getInitialState: function() {
        return initState();
    },
    _setMode: function() {
        this.setState(initState());
    },
    _start: function() {
        this.interval = setInterval(this._tick, 1000);
    },
    _tick: function() {
        var timeLeft = this.state.timeLeft - 1;

        console.log("Tick timeLeft: " + timeLeft);
        var minutes = Math.floor(timeLeft / 60);
        if (minutes < 10)
            minutes = "0" + minutes;
        var seconds = timeLeft % 60;
        if (seconds < 10)
            seconds = "0" + seconds;
        this.setState({
            timeLeft: timeLeft,
            minutes: minutes,
            seconds: seconds
        });

        if (timeLeft == 0) {
            console.log("Clearing interval.");
            clearInterval(this.interval);

        }
    },
    componentDidMount: function() {
        PomoStore.addStateChangeListener(this._onChanged);
        PomoStore.addModeChangeListener(this._onModeChanged);
    },
    componentWillUnmount: function() {
        PomoStore.removeStateChangeListener(this._onChanged);
        PomoStore.removeStateChangeListener(this._onModeChanged);
        if (this.interval) {
            clearInterval(this.interval);
        }
    },
    _onModeChanged: function() {
        console.log("Mode changed.");
        this._setMode();
    },
    _onChanged: function() {
        console.log("onChange.");
        var currentState = PomoStore.getCurrentState();
        if (currentState == PomoConstants.STATE_RUNNING) {
            this._start();
        }
    },
    render: function() {
        return (
            <div>
                <Header />
                <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
                <ActionControls />
            </div>
        );
    }
});

module.exports = PomodoroApp;
