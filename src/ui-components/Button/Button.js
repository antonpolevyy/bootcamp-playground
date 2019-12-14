import React from 'react';
import { cx, css } from 'emotion';
import { Colors } from '../../design-tokens/colors';
import { Fonts } from '../../design-tokens/fonts';
import { Fontweights } from '../../design-tokens/fontsweights';


const buttonStyle = css`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: ${Fonts.bodyfont1};
  font-size: 16px;
`;

const defaultColor = css`
  background-color: ${Colors.blue};
`;

const submitColor = css`
  background-color: ${Colors.green};
`;

const cancelColor = css`
  background-color: ${Colors.grey};
  font-weight: ${Fontweights.fontweighting3};
  color: black;
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