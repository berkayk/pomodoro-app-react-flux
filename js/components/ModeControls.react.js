var React = require('react');
var PomoActions = require('../actions/PomoActions');
var PomoConstants = require('../constants/PomoConstants');

var ModeControls = React.createClass({
    getInitialState: function() {
        return null;
    },
    componentDidMount: function() {

    },
    componentWillMount: function() {

    },
    render: function(){
        var pomoClasses = this.props.mode == PomoConstants.MODE_POMODORO ? "btn btn-danger m-r-1 animated swing" : "btn btn-danger-outline m-r-1";
        var shortBreakClasses = this.props.mode == PomoConstants.MODE_SHORT_BREAK ? "btn btn-info m-r-1 animated swing" : "btn btn-info-outline m-r-1";
        var longBreakClasses = this.props.mode == PomoConstants.MODE_LONG_BREAK ? "btn btn-info m-r-1 animated swing" : "btn btn-info-outline m-r-1";
        return (<div className="text-xs-center">
            <a className="text-muted m-r-1 hint--left" data-hint="You can select your timer setup here."><i className="fa fa-question-circle" ></i></a>
            <a className={pomoClasses} onClick={this._onSetPomodoro}>Pomodoro</a>
            <a className={shortBreakClasses} onClick={this._onSetShortBreak}>Short Break</a>
            <a className={longBreakClasses} onClick={this._onSetLongBreak}>Long Break</a>
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

module.exports = ModeControls;