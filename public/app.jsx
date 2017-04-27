/**
 * Created by Avinash Theppala on 4/17/2017.
 */
/*I have divided my whole component into three
* my goal is to write a code for state changes in
* React using components.
* Greeter component is my base component
*    where this component is divided into two components
*    1. GreeterMessage is the components which displays default
*    values.
*    2. Greeter Form is he form which contains to fields input and text area
*    on submit, the vaues that are entered in these input fields
 *    must change the Default values in GreeterMessage component
 *    using states and props*/
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');
ReactDOM.render(

    <Greeter />
        ,
    document.getElementById('app')
);