import podcasts from "./data.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data){

return data.filter (el => !el.paid).map(el=>({
    title:el.title,
    rating: el.rating,
    paid: el.paid
}))

//    return data.reduce((acc, cast) => cast.paid ? acc : [...acc, {title: cast.title, rating: cast.rating, paid: cast.paid}], [])
// return podcasts
        // return data.filter(data => data.title)
    }


console.log(getFreePodcasts(podcasts))


    // {
    //     id: 1,
    //     title: "Scrimba Podcast", 
    //     duration: 50, 
    //     tags: ["education", "jobs", "technology"], 
    //     hosts: ["Alex Booker"], 
    //     rating: 10,
    //     genre: "education",
    //     paid: false
    // },