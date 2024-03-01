/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jacob Canyon';
let currentYear = "2024";
let profilePicture = "images/InMyOffice.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById("food");
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;




/* Step 5 - Array */

let favFoods = ["frybread", "mutton stew", "pizza","bao", "tacos"];
let addFood = "steak";
foodElement.innerHTML = `<strong>${favFoods}</strong>`;
favFoods.push(addFood);
foodElement.innerHTML += `<br>${favFoods}`;






