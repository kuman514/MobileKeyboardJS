export default class Component {
  constructor(props, state, renderTarget) {
    this.props = props;
    this.state = state;

    this.renderElement = renderTarget;

    this.render = () => {};

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
}