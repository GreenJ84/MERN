import React, {Component} from 'react';
import styled from 'styled-components';

const createBox = (color) => {

    return;
}
const BoxStyle = styled.div`
    height: 100px;
    width: 100px;
    margin: 10px;
    display: inline-block;
    background: ${props => props.color || 'red' };
    `;

export default BoxStyle;
