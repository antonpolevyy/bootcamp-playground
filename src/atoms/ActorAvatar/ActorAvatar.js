import React from 'react';
import { css } from 'emotion';

const avatar = css`
    width: 72px;
    object-position: center;
    object-fit: cover;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15),0 1.5px 3px 0 rgba(0,0,0,.15);
`;

export default function ({src}) {
    return <img className={avatar} alt="avatar" src={src} />
}