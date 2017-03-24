/**
 * Created by chen on 2017/3/21.
 */

import React from 'react';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import Icon from '../icon';
import omit from 'omit.js';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str){
  return typeof str === 'string';
}

function insertSpace(child) {
  if(isString(child.tupe) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {},
      child.props.children.split('').join('')
    )
  }
  if(isString(child)) {
    if(isTwoCNChar(child)) {
      child = child.split('').join('');
    }
    return <span>{child}</span>;
  }
  return child
}
export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger'
export type ButtonShape = 'circle' | 'circle-outline'
export type ButtonSize = 'small' | 'large'
export interface ButtonProps {
  type?:ButtonType;
  htmlType?: string;
  icon?: string;
  shape?: ButtonShape;
  size?: ButtonSize;
  onClick?: React.FormEventHandler<any>
  onMouseUp?:React.FormEventHandler<any>
  loading?:boolean;
  disabled?:boolean;
  style?:React.CSSProperties;
  prefixCls?: string;
  className?:string;
  ghost?:boolean
}

export default class Button extends React.Component<ButtonProps, any> {
  static Group: any;
  static __ANT_BUTTON = true;

  static defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    clicked: false,
    ghost: false
  }

  static propTypes = {
    type: React.PropTypes.string,
    shape: React.PropTypes.oneOf(['circle', 'circle-outline']),
    size: React.PropTypes.oneOf(['large','default','small']),
    htmlType: React.PropTypes.oneOf(['sumit','button','reset']),
    onClick: React.PropTypes.func,
    loading: React.PropTypes.bool,
    className: React.PropTypes.string,
    icon: React.ProTypes.string,
  }

  timeout: number;
  delayTimeout: number;

  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading,
    }

  }



  render() {
    const {
      type, shape, size = '', className, htmlType, children, icon, prefixCls, ghost, ...others,
    }  = this.props;
    const { loading, clicked } = this.state;

    const sizeCls = ({
      large: 'lg',
      small: 'sm'
    })[size] || '';

    const classes = className(prefixCls, {
      [`${prefixCls}-${type}`] : type,
      [`${prefixCls}-${shape}`] : shape,
      [`${prefixCls}-${sizeCls}`] : sizeCls,
      [`${prefixCls}-icon-only`]: loading,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-clicked`]: clicked,
      [`${prefixCls}-background-ghost`]: ghost
    })

    const iconType = loading ? 'loading' : icon;
    const iconNode = iconType ? <Icon type={iconType}/> : null;
    const kids = React.Children.map(children, insertSpace);

    return (
      <button
      {...omit(others, ['loading', 'clicked'])}
        type={htmlType || 'button'}
    className={classes}
        onMouseUp={this.handleMouuseUp}
        onClick={this.handleClick}>
    {iconNode}{kids}
        </button>
    )



  }

}




