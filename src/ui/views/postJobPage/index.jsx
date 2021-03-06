import React from "react";
import styled from "styled-components";
import bgImg from "../../../assets/images/designer.jpg";
import PostJobForm from "../../components/PostJobForm";
import Main from "../../components/Main";

// import {BrowserRouter as Router, Route} from 'react-router-dom'

const postJobPage = () => {
  return (
    <Container>
      <Wrapper> 
        <Sidebar2/>
        <Main />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default postJobPage;
