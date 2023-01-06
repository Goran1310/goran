const toCapital = str => {
    const words = str.split(" ");
    return words;
}

const shortStr = "Hi there";
const longStr = "My favourite book is \"Harry Potter\". I love this book so  much.";
toCapital(longStr);