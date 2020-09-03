import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';

const Container = styled.div`
  width: 100%;
  hieght: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: React.FC = () => {
  return(
    <Container>
      <Header/>
      
    </Container>
  )
}

export default Home;