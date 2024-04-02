const firstName = document.querySelector('#firstName').value;

const lastName = document.querySelector('#lastName').value;

const teacher = document.querySelector('#teacher').value;

const grade = document.querySelector('#grade').value;

const excused = document.querySelector('#excuse').value;


function submit(){
    const firstName = document.querySelector('#firstName').value;

    const lastName = document.querySelector('#lastName').value;

    const teacher = document.querySelector('#teacher').value;

    const grade = document.querySelector('#grade').value;

    const excused = document.querySelector('#excuse').value;


let student = {
    first: firstName,
    last: lastName,
    selectedTeacher: teacher,
    selctedGrade: parseInt(grade),
    selectedExcuse: excused
}

console.log(student);
}

document.querySelector("#submit").addEventListener("click", ()=>{submit()});

function reset(){

    const firstName = document.querySelector('#firstName').value = "";

    const lastName = document.querySelector('#lastName').value = "";

    const teacher = document.querySelector('#teacher').value = "";


}

document.querySelector('#reset').addEventListener("click", ()=>{reset()});

function filterStudents(){

}

document.querySelector('#fetch').addEventListener("click", ()=>{getStudentList()});

async function getStudentList(){
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        const students = await response.json();
        console.log(students)
    }
}

