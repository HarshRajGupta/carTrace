import React from "react";
import styled from "styled-components";

function Switch(props) {
    return (
        <Button val={props.val}>
            {props.text}
        </Button>
    );
}

const Button = styled.div`
cursor: pointer;
background: ${(props) =>
        props.val ? "red" : "green"};
border-radius: 50%;
padding: 1rem;
width: 150px;
height: 150px;
text-align: center;
vertical-align: center;
display: flex;
justify-content: center;
font-size: 64px;
font-weight: 800;
color: #fff;
border: 6px solid rgba(255, 255, 255, 0.7);
@media(max-width:768px){
width: 64px;
height: 64px;
font-size: 32px;
padding: 0.2rem;
}
`;

export default Switch;