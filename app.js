document.addEventListener('DOMContentLoaded', () => {
    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const missed = 0;
    const startButton = document.querySelector('.btn__reset');
    // let characters = [];

    // source: https://boards.straightdope.com/sdmb/archive/index.php/t-334013.html
    const phrases = [
        "but our princess is in another castle",  //super mario bros
        "finish him",  //mortal kombat
        "buy somethin will ya",  //zelda
        "prepare to qualify",  //pole position
        "may the way of the hero lead to the triforce" //zelda III
    ];

    // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array#5915122
    //function to get randomItem from any array
    function getRandomPhraseAsArray(arr) {
        const randomItem = arr[Math.floor(Math.random() * arr.length)];
        // let characters = new Object();
        characters = Array.from(randomItem);
        console.log(characters);
        return characters;
    }

    function addPhraseToDisplay(arr) {
        const ul = document.querySelector('ul');
        for (i=0; i<arr.length; i++) {  //loop through array of characters
            const character = characters[i];         
            const li = document.createElement('li');   //create li
            li.textContent = arr[i];  //put character in li
            ul.appendChild(li);  //append list item to ul
            if (character !== ' ') {  //add .letter class if character is not space
                li.className += 'letter'; 
            } else {
                li.className += 'space';
            }
        }
    }




    const keyrow = document.getElementsByClassName('keyrow');
    const button = document.querySelectorAll('keyrow button');


    // check chosen letter against phrase
        function checkLetter(button) {
            const letter = document.getElementsByClassName('letter');
            // const buttons = document.querySelectorAll('.keyrow button');
            for (i=0; i<button.length; i++) {
                if (button[i].textContent === letter.textContent) {
                    console.log('true');
                } else {
                    console.log('false');
                }
            };
        }



    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);






    //remove start-game overlay
    startButton.addEventListener('click', (e) => {
        const startOverlay = document.getElementById('overlay');
        startOverlay.style.display = 'none';
    })

    // // Add an event listener to the keyboard
    for (i=0; i<button.length; i++) {
    button[i].addEventListener('click', (e) => {
        e.target.className += "chosen";
        console.log(button.textContent);
        checkLetter();
    });
    }
});

