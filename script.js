let textarea = document.createElement('textarea');
let container = document.createElement('div');
let keyboard = document.createElement('div');
container.classList.add('container');
textarea.classList.add('textarea');
document.body.appendChild(container);
container.appendChild(textarea);
container.appendChild(keyboard);


let boardRus = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',],
    ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
    ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'],
    ['ctrl', 'fn', 'win', 'alt', 'space', 'left', 'right', 'top', 'down']
];

let boardEng = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'enter'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    ['ctrl', 'fn', 'win', 'alt', 'space', 'left', 'right', 'up', 'down']
];

const keyCodes = {
    'That key has no keycode': 0,
    'break': 3,
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause/break': 19,
    'caps lock': 20,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    ':': 58,
    '<': 60,
    'a': 65,
    'b': 66,
    'c': 67,
    'd': 68,
    'e': 69,
    'f': 70,
    'g': 71,
    'h': 72,
    'i': 73,
    'j': 74,
    'k': 75,
    'l': 76,
    'm': 77,
    'n': 78,
    'o': 79,
    'p': 80,
    'q': 81,
    'r': 82,
    's': 83,
    't': 84,
    'u': 85,
    'v': 86,
    'w': 87,
    'x': 88,
    'y': 89,
    'z': 90,
    'add': 107,
    'numpad period (firefox)': 108,
    'subtract': 109,
    'decimal point': 110,
    'divide': 111,
    'num lock': 144,
    'scroll lock': 145,
    '^': 160,
    '!': 161,
    '#': 163,
    '$': 164,
    'page backward': 166,
    'page forward': 167,
    'refresh': 168,
    'closing paren (AZERTY)': 169,
    '*': 170,
    '~ + * key': 171,
    'next': 176,
    'previous': 177,
    'back slash': 220,
    'close bracket / å': 221,
    'single quote / ø / ä': 222,
    '`': 223,
    'space': 32,
    ',': 188,
    '.': 190,
    '/': 191,
    ';': 186,
    '=': 187,
    '-': 189
};
let capslosk = false;
let shift = false;

let addSymbol = (s) => {
    if (capslosk || shift) {
        textarea.value = textarea.value + s.toUpperCase();
    } else
        textarea.value = textarea.value + s;
};

let actionKeys = (val) => {
    let currKey = keyCodes[val];
    let code = 'key-' + currKey;
    let element = document.getElementsByClassName(code);

    if (currKey === 8 || currKey === 9 || currKey === 13 || currKey === 16 || currKey === 17 || currKey === 18 || currKey === 20 || currKey === 32) {
        /*backspace*/
        if (currKey === 8) {
            textarea.value = textarea.value.substr(0, textarea.value.length - 1);
        }
        /*tab*/
        if (currKey === 9) {
            let content = '      ';
            textarea.value = textarea.value + content;
        }

        /*enter*/
        if (currKey === 13) {


        }

        /*space*/
        if (currKey === 32) {
            textarea.value = textarea.value + ' ';
        }

        /*caps loсk*/
        if (currKey === 20) {
            for (let i = 0; i < element.length; i++) {
                if (!capslosk) {
                    capslosk = true;
                    element[i].classList.add('pressed');
                } else {
                    capslosk = false;
                    element[i].classList.remove('pressed');
                }
            }
        }

        /*shift*/
        if (currKey === 16) {
            for (let i = 0; i < element.length; i++) {
                if (!shift) {
                    shift = true;
                    element[i].classList.add('pressed');
                } else {
                    shift = false;
                    element[i].classList.remove('pressed');
                }
            }
        }

    } else {
        addSymbol(val, false);
    }
};

let mousedownHandler = (val) => {
    let currKey = keyCodes[val];
    let code = 'key-' + currKey;
    let element = document.getElementsByClassName(code);
    for (let i = 0; i < element.length; i++) {
        element[i].classList.add('press');
    }
}

let mouseoutHandler = (val) => {
    let currKey = keyCodes[val];
    let code = 'key-' + currKey;
    let element = document.getElementsByClassName(code);
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove('press');
    }
}

for (let j = 0; j < boardEng.length; j++) {
    let row = document.createElement('div');
    row.classList.add('row');
    keyboard.appendChild(row);
    for (let i = 0; i < boardEng[j].length; i++) {
        let key = document.createElement('button');
        key.classList.add('key');
        if (keyCodes[boardEng[j][i]]) {
            key.classList.add('key-' + keyCodes[boardEng[j][i]]);
        }
        row.appendChild(key);
        key.textContent = boardEng[j][i];
        key.addEventListener("click", () => actionKeys(boardEng[j][i]));
        key.addEventListener("mousedown", () => mousedownHandler(boardEng[j][i]));
        key.addEventListener("mouseout", () => mouseoutHandler(boardEng[j][i]));
    }
}

document.addEventListener('keydown', function (event) {
    let code = 'key-' + event.keyCode;
    let x = document.getElementsByClassName(code);
    textarea.focus();
    for (let i = 0; i < x.length; i++) {
        x[i].classList.add('pressed');
        x[i].classList.add('press');
    }
});

document.addEventListener('keyup', function (event) {
    let code = 'key-' + event.keyCode;
    let x = document.getElementsByClassName(code);
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('pressed');
        x[i].classList.remove('press');
    }
});

