import React from 'react';
import { storiesOf } from '@storybook/react';
import { cx, css } from 'emotion';
import {Colors} from './colors';
import {Fonts} from './fonts';

const colorBox = css`
    display: inline-block;
    width: 10px;
    height: 10px;
`;
const blue = css`
    background-color: ${Colors.blue};
`;

const green = css`
    background-color: ${Colors.green};
`;

const grey = css`
    background-color: ${Colors.grey};
`;

const bluefont = css`
    color: ${Colors.blue};
`;
const greenfont = css`
    color: ${Colors.green};
`;
const greyfont = css`
    color: ${Colors.grey};
`;

storiesOf('Design tokens', module)
  .add('Colors', () => 
      <div>
        <h1>Colors</h1>
          <h2>Description</h2>
          <p>Primary colors for this application:</p>
          <ul>
              <li><span className={cx(colorBox, blue)} /> Blue</li>
              <li><span className={cx(colorBox, green)} /> Green</li>
              <li><span className={cx(colorBox, grey)} /> Grey</li>
          </ul>
      </div>
    )
