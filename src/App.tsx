import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Row from 'components/Row';
import Column from 'components/Column';
import Title from 'components/Title/Title';
import Round from 'components/Round';
import Home from 'components/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Row>
        <Column classes={['lg-3', 'md-12', 'sm-12']}>
          <Title>
            Is
            it
            a
            Pie?
          </Title>
        </Column>
        <Column classes={['lg-9', 'md-12', 'sm-12']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="round/:round" element={<Round />} />

          </Routes>
        </Column>
      </Row>
    </QueryClientProvider>
  );
}

export default App;
