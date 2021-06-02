const scorpion = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    attack: function() {
        console.log( this.name + ', Fight!!!');
    }
}

const liuKang = {
    name: 'Liu Kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    attack: function() {
        console.log( this.name + ', Fight!!!');
    }
}


// First varient
function createPlayer(classNamePlayer, {name, hp, img}) {
    const $player = document.createElement('div');
    $player.classList.add(classNamePlayer);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $playerHealth = document.createElement('div');
    $playerHealth.classList.add('life');
    $playerHealth.style.width = hp + "%";

    const $playerName = document.createElement('div');
    $playerName.classList.add('name');
    $playerName.innerText = name;

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $playerImg = document.createElement('img');
    $playerImg.setAttribute('src', img)


    $progressbar.appendChild($playerHealth);
    $progressbar.appendChild($playerName);

    $character.appendChild($playerImg);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    document.querySelector('.arenas').appendChild($player);
}
createPlayer('player1', scorpion);
createPlayer('player2', liuKang);



// Second varient
// const createElementAndAddClass = (elem, className = '') => {
//     const $element = document.createElement(elem);
//     $element.classList.add(className);
//     return $element;
// }

// const createPlayer = (classNamePlayer, {name, hp, img}) => {
//     const $player = createElementAndAddClass('div', classNamePlayer);
//     const $progressbar = createElementAndAddClass('div', 'progressbar');
//     const $playerHealth = createElementAndAddClass('div', 'life');
//     $playerHealth.style.width = hp + "%";
//     const $playerName = createElementAndAddClass('div', 'name');
//     $playerName.innerText = name;
//     const $character = createElementAndAddClass('div', 'character');
//     const $playerImg = document.createElement('img');
//     $playerImg.setAttribute('src', img)


//     $progressbar.appendChild($playerHealth);
//     $progressbar.appendChild($playerName);

//     $character.appendChild($playerImg);

//     $player.appendChild($progressbar);
//     $player.appendChild($character);

//     document.querySelector('.arenas').appendChild($player);
// }
// createPlayer('player1', scorpion);
// createPlayer('player2', liuKang);


// Third varient
// const createPlayer = (classNamePlayer, {name, hp, img}) => {
//     const $player = `<div class=${classNamePlayer}>
//         <div class="progressbar">
//             <div class="life" style="width: ${hp}%"></div>
//             <div class="name">${name}</div>
//         </div>
//         <div class="character">
//             <img src="${img}" />
//         </div>
//     </div>`;

//     let $elementGame = document.querySelector('.arenas');
//     let innerHtmlElemnt = $elementGame.innerHTML;

//     $elementGame.innerHTML = innerHtmlElemnt + $player;
// }
// createPlayer('player1', scorpion);
// createPlayer('player2', liuKang);