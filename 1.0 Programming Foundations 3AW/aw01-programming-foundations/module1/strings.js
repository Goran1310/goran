let text = 'My favourite book is "Harry Potter". I love this book so much.';
let result = text.replace("book", "movie");
document.writeln(result); //My favourite movie is "Harry Potter". I love this book so much.
let result2 = text.replace(/book/g, "movie");
document.writeln(result2);
alert("welcome to my website\nenjoy");