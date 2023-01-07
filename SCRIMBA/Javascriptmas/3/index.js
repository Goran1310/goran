/* Challenge 1: Favorite Foods
- Topic: Object Destructuring
1. Edit the faveFoods object so that it contains 
your favorite foods.
2. Destructure the faveFoods object into three consts: 
breakfast, lunch, and supper.
3. Fetch the meals <section> from the DOM.
4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I want usually want pizza 🍕.
*/

const faveFoods = {
    breakfast: 'bacon 🥓 and eggs 🍳',
    lunch: 'soup 🍲',
    supper: 'pizza 🍕'
}
const {breakfast, lunch, supper} = faveFoods

const mealsElement = document.getElementById("meals");

mealsElement.innerHTML = `<p>For breakfast, every day I eat ${breakfast}. For lunch, my go to is usually ${lunch}, and for supper I love to get me a ${supper}!</p>`;