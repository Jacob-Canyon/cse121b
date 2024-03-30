/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');

const boxes = document.querySelector("box");

let templeList = {};


/* async displayTemples Function */

function displayTemples(temples){

    temples.forEach((temple) => {
        let article = document.createElement("article");

        let h3Name = document.createElement("h3");

        let image = document.createElement('img');
        image.setAttribute('src', temple.imageUrl);

        h3Name.innerText = temple.templeName;

        templesElement.appendChild(article);
        article.appendChild(h3Name);
        article.appendChild(image);
    })
};

/* async getTemples Function using fetch()*/

async function getTemples() {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        const temples = await response.json();
        templeList = temples;
        console.log(templeList);
        displayTemples(templeList);
    }
  
};


/* reset Function */

function resetTemples(temple){
    while(temple.firstChild){
        temple.firstChild.remove();
    }
}


/* filterTemples Function */

function filterTemples(temples){
    resetTemples(templesElement);

    let filter = document.querySelector('#filtered')


    switch(filter.value){
        case "utah":
            const utah = temples.filter(data=>data.location.includes("Utah"));
            displayTemples(utah);
            break;

        case "notutah":
            const noUtah = temples.filter(data=>!data.location.includes("Utah"));
            displayTemples(noUtah);
            break;

        case "older":
            const mark = new Date(1950, 0, 1);
            const older = temples.filter(data => Date.parse(data.dedicated) < mark);
            displayTemples(older);

            break;

        case "all":

            displayTemples(templeList);
            break;
    }
}


/* Event Listener */

document.querySelector('#filtered').addEventListener("change", ()=> {filterTemples(templeList)});


getTemples();

