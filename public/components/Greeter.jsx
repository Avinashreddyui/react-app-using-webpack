var GreeterMessage = require('./GreeterMessage');
var GreeterForm= require('./GreeterForm');
var React = require('react');
var Greeter = React.createClass({
    getDefaultProps:function () {
        return{
            name:'React',
            message:'hey i am here'
        };
    },
    getInitialState: function () {
        return{
            name:this.props.name,
            message:this.props.message
        };
    },
    handleNewName: function (updates) {
        this.setState(updates);
    },
    render: function () {
        var name= this.state.name;
        var message = this.state.message;
        return(
            <div>
                <GreeterMessage name={name} message={message}/>
                <br/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});
module.exports= Greeter;