import { Routes, Route } from 'react-router-dom';
import Row from 'components/Row';
import Column from 'components/Column';
import Title from 'components/Title/Title';
import Round from 'components/Round';
import Home from 'components/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import styles from './App.module.scss';
import 'styles/globalTheme.css';

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
      <Row className={styles.app}>
        <Column classes={['md-12']}>
          <Title>
            Is
            it
            a
            Pie?
          </Title>
        </Column>
        <Column classes={['md-12']}>
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
