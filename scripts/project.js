let studentList = [];

let students = document.querySelector('#display');





function submit()
{
    const firstName = document.querySelector('#firstName').value;

    const lastName = document.querySelector('#lastName').value;

    const teacher = document.querySelector('#teacher').value;

    const grade = document.querySelector('#grade').value;

    const excused = document.querySelector('#excuse').value;

    var date = new Date;
    var n = date.toDateString();
    var time = date.toLocaleTimeString();





let student = 
{
    first: firstName,
    last: lastName,
    selectedTeacher: teacher,
    selectedGrade: parseInt(grade),
    selectedExcuse: excused,
    dateTime: `${time} ${n}`
}

studentList.push(student);

console.log(student);
console.log(studentList);


reset();
resetSelector();
//download(jsonformat, 'json.txt', 'text/plain');
}


document.querySelector("#submit").addEventListener("click", ()=>{submit()});

function reset()
{

    const firstName = document.querySelector('#firstName').value = "";

    const lastName = document.querySelector('#lastName').value = "";

    const teacher = document.querySelector('#teacher').value = "";

}

document.querySelector('#reset').addEventListener("click", ()=>{reset()});

document.querySelector('#reset').addEventListener("click", ()=>{resetSelector()});



function resetSelector()
{
    var elements = document.getElementsByTagName('select');
    for (var i = 0; i <elements.length; i++)
    {
        elements[i].selectedIndex = 0;
    }
}

function updateDateTime()
{
    const now = new Date();

    const currentDateTime = now.toLocaleString();

    document. querySelector('#datetime').textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);

function displayStudents(studentList)
{
    resetDisplay(students)

    studentList.forEach((student) => 
    {
        

        let article = document.createElement("article");

        let h3Name = document.createElement("h3");

        let studentText = `Name: ${student.last.toUpperCase()}, ${student.first.toUpperCase()} Grade: ${student.selectedGrade} Teacher: ${student.selectedTeacher.toUpperCase()} \n ${student.dateTime} ${student.selectedExcuse.toUpperCase()}`

        h3Name.innerText = studentText;

        students.appendChild(article);
        article.appendChild(h3Name);
        
    })

}

document.querySelector('#buttondisplay').addEventListener("click", ()=>{displayStudents(studentList)});

function resetDisplay(list)
{
    while(list.firstChild){
        list.firstChild.remove();
    }
}

function filterStudents(list)
{
    let selection = document.querySelector('#filtered')
    
    resetDisplay(students);

    switch(selection.value){
        case "unexcused":
            const unexcused = list.filter(data=>data.selectedExcuse.includes("unexcused"));
            displayStudents(unexcused);
            break;

        case "middle":
            const middle = list.filter(data=>data.selectedGrade >= 6);
            displayStudents(middle);
            break;

        case "elementary":
            const elementary = list.filter(data=>data.selectedGrade <= 5);
            displayStudents(elementary);

            break;

        case "all":

            displayStudents(studentList);
            break;
    }

}

function download(content, fileName, contentType) {

    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

document.querySelector('#download').addEventListener("click", ()=>{download(JSON.stringify(studentList), 'latereport.txt', 'text/plain')})

async function fetchStudnetList() {
    const response = await fetch("https://run.mocky.io/v3/fddfaa66-6b81-44b4-ba60-70fae3d527e0");
    if (response.ok){
        const list = await response.json();
        studentList = list;
        console.log(list);
      
    }
}


fetchStudnetList();


document.querySelector('#filtered').addEventListener("change", ()=>{filterStudents(studentList)});