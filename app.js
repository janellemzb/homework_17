let button = document.getElementById('button');

function createPerson(personName, personSurname, personAge) {
    let participant = {
        personName: personName,
        personSurname: personSurname,
        personAge: personAge,
        greeting: function () {
            `Thank you for participation, ${personName}!`}
    };
    return participant;
}

let zhanel = createPerson('Zhanel', 'Milliardova', 27);
let aruzhan = createPerson('Aruzhan', 'Otegenova', 24);


function displayPerson(participant) {
    let peopleList = document.createElement("p");
    peopleList.textContent = JSON.stringify(participant);
    peopleList.style.fontFamily = "Inconsolata, monospace";
    peopleList.style.fontSize = "17px";
    peopleList.style.color = "#FC42E3";
    document.body.append(peopleList);
}

displayPerson(zhanel)
displayPerson(aruzhan)

button.addEventListener('click', function () {
    let enteredName = document.getElementById('name').value;
    let enteredSurname = document.getElementById('surname').value;
    let enteredAge = document.getElementById('age').value;

    let participant = createPerson(enteredName, enteredSurname, enteredAge);
    displayPerson(participant);
});




















