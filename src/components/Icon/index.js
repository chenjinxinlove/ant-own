
import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export default  (props) => {
  const { type, className = '', spin} = props;
  const classString = classNames({
    aniticon: true,
    'aniticon-spin': !!spin || type === 'loading',
    [`aniticon-${type}`]: true
  }, className);
  return <i {...omit(props, ['type', 'spin'])} className={classString} />
};


