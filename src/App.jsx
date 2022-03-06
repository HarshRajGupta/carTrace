import React, { useState } from "react";
import './App.css';
import styled from "styled-components";


function App() {
    const [moveTo1, setMoveTo1] = useState(true);
    const [moveTo2, setMoveTo2] = useState(false);
    const [moveTo3, setMoveTo3] = useState(false);
  return (
    <main>
        {
            (
                moveTo1
                &&
                <Text>
                    welcome To 1
                </Text>
            )
            ||
            (
                moveTo2
                &&
                <Text>
                    welcome to 2
                </Text>
            )
            ||
            (
                moveTo3
                &&
                <Text>
                    welcome to 3
                </Text>
            )
        }
        <Wrap>
        <Switch onClick={() => (setMoveTo1(true),
                             setMoveTo2(false),
                             setMoveTo3(false)) } val={moveTo1}>
            1
        </Switch>
        <Switch onClick={() => (setMoveTo1(false),
                             setMoveTo2(true),
                             setMoveTo3(false)) } val={moveTo2}>
            2
        </Switch>
        <Switch onClick={() => (setMoveTo1(false),
                             setMoveTo2(false),
                             setMoveTo3(true)) } val={moveTo3}>
            3
        </Switch>
        </Wrap>
        <Car src="/images/car.png" one={moveTo1} two={moveTo2} three={moveTo3}/>
    </main>
  );
}

const Text = styled.div`
background: lightgreen;
padding: 10px 2rem;
max-width: 60vw;
margin: 16px auto;
border-radius: 8px;
font-weight: 600;
font-size: 32px;
text-transform: capitalize;
&:after {
content: "...";
}
`;

const Wrap = styled.div`
display: grid;
grid-template-columns: auto auto auto;
justify-content: space-between;
padding: 1rem 0.2rem;
margin-left:164px;
@media(max-width:768px){
margin-left:84px;
}
@media(max-width:480px){
margin-left:64px;
}
`;

const Switch = styled.div`
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

const Car = styled.img`
position: absolute;
bottom: 0;
height: 256px;
left: 8px;
margin-bottom: -32px;
transition: 1s;
transform: translate(400%, 0);
transform: ${(props) =>
        props.one ? "translate(0, 0)" : props.two ? "translate(190%, 0)": "translate(380%, 0)"};
@media(max-width:768px){
height: 128px;
transform: ${(props) =>
        props.one ? "translate(0, 0)" : props.two ? "translate(169%, 0)": "translate(320%, 0)"};

}
@media(max-width:480px){
transform: ${(props) =>
        props.one ? "translate(-16%, 0)" : props.two ? "translate(75%, 0)": "translate(160%, 0)"};
bottom: 10vh;
}
`;

export default App;