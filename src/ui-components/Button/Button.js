import React from 'react';
import { cx, css } from 'emotion';
import {Colors} from '../../design-tokens/colors';

const buttonStyle = css`  
  /* background-color: #4CAF50; Green */
  background-color: ${Colors.blue};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const defaultColor = css`
  background-color: ${Colors.blue};
`;

const submitColor = css`
  background-color: #4CAF50; /* Green */
`;

const cancelColor = css`
  background-color: lightgray;
`;

export default function Button({ onClickFunction, buttonName, buttonType }) {
  let colorStyle = defaultColor;
  if (buttonType === "Submit") colorStyle = submitColor
  else if (buttonType === "Cancel") colorStyle = cancelColor;

  return (
    <div>
        <button onClick={onClickFunction} className={cx(buttonStyle, colorStyle)}>{buttonName}</button>
    </div>
  );
}