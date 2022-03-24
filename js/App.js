import Component from './Component';
import ControlPanel from './ControlPanel';
import Keyboard from './Keyboard';
import Message from './Message';

export default class App extends Component {
  constructor(props, renderTarget) {
    super(props, renderTarget);

    // Message Component
    const message = new Message({}, document.getElementById('InputMessage'));
    message.render();

    const appendLetter = (newLetter) => {
      const newMessage = message.getMessage() + newLetter;
      //console.log(newMessage);
      message.setState({
        text: newMessage
      });
    };

    const eraseLetter = () => {
      const curMessage = message.getMessage();
      const newMessage = curMessage.slice(0, curMessage.length - 1);
      message.setState({
        text: newMessage
      });
    };

    const copyToClipboard = () => {
      // Temporary implementation
      const copyMsg = message.getMessage();
      alert(copyMsg);
    };

    // Keyboard Component
    const keyboard = new Keyboard({
      onType: appendLetter,
      onErase: eraseLetter,
      onSubmit: copyToClipboard
    }, document.querySelector('.Keyboard'));

    // Control Panel Component
    const savedKeyboardSize = localStorage.getItem('keyboardSize');
    const savedVibrationAmount = localStorage.getItem('vibrationAmount');
    const savedKeyboardBGColor = localStorage.getItem('keyboardBGColor');
    const savedKeyColor = localStorage.getItem('keyColor');
    const savedKeyFontColor = localStorage.getItem('keyFontColor');
    const savedKeyBorderColor = localStorage.getItem('keyBorderColor');
    const controlPanel = new ControlPanel({
      initConfig: {
        KeyboardSize: JSON.parse(savedKeyboardSize) ?? '40',
        VibrationAmount: parseInt(JSON.parse(savedVibrationAmount) ?? '40'),
        KeyboardBGColor: JSON.parse(savedKeyboardBGColor) ?? '#FFFFFF',
        KeyColor: JSON.parse(savedKeyColor) ?? '#CCCCCC',
        KeyFontColor: JSON.parse(savedKeyFontColor) ?? '#000000',
        KeyBorderColor: JSON.parse(savedKeyBorderColor) ?? '#000000'
      }
    }, document.querySelector('.ControlPanel'));
  }
};
