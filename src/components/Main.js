require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Menu, Dropdown, Icon,message } from 'antd';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  onClick ({key}) {
    message.info(`Click on item ${key}`);
  }

  render() {

    const menu = (
      <Menu onClick={this.onClick.bind(this)}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3" disabled>3d menu item</Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me, Click menu item <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent
