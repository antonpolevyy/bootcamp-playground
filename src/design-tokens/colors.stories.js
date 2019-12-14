import React from 'react';
import { storiesOf } from '@storybook/react';
import { cx, css } from 'emotion';
import {Colors} from './colors';

const colorBox = css`
    display: inline-block;
    width: 10px;
    height: 10px;
`;
const blue = css`
    background-color: ${Colors.blue};
`;

storiesOf('Design tokens', module)
  .add('Colors', () => 
      <div>
        <h1>Colors</h1>
          <h2>Description</h2>
          <p>This is color doc....</p>
          <ul>
              <li><span className={cx(colorBox, blue)} /> Blue</li>
          </ul>
      </div>
    )
