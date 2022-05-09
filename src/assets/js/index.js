import '../styles/style.css';
import {
  commands, engLetterLayout, engLetterLayoutShift, rusLetterLayout, rusLetterLayoutShift,
  allEngSymbolsInKeyBoard, allRusSymbolsInKeyBoard, keyCodes,
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

function buildAKeyboard(languageLayout) {
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
      button.setAttribute('data-btn-name', `${languageLayout[i]}`);
    } else {
      button.classList.add('data-btn-change');
    }
    if (languageLayout[i] === 'ArrowRight') {
      button.textContent = 'Right';
    } else if (languageLayout[i] === 'ArrowLeft') {
      button.textContent = 'Left';
    } else if (languageLayout[i] === 'ArrowDown') {
      button.textContent = 'Down';
    } else if (languageLayout[i] === 'ArrowUp') {
      button.textContent = 'Up';
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
  buildAKeyboard(allEngSymbolsInKeyBoard);
} else if (keyboardLang === 'rus') {
  buildAKeyboard(allRusSymbolsInKeyBoard);
}

const keyboardAllButtons = Array.from(keyboard.querySelectorAll('div'));
const buttonsChange = keyboard.querySelectorAll('.data-btn-change');
for (let i = 0; i < buttonsChange.length; i += 1) {
  buttonsChange[i].setAttribute('data-btn-name', `${keyCodes[i]}`);
}

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('button')) {
    textArea.focus();
    switch (event.target.getAttribute('data-btn-name')) {
      case 'Backspace':
        if (textArea.selectionStart === textArea.selectionEnd) {
          textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionStart);
        } else {
          textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd);
        }
        break;
      case 'Tab':
        textArea.setRangeText('\t', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'Delete':
        if (textArea.selectionStart === textArea.selectionEnd) {
          textArea.setRangeText('', textArea.selectionStart, textArea.selectionStart + 1);
        } else {
          textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd);
        }
        break;
      case 'CapsLock':
      // textArea.value += `\n`;
        break;
      case 'Enter':
        textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'ShiftLeft':
      // textArea.value += `\n`;
        break;
      case 'ShiftRight':
      // textArea.value += `\n`;
        break;
      case 'ControlLeft':
      // textArea.value += `\n`;
        break;
      case 'ControlRight':
      // textArea.value += `\n`;
        break;
      case 'AltLeft':
      // textArea.value += `\n`;
        break;
      case 'AltRight':
      // textArea.value += `\n`;
        break;
      case 'ArrowUp':
        textArea.setRangeText('\u2191', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'ArrowLeft':
        textArea.setRangeText('\u2190', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'ArrowDown':
        textArea.setRangeText('\u2193', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'ArrowRight':
        textArea.setRangeText('\u2192', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'Space':
        textArea.setRangeText(' ', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      default:
        textArea.setRangeText(`${event.target.textContent}`, textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
    }
    event.target.classList.add('button-active');
  }
});

textArea.addEventListener('blur', (event) => {
  if (event.target.classList.contains('text-area')) {
    textArea.focus();
  }
});

keyboard.addEventListener('mouseup', () => {
  for (let i = 0; i < keyboardAllButtons.length; i += 1) {
    keyboardAllButtons[i].classList.remove('button-active');
  }
});

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Tab':
      event.preventDefault();
      textArea.value += '\t';
      break;
    case 'Alt':
      event.preventDefault();
      break;
    case 'Meta':
      event.preventDefault();
      break;
    case 'ArrowUp':
      event.preventDefault();
      textArea.value += '\u2191';
      break;
    case 'ArrowLeft':
      event.preventDefault();
      textArea.value += '\u2190';
      break;
    case 'ArrowDown':
      event.preventDefault();
      textArea.value += '\u2193';
      break;
    case 'ArrowRight':
      event.preventDefault();
      textArea.value += '\u2192';
      break;
    default:
      break;
  }

  textArea.focus();

  btnActive = keyboardAllButtons.find((elem) => elem.getAttribute('data-btn-name') === event.code);

  if (btnActive) {
    btnActive.classList.add('button-active');
  }

  if (event.shiftKey) {
    if (keyboardLang === 'eng') {
      if (capsLockActive) {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          buttonsChange[i].textContent = engLetterLayoutShift[i].toLowerCase();
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          buttonsChange[i].textContent = engLetterLayoutShift[i].toUpperCase();
        }
      }
    } else if (keyboardLang === 'rus') {
      if (capsLockActive) {
        for (let i = 0; i < buttonsChange.length; i += 1) {
          buttonsChange[i].textContent = rusLetterLayoutShift[i].toLowerCase();
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
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
          if (typeof engLetterLayout[i] === 'number') {
            buttonsChange[i].textContent = engLetterLayout[i];
          } else {
            buttonsChange[i].textContent = engLetterLayout[i].toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
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
          if (typeof engLetterLayout[i] === 'number') {
            buttonsChange[i].textContent = rusLetterLayout[i];
          } else {
            buttonsChange[i].textContent = rusLetterLayout[i].toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < buttonsChange.length; i += 1) {
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
