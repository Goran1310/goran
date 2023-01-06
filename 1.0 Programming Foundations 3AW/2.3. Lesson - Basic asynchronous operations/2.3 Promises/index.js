// function print(text) {
//     document.getElementById("displayer").innerHTML = text;
// }
// let promise = new Promise(function(resolve, reject) {
//     let x = 0;
//     if (x == 0) {
//       resolve("OK");
//     } else {
//       reject("Error");
//     }
//   });
// promise.then(
//     function(value) {print(value);},
//     function(error) {print(error);}
// );
// ---
// let p = new Promise((resolve,reject) => {
//     let a = 2
//     if ( a == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })
// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch' + message)
// })
// ---
function watchTutorialCallback(callback, errorCallback) {
    let userLeft = false
    let userWatchingCatMeme = false
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }
  
  function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }
  
  watchTutorialCallback(message => {
    console.log(message)
  }, error => {
    console.log(error.name + ' ' + error.message)
  })
  
  watchTutorialPromise().then(message => {
    console.log(message)
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })
  
  const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })
  
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  })
  
  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })