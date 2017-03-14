require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import * as Icon  from './Icon/index';
import omit from 'omit.js';
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let dd = omit({ name: 'Benjy', age: 18 }, [ 'name' ]);
    window.console.log(dd);
  }
  render() {
    return (
     <div>
       <div>kkk</div>
       <Icon type="link" spin="true"/>
     </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent
