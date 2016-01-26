var React = require('react');

var ActionControls = React.createClass({
    getInitialState: function() {
        return null;
    },
    componentDidMount: function() {

    },
    componentWillMount: function() {

    },
    render: function(){
        return (<div>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
            </div>);
    }
});

module.exports = ActionControls;