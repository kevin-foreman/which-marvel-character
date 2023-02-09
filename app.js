let characterSelected, searchTerm;
// require('dotenv').config();
// let myAPIKey = process.env.privateApiKey;
// console.log(process.env) // remove this after you've confirmed it is working

let userDosier = 0;

$('#characterPick').on('click', function () {
    console.log("I got clicked!");
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

    
    function showConfirmBox() {
        document.getElementById("overlay").hidden = false;
    };
    function closeConfirmBox() {
        document.getElementById("overlay").hidden = true;
    };

    function isConfirm(answer) {
        if (answer) {
            alert("You said yes!");
        } else {
            alert("You said no :(");
        };
        closeConfirmBox();
    };

    dosierPrompt1();

});

function characterSelect() {

    $.get(`https://gateway.marvel.com:443/v1/public/characters?name=deadpool&apikey=a4591843cae8c4fbe86dc71edf01ba695df3bb2a`, (data) => {
        console.log(data);
        let arrayData = JSON.stringify(data);
        let resultObj = JSON.parse(arrayData);
    });
    // Toggle the 'hide' class on the input field so we can reveal it
    // to the user once questions are complete


};