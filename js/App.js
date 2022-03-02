import Component from './Component';
import Key from './Key';
import Message from './Message';

export default class App extends Component {
  constructor(props, renderTarget) {
    super(props, renderTarget);

    /*
      State of App
        - modeIndex: number (0~3)
        - currentMessage: string
    */
   
    this.state = {
      modeIndex: 0,
      currentMessage: ''
    };

    // Message Component
    const message = new Message({}, {
      text: ''
    }, document.getElementById('InputMessage'));
    const getMessage = () => {};

    const appendLetter = () => {};

    const eraseLetter = () => {};

    // Array of Key Components
    const keyIds = [
      'Key1', 'Key2', 'Key3', 'Key4', 'Key5', 'Key6', 'Key7', 'Key8', 'Key9', 'Key0',
      'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
      'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
      'Caps', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Backspace',
      'Convert', 'Comma', 'QuestionMark', 'Space', 'Period', 'Submit'
    ];

    const keyInputs = {
      'Key1': ['1'],
      'Key2': ['2'],
      'Key3': ['3'],
      'Key4': ['4'],
      'Key5': ['5'],
      'Key6': ['6'],
      'Key7': ['7'],
      'Key8': ['8'],
      'Key9': ['9'],
      'Key0': ['0'],
      'KeyQ': ['q', 'Q'],
      'KeyW': ['w', 'W'],
      'KeyE': ['e', 'E'],
      'KeyR': ['r', 'R'],
      'KeyT': ['t', 'T'],
      'KeyY': ['y', 'Y'],
      'KeyU': ['u', 'U'],
      'KeyI': ['i', 'I'],
      'KeyO': ['o', 'O'],
      'KeyP': ['p', 'P'],
      'KeyA': ['a', 'A'],
      'KeyS': ['s', 'S'],
      'KeyD': ['d', 'D'],
      'KeyF': ['f', 'F'],
      'KeyG': ['g', 'G'],
      'KeyH': ['h', 'H'],
      'KeyJ': ['j', 'J'],
      'KeyK': ['k', 'K'],
      'KeyL': ['l', 'L'],
      'KeyZ': ['z', 'Z'],
      'KeyX': ['x', 'X'],
      'KeyC': ['c', 'C'],
      'KeyV': ['v', 'V'],
      'KeyB': ['b', 'B'],
      'KeyN': ['n', 'N'],
      'KeyM': ['m', 'M'],
      'Comma': [','],
      'QuestionMark': ['?'],
      'Space': [' '],
      'Period': ['.']
    };

    const onKeyPressed = (keyCode) => {
      switch (keyCode) {
        case 'Caps':
          break;
        case 'Backspace':
          break;
        case 'Convert':
          break;
        case 'Submit':
          break;
        default:
          break;
      }
    };

    const keys = keyIds.map((item) => {
      return new Key({}, document.getElementById(item));
    });
  }
};
