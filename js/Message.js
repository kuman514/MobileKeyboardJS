import Component from './Component';

export default class Message extends Component {
  constructor(props, renderTarget) {
    super(props, renderTarget);

    /*
      State of Message
        - text: string
    */

    this.state = {
      text: ''
    };

    this.getMessage = () => {
      return this.state.text;
    };

    this.render = () => {
      this.renderElement.textContent = this.state.text;
      return this.renderElement;
    };
  }
};
