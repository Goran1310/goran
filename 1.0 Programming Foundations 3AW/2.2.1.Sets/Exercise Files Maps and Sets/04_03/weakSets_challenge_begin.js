//Survey Respondents
const resOne = {id: 1234};
const resTwo = {id: 5678};
const resThree = {id: 9012};
const resFour = {id: 3456};

//Create a new WeakSet and add the above values to your newly created WeakSet. 
const surveyResponse = new WeakSet();
surveyResponse.add(resOne).add(resTwo).add(resThree).add(resFour);
//Does your WeakSet have any responses tied to the {id: 9012}?
console.log("Does your WeakSet have any responses tied to the {id: 9012}?", surveyResponse.has(resThree));

//Does your WeakSet have any responses tied to the {id: 0123}?
console.log("Does your WeakSet have any responses tied to the {id: 0123}?", surveyResponse.has({id: 0123}));

//We need to delete resThree from the WeakSet.
surveyResponse.delete(resThree);
console.log("This is check of size", );

// https://www.linkedin.com/learning/javascript-maps-and-sets/solution-weaksets?autoSkip=true&autoplay=true&resume=false&u=43268076