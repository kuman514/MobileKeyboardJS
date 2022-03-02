export default class Component {
  constructor(props, renderTarget) {
    this.props = props;
    this.state = {};

    this.renderElement = renderTarget;

    this.render = () => {
      return this.renderElement;
    };

    this.setState = (newState) => {
      let modified = false;
      Object.entries(newState).forEach((key) => {
        if (this.state[key] !== newState[key]) {
          modified = true;
        }
        this.state[key] = newState[key];
      });

      if (modified) {
        this.render();
      }
    };
  }
};
