var React = require('react');
var Header = require('./Header.react');
var PomoStore = require('../stores/PomoStore');

var PomodoroApp = React.createClass({
    getInitialState: function() {
        return null;
    },
    componentDidMount: function() {
        PomoStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        PomoStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        console.log("onChange.");
    },
    render: function() {
        return (<Header />);
    }
});

module.exports = PomodoroApp;
