/**
 * Created by berkay on 1/26/2016.
 */
var React = require('react');

var PomoCount = React.createClass({
    getInitialState: function() {
        return null;
    },
    render: function() {
        return (
            <div className="text-xs-center">
                <h1 className="display-4">{this.props.count}</h1>
                Pomodoros Complete Today!
                <hr />
            </div>
        )
    }
});

module.exports = PomoCount;