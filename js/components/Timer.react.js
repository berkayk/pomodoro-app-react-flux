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
            <div className="text-xs-center m-a-3">
                <h1 className="display-3">{this.props.minutes}:{this.props.seconds}</h1></div>
        )
    }
});

module.exports = Timer;