export default class Component {
  constructor(props, renderTarget) {
    this.props = props;
    this.state = {};

    this.renderElement = renderTarget;

    this.render = () => {
      console.log(this.state);
      return this.renderElement;
    };

    this.setState = (newState) => {
      let modified = false;
      Object.entries(newState).forEach(([key, value]) => {
        if (this.state[key] !== value) {
          modified = true;
        }
        this.state[key] = value;
      });

      if (modified) {
        this.render();
      }
    };
  }
};
