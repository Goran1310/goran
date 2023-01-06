/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  value:2,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  increment: function() {
    this.value ++;
    console.log(this.value);
},
decrement: function() {
  this.value --;
  console.log(this.value);
}
};
function addProperty() {
  backpack.new = 10;
  console.log(backpack);
};

function removeProperty() {
  delete backpack.new;
  console.log(backpack);
}
