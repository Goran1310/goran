    // <script>
    //     // 1A
    //     document.getElementById("btn1").addEventListener("click",function (){
    //         document.getElementById("para1").style.fontSize = "36px";
    //         document.getElementById("para1").style.fontFamily = "Comic Sans MS";
    //      });
    //     //  1B
    //      function changeStyle() {
    //         text.style.fontSize = "16px";
    //         text.style.fontFamily = "Comic Sans MS";
    //         text.style.color = "blue";
    //      }
    //     //  2 Create two text paragraphs. Without giving them either ID or class, create a button that changes the font colour of the first one to red and the second one to green.
    //      function changeStyle2 () {
    //         let body = document.getElementsByTagName("body")[0];
    //         let bodyElements = body.getElementsByTagName("p");
    //         let paragraph1 = bodyElements[2];
    //         paragraph1.style.color = "red";
    //         let paragraph2 = bodyElements[3];
    //         paragraph2.style.color = "green";
    //         // let divElement = body.getElementsByTagName("div");
    //         // div1 = divElement[0];
    //         // div1.style.color = "blue";
    //      }
    //     //  3 Create a link and set its Href, target and type attributes. Create a button showing the value of these attributes in an alert.
    //      function change3() {
    //         let href = document.getElementById("link3").href;
    //         alert("The value of href attribute of the link is " + href);
    //         let type = document.getElementById("link3").type;
    //         alert("The value of type attribute of the link is " + type);
    //         let target = document.getElementById("link3").target;
    //         alert("The value of target attribure of the link is " + target);
    //      }
    //     // <!-- 4. Create a table containing two columns: Name and Surname. Create a button that adds a new row at the beginning,
    //         //  with values ‘New Name’ as the name and ‘New Surname’ as the surname. -->
    //         function change4(tableID) {
    //         // Get a reference to the table
    //         let tableRef = document.getElementById(tableID);
    //         // Insert a row at the end of the table
    //         // let newRow = tableRef.insertRow(-1);
    //         // Insert a row at the begining of the table
    //         let newRow = tableRef.insertRow(1);

    //         // Insert a cell in the row at index 0
    //         let name = newRow.insertCell(0);
    //         let surname = newRow.insertCell(1);
    //         let country = newRow.insertCell(2);
    //             name.innerText = "Goran";
    //             surname.innerHTML = "Lovincic";
    //             country.innerHTML = "Monaco";
    //         }
    //         // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow

    //     // 5. Create a table containing two columns: Name and Surname, and three rows of data.
    //     // Create a button that changes the text of the chosen cell after a click. The user should specify the text and cell index via prompt.
    //         function change5(tableID) {
    //             let name = prompt("Please input new name");
    //             let surname = prompt("Please input new surname");
    //             let country = prompt("Please input new country");
    //             let tableRef5 = document.getElementById(tableID)
    //             let tr1 = tableRef5.getElementsByTagName("tr")[2];
    //             let td0 = tr1.getElementsByTagName("td")[0];
    //             let td1 = tr1.getElementsByTagName("td")[1];
    //             let td2 = tr1.getElementsByTagName("td")[2];
    //             td0.innerHTML = name
    //             td1.innerHTML = surname
    //             td2.innerHTML = country
    //         }
    //         // 5A
    //         function modifyCell() {
    //             const rowNumber = window.prompt("Please select row to change text(0,1,2,3","0");
    //             const columnNumber = window.prompt("Please select cell to change text (0,1):", "0");
    //             const content = window.prompt("Input new cell text");

    //             var row = document.getElementById('myTable').rows[parseInt(rowNumber,10)].cells;
    //             row[parseInt(columnNumber,10)].innerHTML = content;
    //         }
    //         // 6. Create a button that creates the table of the provided size after a click.
    //         // Get information about the size from the user via prompts. After creating the table, hide the button.
    //         function newCell6() {
    //             const rows = window.prompt("Please select how many rows",1);
    //             const columns= window.prompt("Please select how many columns",1);
    //             // const td = document.createElement("td");
    //             // const node = document.createTextNode("This is new.");
    //             // td.appendChild(node);
    //             // const element = document.getElementById("div1");
    //             // const child = document.getElementById("td");
    //             // element.insertBefore(td, child);
    //             for (var i = 0; i < parseInt(rows, 10); i++) {
    //              var row = document.getElementById('myTable6').insertRow(i);
    //              for (var c = 0; c < parseInt(columns, 10); c++)
    //              {
    //                 var cell = row.insertCell(c);
    //                 cell.innerHTML = "Row " + i +" "+ "col " + c;
    //              }
    //             }
    //             createButton.style.visibility = "hidden";
    //         }
    //         // <!-- 7. Create a dropdown list and add a button that removes the selected element. -->
    //         let x = document.getElementById("fruitSelect");
    //         function removeSelecred() {
    //             x.remove(x.selectedIndex);
    //         }
    //         function insertSelecred () {
    //             var option = document.createElement("option");
    //             const insert = window.prompt("Please enter new fruit");
    //             option.text = insert
    //                 x.add(option);
    //         }
    //         // 8. After loading, print in the current window size in the console. Also, print it whenever the size changes.
    //         function printSize() {
    //             var width = document.documentElement.clientWidth;
    //             var height = document.documentElement.clientHeight;
    //             console.log("width: " + width);
    //             console.log("Height: " + height);
    //             }
    //         // 9.Create an image of Pikachu. Create two buttons. The first one will change the currently displayed image to Bulbasaur. 
    //         // The second will change it back to Pikachu. The Pikachu image should have width=240px and height=200px, while the Bulbasaur image width=235px and height=220px.
    //             function pikachu() {
    //                 let pikachu = new Image();
    //                 pikachu.src = "https://cdn.pixabay.com/photo/2016/09/09/11/59/pokemon-1656997_960_720.png";
    //                 pikachu.width = "240";
    //                 pikachu.height = "200";
    //                 displayNewImage(pikachu);
    //             }
    //             function bulbasaur() {
    //                 let bulbasaur = new Image();
    //                 bulbasaur.src = "https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png"
    //                 bulbasaur.width = "240";
    //                 bulbasaur.height = "200";
    //                 displayNewImage(bulbasaur);
    //             }
    //             function displayNewImage(newImage) {
    //                 var images = document.getElementsByTagName('img');
    //                 // var images = document.getElementById('picture9');
    //                 for (var i = 0; i < images.length; i++) {
    //                     images[0].parentNode.removeChild(images[0]);
    //                 }
    //                 document.body.appendChild(newImage);
    //             }
    //     // 10.Create a text paragraph and make some words italic inside of it. Create an image of Pikachu. 
    //     // Highlight all the italic words with blue when the mouse cursor is on Pikachu. Remove the highlight when it isn’t. Height=220px.
    //             var italicItems;
    //             window.onload = getitalicItems();

    //             function getitalicItems() {
    //                 italicItems = document.getElementsByTagName("i");
    //             }
    //             function highlight() {
    //                 for (let i = 0; i < italicItems.length; i++) {
    //                     italicItems[i].style.color = "blue";
    //                     italicItems[i].style.fontWeight = "900";

    //                 }
    //             }
    //             function turnOffHighlight() {
    //                 for (let i = 0; i < italicItems.length; i++) {
    //                     italicItems[i].style.color = "black";
    //                     italicItems[i].style.fontWeight = "normal";
    //                 }
    //             }
    // </script>