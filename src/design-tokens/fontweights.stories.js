import React from 'react';
import { storiesOf } from '@storybook/react';
import { cx, css } from 'emotion';
import { Fontweights } from './fontsweights';

const bf1 = css`
    font-weight: ${Fontweights.fontweighting1};
`;

const bf2 = css`
    font-family: ${Fontweights.fontweighting2};
`;

const bf3 = css`
    font-family: ${Fontweights.fontweighting3};
`;

storiesOf('Design tokens', module)
  .add('Fonts', () => 
      <div>
        <h1>Fonts</h1>
          <h2>Description</h2>
          <p>Primary fonts sizing for this application:</p>
          <ul>
              <li className={cx(bf1)}><span/> Title1 - 100</li>
              <li className={cx(bf2)}><span /> Title2 - 400</li>
              <li className={cx(bf3)}><span /> Title3 - 800</li>
          </ul>
      </div>
    )