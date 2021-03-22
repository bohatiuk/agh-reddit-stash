import { Grow, Icon } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { styles, TTP, appearTimeout } from '../styles/styleguide';

const Container = styled.div`
  width: 70%;
  margin: ${styles.M3} auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  background-color: ${({ theme }: TTP) => theme.colorBG1};
  box-shadow: ${({ theme }: TTP) => theme.shadow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: 360px;
  margin: ${styles.m5} ${styles.M1};
  border-radius: ${styles.defaultRadius};
  cursor: pointer;
  border: 1px solid transparent;
  transition: all ${styles.transitionParams};
  box-sizing: border-box;

  &:hover {
    border: 1px solid ${({ theme }: TTP) => theme.colorP1};
  }
`;

const CardIcon = styled.div`
  color: ${({ theme }: TTP) => theme.colorP1};
`;

const CardTitle = styled.div`
  font: ${styles.fontN8};
`;

const CardDescribtion = styled.div`
  font: ${styles.fontN5};
`;

function Dashboard() {
  // const [growIn, setGrowIn] = useState<boolean>(false);
  // useEffect(() => {
  //   setGrowIn(true);
  // }, []);

  return (
    <Container>
      <Row>
        <Grow appear in timeout={500}>
          <div>
            <Card>
              <CardIcon><Icon style={{ fontSize: '112px' }}>search</Icon></CardIcon>
              <CardTitle>Search and filter</CardTitle>
              <CardDescribtion>Find, group, filter our tweets database</CardDescribtion>
            </Card>
          </div>
        </Grow>
        <Grow appear in timeout={1000}>
          <div>
            <Card>
              <CardIcon><Icon style={{ fontSize: '112px' }}>search</Icon></CardIcon>
              <CardTitle>Search and filter</CardTitle>
              <CardDescribtion>Find, group, filter our tweets database</CardDescribtion>
            </Card>
          </div>
        </Grow>
        <Grow appear in timeout={1500}>
          <div>
            <Card>
              <CardIcon><Icon style={{ fontSize: '112px' }}>search</Icon></CardIcon>
              <CardTitle>Search and filter</CardTitle>
              <CardDescribtion>Find, group, filter our tweets database</CardDescribtion>
            </Card>
          </div>
        </Grow>
      </Row>
    </Container>
  );
}

export default Dashboard;
