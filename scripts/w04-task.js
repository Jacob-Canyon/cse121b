/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Jacob Canyon",
    photo: "images/InMyOffice.jpg",
    favoriteFoods: ['Pizza', 'Mutton','Frybread','Steak','Curry','Sushi'],
    hobbies: ['Gunpla','Video Games','Hiking','Football'],
    placeLived: []
};





/* Populate Profile Object with placesLive objects */

myProfile.placeLived.push({
    
    place: 'Califorina',
    length: '4 years'
});

myProfile.placeLived.push({
    place: 'New Mexico',
    length: '15 years'
});


myProfile.placeLived.push({
    place: 'Cananda',
    length: '2 years'
});


myProfile.placeLived.push({
    place: 'Utah',
    length: '5 years'
});


myProfile.placeLived.push({
    place: 'Arizona',
    length: '10 years'
});




/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.getElementById('photo').src = myProfile.photo;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */

myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})


/* Places Lived DataList */
myProfile.placeLived.forEach(place => {
    let dt = document.createElement('dt')
    dt.innerText = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd')
    dd.innerText = place.length;
    document.querySelector('#places-lived').appendChild(dd);

})



