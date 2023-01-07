import userData from "./data.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
// function transformData(data){
//     return data.map((el => ({
//     fullName :`${el.name.first} ${el.name.last}`,
//     birthday : new Date(el.dob.date).toString()
//     })));
// }
function transformData(data){
    const isData = data.map((x) => {
     return ({"fullName": `${x.name.first} ${x.name.last}`, 
     "birthday": new Date(x.dob.date).toDateString()
     });//RETURN
});//MAP
return isData;
}//FUNCTION

console.log(transformData(userData));


// export default [
//       {
//          "name":{
//             "title":"Mr",
//             "first":"Levent",
//             "last":"Busser"
//          },
//          "dob":{
//             "date":"1971-08-21T01:08:00.099Z",
//             "age":51
//          }
//       },