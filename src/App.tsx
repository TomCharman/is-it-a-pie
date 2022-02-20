import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Row from 'components/Row';
import Column from 'components/Column';
import Title from 'components/Title/Title';
import Round from 'components/Round';
import Home from 'components/Home/Home';

function App() {
  return (
    <Row>
      <Column>
        <Title>
          Is
          <br />
          It
          <br />
          a
          <br />
          Pie?
        </Title>
      </Column>
      <Column width={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="round/:round" element={<Round />} />

        </Routes>
      </Column>

    </Row>

  );
}

export default App;
