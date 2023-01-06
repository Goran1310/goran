document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.getElementById('ingredients');

    let total = 0;
    Array.prototype.forEach.call(ingredients.children, (tr) => {
        const td = tr.children[1];
        if(tr.id == 'totals') {
            // console.log('in total row');
            td.innerText = total;
        }    else {
            const weight = parseFloat(td.innerText);
            total += weight;
            console.log(tr, total);
            
        }
    });
});

    // ingredients.childNodes.forEach((tr) =>{
        // ingredients.children.constructor
        // ingredients .children
        // https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?autoSkip=true&autoplay=true&resume=false&u=43268076


