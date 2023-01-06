import { Ingredient, Recipe, Fish, Meat, Veggie } from "./classes.js";
// Get the modal
var modal = document.getElementById("myModal");
//get content of modal
const modalContent = document.querySelector(".modal-content");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

const deleteFoodBtns = () => {
  const buttons = document.querySelectorAll(".foodType");
  buttons.forEach((btn) => {
    btn.remove();
  });
};
const deleteSubmitBtn = () => {
  const buttons = document.querySelectorAll(".submitRecipe");
  buttons.forEach((btn) => {
    btn.remove();
  });
};

const createNewTextElement = (newEl, newClass, newContent, targetEl) => {
  const el = document.createElement(newEl);
  const content = document.createTextNode(newContent);
  el.setAttribute("class", newClass);
  el.appendChild(content);
  targetEl.appendChild(el);
  return el;
};

const addSubmitBtn = () => {
  createNewTextElement("button", "submitRecipe", "Submit", modalContent);
};

const instantiateClass = (food) => {
  const typeOfFood = food.toLowerCase();

  switch (typeOfFood) {
    case "meat":
      return new Meat();
    case "fish":
      return new Fish();
    case "veggie":
      return new Veggie();
    default:
      return new Ingredient();
  }
};

const displayRange = (event) => {
  const range = document.getElementById("amountRange");
  const amount = document.getElementById("amount");
  amount.value = range.value;
};

const listIngredient = (ingredient) => {
  const list = document.querySelector(".ingredients-list");
  const newEl = document.createElement("li");
  const newContent = document.createTextNode(
    `${ingredient.getName()} ${ingredient.getAmount()} ${ingredient.getUnit()}`
  );
  newEl.appendChild(newContent);

  if (document.querySelector(".ingredients-h3-list") === null) {
    createNewTextElement("h3", "ingredients-h3-list", "Ingredients:", list);
  }

  list.appendChild(newEl);
};

const createIngredient = () => {
  const name = document.getElementById("ingredientName").value;
  const amount = document.getElementById("amount").value;
  const unit = document.getElementById("unit").value;
  let newIngredient = new Ingredient(name, amount, unit);
  listIngredient(newIngredient);
};

const getIngredients = () => {
  const list = document.querySelector(".ingredients-list");
  const liArray = Array.from(list.children);
  liArray.shift();
  return liArray.map((child) => child.textContent);
};

const getRecipeName = () => {
  return document.querySelector(".recipeName").value;
};

const submitRecipeName = () => {
  document.querySelector(".h1-recipe").textContent = getRecipeName();
};

const insertIngredientLine = () => {
  let div = document.createElement("div");
  let newDiv = document.createElement("div");
  createNewTextElement("label", "recipeName-label", "Recipe Name:", newDiv);
  let recipeName = createNewTextElement("input", "recipeName", "", newDiv);
  recipeName.setAttribute("type", "text");
  const recipeNameBtn = createNewTextElement( "button", "recipeNameBtn", "Add Name", newDiv );
  recipeNameBtn.addEventListener("click", submitRecipeName);
  createNewTextElement("h3", "ingredients-h3", "Add Ingredient:", newDiv);
  createNewTextElement("label", "ingredientName", "Ingredient:", newDiv);
  let nameInput = createNewTextElement("input", "ingredientName", "", newDiv);
  nameInput.setAttribute("id", "ingredientName");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "gulrot");
  createNewTextElement("label", "amountLabel", "Amount:", newDiv);
  let amountInput = createNewTextElement("input", "amount", "", newDiv);
  amountInput.setAttribute("id", "amount");
  amountInput.setAttribute("type", "number");
  amountInput.value = 1;
  let rangeInput = createNewTextElement("input", "amountRange", "", newDiv);
  rangeInput.setAttribute("id", "amountRange");
  rangeInput.setAttribute("type", "range");
  rangeInput.setAttribute("min", "0");
  rangeInput.setAttribute("max", "10");
  rangeInput.value = 1;
  createNewTextElement("label", "unitLabel", "Unit:", newDiv);
  let unitInput = createNewTextElement("input", "unit", "", newDiv);
  unitInput.setAttribute("id", "unit");
  unitInput.setAttribute("type", "text");
  unitInput.setAttribute("placeholder", "stk");
  let submitIngredientBtn = createNewTextElement( "button", "submitIngredient", "+", newDiv );
  submitIngredientBtn.setAttribute("id", "submitIngredient");
  submitIngredientBtn.setAttribute("type", "submit");
  createNewTextElement("ul", "ingredients-list", "", newDiv);
  rangeInput.addEventListener("input", displayRange);
  submitIngredientBtn.addEventListener("click", createIngredient);
  div.appendChild(newDiv);
  return div;
};

const addNameToClass = (classNew, recipe) => {
  classNew.recipeName = recipe;
};

const addIngredientsToClass = (recipeClass, ingr) => {
  let newList = [...recipeClass.ingredients, ingr];
  recipeClass.ingredients = newList.flat(1);
};

const createNewRecipe = (event) => {
  const food = Array.from(event.target.classList)[0];
  deleteFoodBtns();

  modalContent.appendChild(insertIngredientLine());

  if (document.querySelector(".submitRecipe") === null) {
    addSubmitBtn();
    const submitRecipe = () => {
      const newRecipe = instantiateClass(food);
      addNameToClass(newRecipe, getRecipeName());
      addIngredientsToClass(newRecipe, getIngredients());
      console.log(newRecipe);
    };
    document
      .querySelector(".submitRecipe")
      .addEventListener("click", submitRecipe);
  }
};

const makeFoodBtn = (typeOfFood) => {
  const btn = createNewTextElement(
    "button",
    typeOfFood,
    typeOfFood,
    modalContent
  );
  btn.classList.add("foodType");
  btn.addEventListener("click", createNewRecipe);
};

const createFoodTypeBtns = () => {
  makeFoodBtn("meat");
  makeFoodBtn("fish");
  makeFoodBtn("veggie");
};

modalBtn.onclick = function () {
  modal.style.display = "block";
  if (!document.querySelector(".h1-recipe")) {
    createNewTextElement("h1", "h1-recipe", "New Recipe", modalContent);
  }

  if (!document.querySelector(".foodType")) {
    createFoodTypeBtns();
  }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  if (document.querySelector(".submitRecipe") !== null) {
    deleteSubmitBtn();
  }
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    if (document.querySelector(".submitRecipe") !== null) {
      deleteSubmitBtn();
    }
    modal.style.display = "none";
  }
};
