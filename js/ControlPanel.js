import Component from './Component';

export default class ControlPanel extends Component {
  constructor(props, renderTarget) {
    super(props, renderTarget);

    /*
      Props of ControlPanel
        - onChange: function (type: string, value: number)
    */

    this.renderElement.addEventListener('change', (event) => {
      if (this.props.onChange) {
        this.props.onChange(event.target.name, parseInt(event.target.value));
      }
    });
  }
};
