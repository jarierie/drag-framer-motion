import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 200px;
  height: 50px;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled(motion.p)`
  color: white;
  font-size: 20px;
  cursor: grab;
`;

const Blocker = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
`;

const Main = () => {
  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <TextContainer>
          <Blocker
            animate={{ x: "-100%", transition: { duration: 2 } }}
          ></Blocker>
          <P
            drag
            dragConstraints={{ top: 50, bottom: 50, left: 50, right: 200 }}
          >
            Drag me
          </P>
        </TextContainer>
      </Container>
    </>
  );
};

export default Main;
