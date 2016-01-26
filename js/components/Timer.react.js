/**
 * Created by berkay on 1/26/2016.
 */
var React = require('react');

var Timer = React.createClass({
    getInitialState: function() {
        return null;
    },
    render: function() {
        return (
            <div>{this.props.minutes}:{this.props.seconds}</div>
        )
    }
});

module.exports = Timer;