// I am going to change the h1 heading from "Lynda's Rainbow" to "Colors of the Rainbow" using a js statement.
var heading = document.getElementById('mainheading');

// I'm going to change my list by taking an item off the list of colors using a query
const list = document.querySelector('#rainbowcolors');
const img = document.querySelector('img');

// Change the heading text
heading.innerText = "Colors of the Rainbow";

// Remove the last item from the list
list.removeChild(list.lastElementChild);

// Iterate over all list items and change their text color randomly
const colors = document.querySelectorAll('#rainbowcolors li');
colors.forEach(function (color, index) {
    // Randomly change the text color of each item
    const colorList = ['#FF0000', '#FF7F00', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE'];
    color.style.color = colorList[index];
});

// Create a new list item and append it to the list
const newColor = document.createElement('li');
newColor.innerText = "Rainbow";  // Adding "Rainbow" to the list
list.appendChild(newColor);

// Prepend the new color to the list
list.prepend(newColor);

// Created a DocumentFragment for adding multiple colors at once
const fragment = document.createDocumentFragment();
const newItems = ['Pink', 'Turquoise', 'Gold', 'Lavender'];
newItems.forEach(function (itemText) {
    const li = document.createElement('li');
    li.innerText = itemText;
    fragment.appendChild(li);
});

// Append the fragment to the list
list.appendChild(fragment);

// Changing the image source when the heading is clicked
heading.addEventListener('click', function () {
    img.setAttribute('src', 'https://www.rainbow.com/new-image.jpg');
});

// Changing background color when the list is clicked
list.addEventListener('click', function (event) {
    document.body.style.backgroundColor = '#FFFFFF';  // White background
    // Store favorite color in localStorage
    localStorage.setItem('favoriteColor', event.target.innerText);
});

// Added the  hover effect on the heading
heading.addEventListener('mouseover', function () {
    heading.classList.add('hover-style');
});

// Remove hover effect when mouse leaves the heading
heading.addEventListener('mouseout', function () {
    heading.classList.remove('hover-style');
});

// Changing first and last items directly
const firstItem = list.firstElementChild;
const lastItem = list.lastElementChild;
firstItem.innerText = "Scarlet";  // Change red to Scarlet
lastItem.innerText = "Purple";  // Change violet to Purple


