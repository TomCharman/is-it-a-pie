import { Link } from 'react-router-dom';
import useQuestions from 'hooks/useQuestions';
import Row from 'components/Row';
import clsx from 'clsx';
import { styles } from './Home.css';

function Home() {
  const { totalRounds } = useQuestions();

  const randomRound = Math.ceil(Math.random() * totalRounds);

  return (
    <div className={styles.base}>
      <Row>
        <Link className={clsx(styles.invite, 'col-md-6 offset-md-3')} to="/round/1">Start from the beginning</Link>
      </Row>
      <Row>
        <Link className={clsx(styles.invite, 'col-md-6 offset-md-3')} to={`/round/${randomRound}`}>I’m feeling lucky</Link>
      </Row>
    </div>
  );
}

export default Home;
