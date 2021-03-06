/**
 * Created by chen on 2017/3/22.
 */
import { Component } from "React" ;

export const Enhance = (ComposedComponent) => class extends Component {
  constructor() {
    this.state = { data: null };
  }
  componentDidMount() {
    this.setState({ data: 'Hello' });
  }
  render() {
    return <ComposedComponent {...this.props} data={this.state.data} />;
  }
};
