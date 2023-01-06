
const toCapital = str => {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  };
  
  const shortStr = "Hi there";
  toCapital(shortStr); // Hi There
  
  const longStr = "the quick brown fox jumped over the lazy dog";
  toCapital(longStr); // The Quick Brown Fox Jumped Over The Lazy Dog

shortStr[0]//?

"word".slice(1,2)//?
