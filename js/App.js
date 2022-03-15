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

    const controlAdjust = (type, value) => {
      console.log(type, value);

      switch (type) {
        case 'KeyboardSize':
          document.documentElement.style.setProperty('--keyboard-size', `${value}%`);
          break;
        case 'VibrationAmount':
          document.documentElement.style.setProperty('--vibration-amount', `${value}`);
          break;
      }
    };

    // Control Panel Component
    const controlPanel = new ControlPanel({
      onChange: controlAdjust
    }, document.querySelector('.ControlPanel'));
  }
};
