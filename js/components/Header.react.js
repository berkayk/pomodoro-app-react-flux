var React = require('react');
var PomoActions = require('../actions/PomoActions');
var PomoConstants = require('../constants/PomoConstants');

var Header = React.createClass({
    getInitialState: function() {
        return null;
    },
    componentDidMount: function() {

    },
    componentWillMount: function() {

    },
    render: function(){
        return (<div>
            <button onClick={this._onSetPomodoro}>Pomodoro</button>
            <button onClick={this._onSetShortBreak}>Short</button>
            <button onClick={this._onSetLongBreak}>Long</button>
            </div>);
    },
    _onSetPomodoro: function() {
        console.log("Starting pomodoro.");
        PomoActions.setMode(PomoConstants.MODE_POMODORO);
    },
    _onSetShortBreak: function() {
        console.log("Starting short break.");
        PomoActions.setMode(PomoConstants.MODE_SHORT_BREAK);
    },
    _onSetLongBreak: function() {
        console.log("Starting long break.");
        PomoActions.setMode(PomoConstants.MODE_LONG_BREAK);
    }
});

module.exports = Header;