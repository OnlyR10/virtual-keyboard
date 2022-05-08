import '../styles/style.css';

let keyboardLang = "eng";
let capsLockActive = false;
let btnActive = null;


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rusLetters = [];
const engLetters = [];

for (let i = 97; i < 123; i++) {
    engLetters.push(String.fromCodePoint(i));
}

for (let i = 1072; i < 1104; i++) {
    rusLetters.push(String.fromCodePoint(i));
}

const symbols = ["`", "-", "=", "[", "]", "\\", ";", "'", ",", ".", "/"];

const commands = [
    "Backspace", "Tab", "Delete", "CapsLock", "Enter", "ShiftLeft", "ShiftRight", "ArrowUp",
    "ControlLeft", "ControlRight", "Win", "AltLeft", "AltRight", "Space", "ArrowLeft", "ArrowDown", "ArrowRight",
];

const engLetterLayout = [
    "`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
     "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"
]

const engLetterLayoutShift = [
    "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"",
    "z", "x", "c", "v", "b", "n", "m", "<", ">", "?"
]

const rusLetterLayout = [
    "ё", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=",
    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
    "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
    "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."
]

const rusLetterLayoutShift = [
    "ё", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/",
    "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
    "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ","
]

const allSymbolsInKeyBoard = ["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace",
                                "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete",
                                "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", 
                                "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ArrowUp", "ShiftRight",
                                "ControlLeft", "Win", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"
                            ]

const wrapper = document.createElement('div');
wrapper.classList.add("wrapper");

const textArea = document.createElement('textarea');
textArea.classList.add("text-area");

const keyboard = document.createElement('div');
keyboard.classList.add("keyboard");

for(let i = 0; i < allSymbolsInKeyBoard.length; i++) { 
    const button = document.createElement('div');
    button.classList.add("button");
    switch (allSymbolsInKeyBoard[i]) {
        case "Backspace":
        case "CapsLock":
        case "Enter":
        case "ShiftLeft":
        case "ShiftRight":
            button.classList.add("double-width");
            break;
        case "Space":
            button.classList.add("space-width");
            break;
    }
    if(commands.includes(allSymbolsInKeyBoard[i])) {
        button.classList.add("button-commands");
    }
    if(numbers.includes(allSymbolsInKeyBoard[i])) {
        button.classList.add("data-btn-change");
    }
    if(symbols.includes(allSymbolsInKeyBoard[i])) {
        button.classList.add("data-btn-change");
    }
    if(engLetters.includes(allSymbolsInKeyBoard[i])) {
        button.classList.add("data-btn-change");
    }
    button.setAttribute("data-btn-name", `${allSymbolsInKeyBoard[i]}`);
    if(allSymbolsInKeyBoard[i] === "ArrowRight") {
        button.textContent = `Right`;
        button.classList.add("arrow-right");
    } else if(allSymbolsInKeyBoard[i] === "ArrowLeft") {
        button.textContent = `Left`;
        button.classList.add("arrow-left");
    } else if(allSymbolsInKeyBoard[i] === "ArrowDown") {
        button.textContent = `Down`;
        button.classList.add("arrow-down");
    } else if(allSymbolsInKeyBoard[i] === "ArrowUp") {
        button.textContent = `Up`;
        button.classList.add("arrow-up");
    } else if(allSymbolsInKeyBoard[i] === "Space") {
        button.textContent = ``;
    } else if(allSymbolsInKeyBoard[i] === "Delete") {
        button.textContent = `Del`;
    } else if(allSymbolsInKeyBoard[i] === "ShiftLeft" || allSymbolsInKeyBoard[i] === "ShiftRight") {
        button.textContent = `Shift`;
    } else if(allSymbolsInKeyBoard[i] === "ControlLeft" || allSymbolsInKeyBoard[i] === "ControlRight") {
        button.textContent = `Ctrl`;
    } else if(allSymbolsInKeyBoard[i] === "AltLeft" || allSymbolsInKeyBoard[i] === "AltRight") {
        button.textContent = `Alt`;
    } else {
        button.textContent = `${allSymbolsInKeyBoard[i]}`;
    }
    keyboard.append(button);
}

const buttonsChange = keyboard.querySelectorAll(".data-btn-change");

document.addEventListener("keydown", (event) => {
    const keyboardAllButtons = Array.from(keyboard.querySelectorAll("div"));
    btnActive = keyboardAllButtons.find((elem) => {
        return elem.getAttribute("data-btn-name") === event.code;
    });
    if(btnActive) {
        btnActive.classList.add("button-active");
    }
})

document.addEventListener("keyup", (event) => {
    if(btnActive) {
        btnActive.classList.remove("button-active");
    }
})

wrapper.append(textArea);
wrapper.append(keyboard);
document.body.append(wrapper);