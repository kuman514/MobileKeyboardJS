import Component from './Component';
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

    // Keyboard Component
    const keyboard = new Keyboard({}, docuemnt.querySelector('.Keyboard'));
  }
};
