let characterSelected, searchTerm;
// require('dotenv').config();
// let myAPIKey = process.env.privateApiKey;
// console.log(process.env) // remove this after you've confirmed it is working

let userDosier = 0;
let ts = Date.now();
let myPrivateAPIKey = 'a4591843cae8c4fbe86dc71edf01ba695df3bb2a'; // process.env.privateApiKey;
let myPublicAPIKey = '34ccc8ffaeb21342da2868e7bf73270a'; // process.env.publicApiKey;
let stringToHash = ts + myPrivateAPIKey + myPublicAPIKey;
let hashValue = md5('stringToHash');


$('#characterPick').on('click', function () {
    console.log("characterPick got clicked!");
    let characterSearch = $('#userSearch').val();

    // md5sum 61802d3189a7f5e71f01372764ebd2ea
    $.get(`https://gateway.marvel.com:443/v1/public/characters?name=${characterSearch}&${ts}&apikey=${myPublicAPIKey}&hash=${hashValue}`, (data) => {
        console.log(data);
        let arrayData = JSON.stringify(data);
        let resultObj = JSON.parse(arrayData);
    });


    // dosierPrompt();

});
