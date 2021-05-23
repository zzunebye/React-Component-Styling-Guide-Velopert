import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "./Button";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function NormalCircle() {
  return <div></div>;
}

const AppBlock = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <div>
      <Circle color="orange" />
      <Circle color="lightgray" huge />
      {/* <NormalCircle style={{ circleStyle }} /> */}
      <hr />
      <ThemeProvider
        theme={{
          palette: {
            blue: "#228be6",
            gray: "#495057",
            pink: "#f06595"
          }
        }}
      >
        <AppBlock>
          <Button>Button 1</Button>
          <Button color="pink">Button 2</Button>
          <Button color="gray">Button 3</Button>
        </AppBlock>
      </ThemeProvider>
    </div>
  );
}

const circleStyle = {
  left: "150px",
  width: "5rem",
  height: "5rem",
  background: "black",
  borderRadius: "50%"
};

export default App;
