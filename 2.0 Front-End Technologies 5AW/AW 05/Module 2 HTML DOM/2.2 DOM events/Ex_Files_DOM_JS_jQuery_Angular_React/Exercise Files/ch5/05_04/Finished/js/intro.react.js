
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

/*
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

*/


var targetLiveUpdate = document.getElementById("liveupdate");

class LiveUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state = {message: "ReactJS Live Update",
                      checkedState: false,
                      completed: "active",
                      inputValue: "",
                      comment: ""
                     }
        
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleComment = this.handleComment.bind(this);
        
    }
    
    handleInput(evt){
        this.setState({inputValue: evt.target.value, comment: evt.target.value});
    }
    
    handleComment(evt){
        this.setState({comment: evt.target.value});
    }
    
    handleCheckbox(){
        if(this.state.checkedState == true){
            this.setState({checkedState: false, completed: "active"});
        }else{
            this.setState({checkedState: true, completed: "completed"});
        }
        
        console.log(!this.state.checkedState);
    }
    
    
    render() {
        
        const active = {color: "blue", textDecoration: "none"};
        const inactive = {color: "grey", textDecoration: "line-through"};
        var curStyle;
        if(this.state.checkedState == true)
            curStyle = inactive;
        else
            curStyle = active;
            
        
        return(
            <div>
                <h1>{this.state.message}</h1>
                <input type="checkbox" defaultCheck={this.state.checkedState} onChange={this.handleCheckbox}/>
                <span style={curStyle}>Build a reactJS component</span>
                <p>Status:  Task is {this.state.completed}.</p>
                <hr/>
                Text: <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
                <br/><br/>
                <textarea value={this.state.comment} onChange={this.handleComment}>
                </textarea>
            
            </div>
        );
    }
}


ReactDOM.render(<LiveUpdate />, targetLiveUpdate);































