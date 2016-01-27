var React = require('react');

var Header = React.createClass({
   render: function() {
       return (
           <div>
               <h1 className="text-xs-center m-a-2">
                   <img width="50" className="img m-r-1" src="assets/img/tomato-small.png" />
                   <span className="text-danger">pomodo</span><b className="text-info">react</b>
               </h1>
               <audio ref="player" src="assets/sound/clock-short.mp3" />
           </div>
       );
   }
});

module.exports = Header;