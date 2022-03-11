import Component from './Component';
import Key from './Key';

export default class Keyboard extends Component {
  constructor(props, renderTarget) {
    super(props, renderTarget);

    /*
      Props of Keyboard
        - onType: function
        - onErase: function
        - onSubmit: function
      
      State of Keyboard
        - converted: boolean
        - shifted: boolean
    */
   
    this.state = {
      converted: false,
      shifted: false
    };

    // Array of Key Components
    const keyIds = [
      'Key1', 'Key2', 'Key3', 'Key4', 'Key5', 'Key6', 'Key7', 'Key8', 'Key9', 'Key0',
      'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
      'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
      'Caps', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Backspace',
      'Convert', 'Comma', 'QuestionMark', 'Space', 'Period', 'Submit'
    ];

    const keyInputs = {
      'Key1': ['1', '1', '1', '1'],
      'Key2': ['2', '2', '2', '2'],
      'Key3': ['3', '3', '3', '3'],
      'Key4': ['4', '4', '4', '4'],
      'Key5': ['5', '5', '5', '5'],
      'Key6': ['6', '6', '6', '6'],
      'Key7': ['7', '7', '7', '7'],
      'Key8': ['8', '8', '8', '8'],
      'Key9': ['9', '9', '9', '9'],
      'Key0': ['0', '0', '0', '0'],
      'KeyQ': ['q', 'Q', '%', '`'],
      'KeyW': ['w', 'W', '\\', '•'],
      'KeyE': ['e', 'E', '|', '√'],
      'KeyR': ['r', 'R', '=', '^'],
      'KeyT': ['t', 'T', '[', 'π'],
      'KeyY': ['y', 'Y', ']', '∆'],
      'KeyU': ['u', 'U', '<', '¶'],
      'KeyI': ['i', 'I', '>', '°'],
      'KeyO': ['o', 'O', '{', '©'],
      'KeyP': ['p', 'P', '}', '®'],
      'KeyA': ['a', 'A', '@', '£'],
      'KeyS': ['s', 'S', '#', '$'],
      'KeyD': ['d', 'D', '~', '€'],
      'KeyF': ['f', 'F', '_', '¥'],
      'KeyG': ['g', 'G', '&', '§'],
      'KeyH': ['h', 'H', '-', '¬'],
      'KeyJ': ['j', 'J', '+', '†'],
      'KeyK': ['k', 'K', '(', '✓'],
      'KeyL': ['l', 'L', ')', '™'],
      'KeyZ': ['z', 'Z', '*', '←'],
      'KeyX': ['x', 'X', '"', '→'],
      'KeyC': ['c', 'C', '\'', '↑'],
      'KeyV': ['v', 'V', ':', '↓'],
      'KeyB': ['b', 'B', ';', '±'],
      'KeyN': ['n', 'N', '!', 'µ'],
      'KeyM': ['m', 'M', '/', '※'],
      'Comma': [',', ',', ',', ','],
      'QuestionMark': ['?', '?', '?', '?'],
      'Period': ['.', '.', '.', '.']
    };

    const keys = keyIds.map((item) => {
      return new Key({}, document.getElementById(item));
    });

    const onConvertPressed = () => {
      this.setState({
        converted: !this.state.converted,
        shifted: false
      });
    };

    const onShiftPressed = () => {
      this.setState({
        converted: this.state.converted,
        shifted: !this.state.shifted
      });
    };

    const onKeyPressed = (keyCode) => {
      switch (keyCode) {
        case 'Caps':
          onShiftPressed();
          break;
        case 'Backspace':
          if (this.props.onErase) {
            this.props.onErase();
          }
          break;
        case 'Convert':
          onConvertPressed();
          break;
        case 'Submit':
          if (this.props.onSubmit) {
            this.props.onSubmit();
          }
          break;
        case 'Space':
          if (this.props.onType) {
            this.props.onType(' ');
          }
          break;
        default:
          if (keyInputs[keyCode] && this.props.onType) {
            let inputIndex = 0;
            if (this.state.converted) {
              inputIndex += 2;
            }
            if (this.state.shifted) {
              inputIndex += 1;
            }

            this.props.onType(keyInputs[keyCode][inputIndex]);
          }
          break;
      }
    };

    this.renderElement.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      onKeyPressed(event.target.id);
    });

    this.render = () => {
      let inputIndex = 0;
      if (this.state.converted) {
        inputIndex += 2;
      }
      if (this.state.shifted) {
        inputIndex += 1;
      }

      keys.forEach((item) => {
        if (keyInputs[item.renderElement.id]) {
          item.renderElement.textContent = keyInputs[item.renderElement.id][inputIndex];
        }
      });

      return this.renderElement;
    };
  }
};

