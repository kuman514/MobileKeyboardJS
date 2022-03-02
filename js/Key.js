import Component from './Component';

export default class Key extends Component {
  constructor(props, renderTarget) {
    super(props, renderTarget);

    /*
      State of Key
        - beingPressed: boolean
    */

    this.state = {
      beingPressed: false
    };
  }
};
