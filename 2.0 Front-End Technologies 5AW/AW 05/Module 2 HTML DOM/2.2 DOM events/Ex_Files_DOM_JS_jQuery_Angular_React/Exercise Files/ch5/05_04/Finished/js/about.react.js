{
//
////Standard JS
//var targetFrankie = document.getElementById("frankie");
//var countFrankie = 0;
//
//function countfrankie(){
//    var txt  = "<p>Counter: " + countFrankie++ + "</p>";
//    txt += "<p>HR Department</p>";
//    targetFrankie.innerHTML = txt;
//}
//
//setInterval(countfrankie,1000);
//
////ReactJS
//
//var targetDon = document.getElementById("don");
//var countDon = 0;
//
//function countdon(){
//    ReactDOM.render(
//        <div>
//            <p>Counter: {countDon++}</p>
//            <p>IT Department</p>
//        </div>
//        ,
//        targetDon
//    );
//}
//
//setInterval(countdon,1000);
}

var targetTeam = document.getElementById("team");

//ReactJS Class
var TeamMember = React.createClass({
   render: function(){
       return(
           <div className="team-member">
            <img id={this.props.id} className="profile" src={this.props.img}/>
            <p className="team-name">{this.props.name}</p>
            <p className="team-title">{this.props.title}</p>
            </div>
       );
   } 
});

var teamMembers = [{
                    id:"frankiesmith",
                    img:"images/frankiesmith.png",
                    name:"Frankie Smith",
                    title:"Sponsor"
                    },
                   {
                    id:"donlee",
                    img:"images/donlee.png",
                    name:"Don Lee",
                    title:"Sponsor"
                    },
//                   {
//                    id:"ninjablack",
//                    img:"images/ninjablack.png",
//                    name:"Ninja Black",
//                    title:"Developer"
//                    },
                   ];

var SetTeam = React.createClass({
   render: function(){
       return (
        <div>
           {
               teamMembers.map(function(obj){
                return(<TeamMember id={obj.id} img={obj.img} name={obj.name} title={obj.title} />);
           })
           }
        </div>
       );
   } 
});

ReactDOM.render(
    <SetTeam />
    ,
    targetTeam
);



                    
                    








