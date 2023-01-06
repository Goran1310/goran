
/*Basic Syntax:

    //Render a component
    ReactDOM.render( JSX code, target );

*/

/*Basic Syntax:  creating classes

    //Two ways to create a class in React

    //React's method
    var Main = React.createClass({
        render: function(){
            return ( ... )
        }
    })
    
    //ES6's method
    class Main extends React.Component({
        render() {
            return ( ... );
        }
    })

*/

var target = document.getElementById("container");
var targetReact = document.getElementById("react");
var targetStandard = document.getElementById("standard");

var TopNav = React.createClass({
    render: function(){
        return (
            <nav>
                <a href="home.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
        )
    } 
});

ReactDOM.render(
    <div>
        <TopNav />    
        <h1>Hello ReactJS</h1>
        <p>Let's learn ReactJS</p>
    </div>,
    target
);











