/**
 * Created by Avinash Theppala on 4/27/2017.
 */
var React = require('react');
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var message = this.refs.message.value;
        var name= this.refs.name.value;
        var updates={};
        if(name.length > 0){
            this.refs.name.value= '';
            updates.name=name;
        }
        if(message.length>0){
            this.refs.message.value='';
            updates.message=message;
        }
        this.props.onNewName(updates);
    },
    render:function () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" placeholder="enter your name"/>
                    <br/>
                    <br/>
                    <textarea ref='message' placeholder="type your Message"></textarea>
                    <br/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

module.exports=GreeterForm;