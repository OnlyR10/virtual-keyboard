const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rusLetters = ['ё'];
const engLetters = [];

for (let i = 97; i < 123; i += 1) {
  engLetters.push(String.fromCodePoint(i));
}

for (let i = 1072; i < 1104; i += 1) {
  rusLetters.push(String.fromCodePoint(i));
}

const symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', '/', ',', '<', '.', '>', '?'];

const commands = [
  'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
];

const engLetterLayout = [
  '`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
  '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

const engLetterLayoutShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?'];

const rusLetterLayout = [
  'ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
  'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];

const rusLetterLayoutShift = [
  'ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/',
  'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
  'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ','];

const allEngSymbolsInKeyBoard = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const allRusSymbolsInKeyBoard = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

export {
  numbers, rusLetters, engLetters, symbols, commands, engLetterLayout, engLetterLayoutShift,
  rusLetterLayout, rusLetterLayoutShift, allEngSymbolsInKeyBoard, allRusSymbolsInKeyBoard,
};
