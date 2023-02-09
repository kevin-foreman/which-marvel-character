let characterSelected, searchTerm;
// require('dotenv').config();
// let myAPIKey = process.env.privateApiKey;
// console.log(process.env) // remove this after you've confirmed it is working

let userDosier = 0;

$('#characterPick').on('click', function () {
    console.log("characterPick got clicked!");
    let characterSearch = $('#userSearch').val();

    // md5sum 61802d3189a7f5e71f01372764ebd2ea
    $.get(`https://gateway.marvel.com:443/v1/public/characters?name=${characterSearch}apikey=34ccc8ffaeb21342da2868e7bf73270a`, (data) => {
        console.log(data);
        let arrayData = JSON.stringify(data);
        let resultObj = JSON.parse(arrayData);
    });


    // dosierPrompt();

});
