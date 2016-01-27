var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <div>
                <hr className="m-t-3"/>
                <div className="m-t-3 row">
                    <div className="col-sm-6">
                        <div>
                            <h4 className="m-b-1">What is Pomodoro Technique?</h4>
                            <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
                                The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,
                                separated by short breaks. Details can be found <a href="http://pomodorotechnique.com/" target="_blank">here</a>.</p>
                        </div>
                        <div className="m-t-2">
                            <h4 className="m-b-1">Is there a tutorial?</h4>
                            <p>Yes! I am currently writing a tutorial covering both React and Flux.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <h4 className="m-b-1">Simple Instructions</h4>
                            <div>It is really easy to use a pomodoro timer.
                                First you decide on a task that you need to complete.
                                After deciding on the task, just select the red pomodoro button up there and press the green <span className="text-success">START</span> button.
                                When the timer is finished, you are free to take a break. After 3 short breaks, you may have a long break. </div>
                            <br />
                            <p>Rinse and repeat.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Footer;