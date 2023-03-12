import { Link } from 'react-router-dom';
import useQuestions from 'hooks/useQuestions';
import styles from './Home.module.scss';

function Home() {
  const { totalRounds } = useQuestions();

  const randomRound = Math.ceil(Math.random() * totalRounds);

  return (
    <>
      <Link className={styles.invite} to="/round/1">Start from the beginning</Link>
      <Link className={styles.invite} to={`/round/${randomRound}`}>I’m feeling lucky</Link>
    </>
  );
}

export default Home;
