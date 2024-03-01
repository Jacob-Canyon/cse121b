const newParagraph = document.createElement("P");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImage = document.createElement("img");
newImage.setAttribute("src","https://picsum.photos/200")
newImage.setAttribute("alt", "Random Images");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML ="<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("Section");
newSection.innerHTML = "<h2>CSE 121b</h2>"
document.body.appendChild(newSection);

const newP = document.createElement("p");
newP.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);
