let characterSelected, searchTerm;
// require('dotenv').config();
// let myAPIKey = process.env.privateApiKey;
// console.log(process.env) // remove this after you've confirmed it is working

let userDosier = 0;

$('#characterPick').on('click', function () {
    console.log("characterPick got clicked!");
    let searchTerm = $('#userAnswer').val();

    // prompt("Yes or No");
    function dosierPrompt1() {
        let dosierPrompt1 = confirm("Are you prone to mistakes?");
        if (dosierPrompt1) {
            userDosier += 1;
            alert("You said yes!");
        } else {
            userDosier += 2;
            alert("You said no :(");
        };
    };

    dosierPrompt1();

});

function characterSelect() {

    $.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=34ccc8ffaeb21342da2868e7bf73270a
    `, (data) => {
        console.log(data);
        let arrayData = JSON.stringify(data);
        let resultObj = JSON.parse(arrayData);
    });
    // Toggle the 'hide' class on the input field so we can reveal it
    // to the user once questions are complete


};