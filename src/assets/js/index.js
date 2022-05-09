import '../styles/style.css';
import {
  numbers, rusLetters, engLetters, symbols, commands, engLetterLayout, engLetterLayoutShift,
  rusLetterLayout, rusLetterLayoutShift, allEngSymbolsInKeyBoard, allRusSymbolsInKeyBoard,
} from './symbols';

let keyboardLang = 'eng';
let capsLockActive = false;
let btnActive = null;

const objUser = {};
const storageKey = 'objUserkeyboardLang';
if (localStorage.getItem(storageKey)) {
  keyboardLang = JSON.parse(localStorage.getItem(storageKey)).keyboardLang;
}

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const textArea = document.createElement('textarea');
textArea.classList.add('text-area');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const systemHint = document.createElement('p');
systemHint.classList.add('hint');
systemHint.textContent = 'Клавиатура создана в операционной системе Windows';

const combinationHint = document.createElement('p');
combinationHint.classList.add('hint');
combinationHint.textContent = 'Язык клавиатуры переключается комбинацией: "Ctrl" + "Alt"';

function buildAKeyboard(languageLayout, letters) {
  for (let i = 0; i < languageLayout.length; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button');
    switch (languageLayout[i]) {
      case 'Backspace':
      case 'CapsLock':
      case 'Enter':
      case 'ShiftLeft':
      case 'ShiftRight':
        button.classList.add('double-width');
        break;
      case 'Space':
        button.classList.add('space-width');
        break;
      default:
        break;
    }
    if (commands.includes(languageLayout[i])) {
      button.classList.add('button-commands');
    }
    if (numbers.includes(languageLayout[i])) {
      button.classList.add('data-btn-change');
    }
    if (symbols.includes(languageLayout[i])) {
      button.classList.add('data-btn-change');
    }
    if (letters.includes(languageLayout[i])) {
      button.classList.add('data-btn-change');
    }
    button.setAttribute('data-btn-name', `${languageLayout[i]}`);
    if (languageLayout[i] === 'ArrowRight') {
      button.textContent = 'Right';
      button.classList.add('arrow-right');
    } else if (languageLayout[i] === 'ArrowLeft') {
      button.textContent = 'Left';
      button.classList.add('arrow-left');
    } else if (languageLayout[i] === 'ArrowDown') {
      button.textContent = 'Down';
      button.classList.add('arrow-down');
    } else if (languageLayout[i] === 'ArrowUp') {
      button.textContent = 'Up';
      button.classList.add('arrow-up');
    } else if (languageLayout[i] === 'Space') {
      button.textContent = '';
    } else if (languageLayout[i] === 'Delete') {
      button.textContent = 'Del';
    } else if (languageLayout[i] === 'ShiftLeft' || languageLayout[i] === 'ShiftRight') {
      button.textContent = 'Shift';
    } else if (languageLayout[i] === 'ControlLeft' || languageLayout[i] === 'ControlRight') {
      button.textContent = 'Ctrl';
    } else if (languageLayout[i] === 'AltLeft' || languageLayout[i] === 'AltRight') {
      button.textContent = 'Alt';
    } else {
      button.textContent = `${languageLayout[i]}`;
    }
    keyboard.append(button);
  }
}

if (keyboardLang === 'eng') {
  buildAKeyboard(allEngSymbolsInKeyBoard, engLetters);
} else if (keyboardLang === 'rus') {
  buildAKeyboard(allRusSymbolsInKeyBoard, rusLetters);
}

const buttonsChange = keyboard.querySelectorAll('.data-btn-change');
const keyboardAllButtons = Array.from(keyboard.querySelectorAll('div'));

// keyboard.addEventListener('mousedown', (event) => {
//     if(event.target.classList.contains('button')) {
//         textArea.focus();
//         textArea.value += `${event.target.textContent}`;
//     }
// })

keyboard.addEventListener('click', (event) => {
  if (event.target.classList.contains('button')) {
    textArea.focus();
    textArea.value += `${event.target.textContent}`;
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  btnActive = keyboardAllButtons.find((elem) => {
    return elem.getAttribute('data-btn-name') === event.code || elem.getAttribute('data-btn-name') === event.key || elem.getAttribute('data-btn-name').toLocaleUpperCase() === event.key;
  });

  if (btnActive) {
    btnActive.classList.add('button-active');
  }

  if (event.shiftKey) {
    if (keyboardLang === 'eng') {
      if (capsLockActive) {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          if (symbols.includes(engLetterLayoutShift[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${engLetterLayoutShift[i]}`);
          }
          if (numbers.includes(engLetterLayoutShift[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${engLetterLayoutShift[i]}`);
          }
          buttonsChange[i].textContent = engLetterLayoutShift[i].toLowerCase();
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          if (symbols.includes(engLetterLayoutShift[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${engLetterLayoutShift[i]}`);
          }
          if (numbers.includes(engLetterLayoutShift[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${engLetterLayoutShift[i]}`);
          }
          buttonsChange[i].textContent = engLetterLayoutShift[i].toUpperCase();
        }
      }
    } else if (keyboardLang === 'rus') {
      if (capsLockActive) {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          if (symbols.includes(rusLetterLayoutShift[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${rusLetterLayoutShift[i]}`);
          }
          if (numbers.includes(rusLetterLayoutShift[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${rusLetterLayoutShift[i]}`);
          }
          buttonsChange[i].textContent = rusLetterLayoutShift[i].toLowerCase();
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          if (symbols.includes(rusLetterLayoutShift[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${rusLetterLayoutShift[i]}`);
          }
          if (numbers.includes(rusLetterLayoutShift[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${rusLetterLayoutShift[i]}`);
          }
          buttonsChange[i].textContent = rusLetterLayoutShift[i].toUpperCase();
        }
      }
    }
  }

  if (event.ctrlKey && event.altKey) {
    if (keyboardLang === 'eng') {
      if (capsLockActive) {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          buttonsChange[i].textContent = rusLetterLayout[i].toUpperCase();
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          buttonsChange[i].textContent = rusLetterLayout[i];
        }
      }
      keyboardLang = 'rus';
      objUser.keyboardLang = 'rus';
    } else if (keyboardLang === 'rus') {
      if (capsLockActive) {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          buttonsChange[i].textContent = engLetterLayout[i].toUpperCase();
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          buttonsChange[i].textContent = engLetterLayout[i];
        }
      }
      keyboardLang = 'eng';
      objUser.keyboardLang = 'eng';
    }
    localStorage.setItem(storageKey, JSON.stringify(objUser));
  }

  if (event.key === 'CapsLock') {
    if (capsLockActive) {
      for (let i = 0; i < buttonsChange.length; i += 1) {
        buttonsChange[i].textContent = buttonsChange[i].textContent.toLowerCase();
      }
    } else {
      for (let i = 0; i < buttonsChange.length; i += 1) {
        buttonsChange[i].textContent = buttonsChange[i].textContent.toUpperCase();
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keyboardAllButtons.length; i += 1) {
    keyboardAllButtons[i].classList.remove('button-active');
  }

  if (event.key === 'CapsLock') {
    if (capsLockActive) {
      capsLockActive = false;
    } else {
      capsLockActive = true;
    }
  }

  if (event.key === 'Shift') {
    if (keyboardLang === 'eng') {
      if (capsLockActive) {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          if (symbols.includes(engLetterLayout[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${engLetterLayout[i]}`);
          }
          if (numbers.includes(engLetterLayout[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${engLetterLayout[i]}`);
          }
          if (typeof engLetterLayout[i] === 'number') {
            buttonsChange[i].textContent = engLetterLayout[i];
          } else {
            buttonsChange[i].textContent = engLetterLayout[i].toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          if (symbols.includes(engLetterLayout[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${engLetterLayout[i]}`);
          }
          if (numbers.includes(engLetterLayout[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${engLetterLayout[i]}`);
          }
          if (typeof engLetterLayout[i] === 'number') {
            buttonsChange[i].textContent = engLetterLayout[i];
          } else {
            buttonsChange[i].textContent = engLetterLayout[i].toLowerCase();
          }
        }
      }
    } else if (keyboardLang === 'rus') {
      if (capsLockActive) {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          if (symbols.includes(rusLetterLayout[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${rusLetterLayout[i]}`);
          }
          if (numbers.includes(rusLetterLayout[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${rusLetterLayout[i]}`);
          }
          if (typeof engLetterLayout[i] === 'number') {
            buttonsChange[i].textContent = rusLetterLayout[i];
          } else {
            buttonsChange[i].textContent = rusLetterLayout[i].toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          if (symbols.includes(rusLetterLayout[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${rusLetterLayout[i]}`);
          }
          if (numbers.includes(rusLetterLayout[i])) {
            buttonsChange[i].setAttribute('data-btn-name', `${rusLetterLayout[i]}`);
          }
          if (typeof engLetterLayout[i] === 'number') {
            buttonsChange[i].textContent = rusLetterLayout[i];
          } else {
            buttonsChange[i].textContent = rusLetterLayout[i].toLowerCase();
          }
        }
      }
    }
  }
});

wrapper.append(textArea);
wrapper.append(keyboard);
wrapper.append(combinationHint);
wrapper.append(systemHint);
document.body.append(wrapper);
