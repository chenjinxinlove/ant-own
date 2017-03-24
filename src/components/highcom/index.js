import  { Component }  from "React";
import { Enhance } from "./Enhance";

const MyComponent = class extends Component {
  render() {
    if (!this.props.data) return <div>Waiting...</div>;
    return <div>{this.data}</div>;
  }
}

export default Enhance(MyComponent); // Enhanced component`
