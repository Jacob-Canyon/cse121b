//let new_array = arr.map(function callback(currentValue[, index[, array]]){

//}[,thisArg])

const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});

document.getElementById("myList").innerHTML = stepsHtml.join(" ");

const grades = ['A','B','A']

function gradesToPoints(grade) {
    let points = 0;
    if (grade === 'A'){
        points = 4;
    }

    else if (grade === "B")
    {
        points = 3;
    }

    return points;
}

const gpa = grades.map(gradesToPoints);

const totalPoints = gpa.reduce(function(total, item){
    return total + item;
});

const finalgpa = totalPoints / gpa.length;

const food = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

const foodFiltered = food.filter(function(word) { return word.length <6});

const arrayOfNumbers = [12, 34, 21, 54];
const luckyNumber = 21;

let luckyIndex = arrayOfNumbers.indexOf(luckyNumber);
