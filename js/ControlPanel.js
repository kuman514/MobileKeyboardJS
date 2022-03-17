import Component from './Component';

export default class ControlPanel extends Component {
  constructor(props, renderTarget) {
    super(props, renderTarget);

    /*
      Props of ControlPanel
        - initConfig: object {
            KeyboardSize: '40%',
            VibrationAmount: 40,
            KeyboardBGColor: '#FFFFFF',
            KeyColor: '#CCCCCC',
            KeyFontColor: '#000000',
            KeyBorderColor: '#000000'
          }
    */

    if (this.props.initConfig) {
      Object.entries(this.props.initConfig).forEach(([key, configValue]) => {
        document.getElementsByName(key)[0].value = configValue;
      });
    }

    const controlAdjust = (type, value) => {
      console.log(type, value);

      switch (type) {
        case 'KeyboardSize':
          document.documentElement.style.setProperty('--keyboard-size', `${value}%`);
          break;
        case 'VibrationAmount':
          document.documentElement.style.setProperty('--vibration-amount', `${value}`);
          break;
        case 'KeyboardBGColor':
          document.documentElement.style.setProperty('--keyboard-bg-color', `${value}`);
          break;
        case 'KeyColor':
          document.documentElement.style.setProperty('--key-color', `${value}`);
          break;
        case 'KeyFontColor':
          document.documentElement.style.setProperty('--key-font-color', `${value}`);
          break;
        case 'KeyBorderColor':
          document.documentElement.style.setProperty('--key-border-color', `${value}`);
          break;
      }
    };

    this.renderElement.addEventListener('change', (event) => {
      controlAdjust(event.target.name, event.target.value);
    });
  }
};
