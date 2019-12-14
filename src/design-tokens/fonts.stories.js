import React from 'react';
import { storiesOf } from '@storybook/react';
import { cx, css } from 'emotion';
import {Fonts} from './fonts';

const bf1 = css`
    font-family: ${Fonts.bodyfont1};
`;

const bf2 = css`
    font-family: ${Fonts.bodyfont2};
`;

const bf3 = css`
    font-family: ${Fonts.bodyfont3};
`;

storiesOf('Design tokens', module)
  .add('Fonts', () => 
      <div>
        <h1>Fonts</h1>
          <h2>Description</h2>
          <p>Primary fonts styles for this application:</p>
          <ul>
              <li className={cx(bf1)}><span/> Title1</li>
              <li className={cx(bf2)}><span /> Title2</li>
              <li className={cx(bf3)}><span /> Title3</li>
          </ul>
      </div>
    )