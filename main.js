const $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.control button');


/* players entity start */
const scorpion = {
    playerId: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    attack: function () {
        console.log(this.name + ', Fight!!!');
    }
}

const liuKang = {
    playerId: 2,
    name: 'Liu Kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    attack: function () {
        console.log(this.name + ', Fight!!!');
    }
}
/* players entity end */


/* create player start */
// function for create element start
const createElementAndAddClass = (elem, className = '') => {
    const $element = document.createElement(elem);
    $element.classList.add(className);
    return $element;
}

// function for create player
const createPlayer = ({ playerId, name, hp, img }) => {
    const $player = createElementAndAddClass('div', 'player' + playerId);
    const $progressbar = createElementAndAddClass('div', 'progressbar');
    const $playerHealth = createElementAndAddClass('div', 'life');
    $playerHealth.style.width = hp + "%";
    const $playerName = createElementAndAddClass('div', 'name');
    $playerName.innerText = name;
    const $character = createElementAndAddClass('div', 'character');
    const $playerImg = document.createElement('img');
    $playerImg.setAttribute('src', img)


    $progressbar.appendChild($playerHealth);
    $progressbar.appendChild($playerName);

    $character.appendChild($playerImg);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

// add players in arena dom
$arena.appendChild(createPlayer(scorpion));
$arena.appendChild(createPlayer(liuKang));
/* create player end */


/* functions for play start */
// function for retutn random number from 1 to 20
const randomNumberValue = () => {
    return Math.ceil(Math.random() * 20);
}

// function for retutn game text
const returnGameResult = (name, text) => {
    const $loseTitile = createElementAndAddClass('div', 'loseTitle');
    $loseTitile.innerText = name + text;

    return $loseTitile;
}

// function for change data player
const changeHp = (player) => {
    const $playerLife = document.querySelector(`.player${player.playerId} .life`);

    player.hp -= randomNumberValue();

    (player.hp < 0) && (player.hp = 0);
    $playerLife.style.width = player.hp + "%";

    if (player.hp <= 0) {
        $randomButton.disabled = true;
        return 'lose';
    }
}

// function for change data player
const gameRaund = (palyer1, player2) => {
    const players = [palyer1.name, player2.name];

    const playerName1 = changeHp(palyer1);
    const playerName2 = changeHp(player2);

    playerName1 && $arena.appendChild(returnGameResult(players[1], ' Win!!!'))
    playerName2 && $arena.appendChild(returnGameResult(players[0], ' Win!!!'))
}
/* functions for play end */



$randomButton.addEventListener( 'click', () => gameRaund(scorpion, liuKang) );