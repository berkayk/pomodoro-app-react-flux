var React = require('react');
var PomoActions = require('../actions/PomoActions');

var ActionControls = React.createClass({
    getInitialState: function() {
        return null;
    },
    componentDidMount: function() {

    },
    componentWillMount: function() {

    },
    render: function(){
        return (<div className="text-xs-center">
            <a className="text-muted m-r-1 hint--left" data-hint="You can start, pause and reset your timer here."><i className="fa fa-question-circle"></i></a>
            <button className="btn btn-success m-r-1" onClick={this._onStart}>Start</button>
            <button className="btn btn-default m-r-1" onClick={this._onPause}>Pause</button>
            <button className="btn btn-danger" onClick={this._onReset}>Reset</button>
            </div>);
    },
    _onStart: function() {
        PomoActions.start();
    },
    _onPause: function() {
        PomoActions.pause();
    },
    _onReset: function() {
        PomoActions.reset();
    }
});

module.exports = ActionControls;