var React = require('react');

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
            <button>Pomodoro</button>
            <button>Short</button>
            <button>Long</button>
            </div>);
    }
});

module.exports = Header;