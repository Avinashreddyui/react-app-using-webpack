var React = require('react');
var GreeterMessage = React.createClass({
    render: function (){
        var name =this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Here your name displays:</h1><h4>Hello{name}!</h4>
                <h1>Here your message displays:</h1><p>{message} </p>
            </div>
        );
    }
});

module.exports= GreeterMessage;