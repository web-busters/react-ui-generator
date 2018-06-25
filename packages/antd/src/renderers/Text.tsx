import * as React from 'react';
import { ChangeEvent } from 'react';
import { _Input } from './Input';

import {
  FieldProps,
  PropTypes,
  basePropTypes
} from '@react-ui-generator/core';

export class Text extends React.PureComponent<FieldProps, {}> {
  render() {
    return (<_Input type='text' {...this.props} />);
  }
}
