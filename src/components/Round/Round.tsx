import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useQuestions from 'hooks/useQuestions';
import Card from 'components/Card/Card';
import Row from 'components/Row';
import { styles } from './Round.css';

function Round() {
  const { round: roundId } = useParams();

  const { round, totalRounds, selectItem } = useQuestions(Number(roundId));
  const navigate = useNavigate();

  const number = roundId ? +roundId : 0;

  return (
    <div>
      <div className={styles.top}>
        <h1 className={styles.title}>
          Round
          {' '}
          {number}
          :
          {' '}
          {round?.roundName}
        </h1>

        <div className={styles.navigation}>
          <Button
            className={styles.button}
            disabled={number === 1}
            onClick={() => navigate(`/round/${number - 1}`)}
            variant="outline-secondary"
          >
            Previous
          </Button>
          <Button
            className={styles.button}
            disabled={number >= totalRounds}
            onClick={() => navigate(`/round/${number + 1}`)}
            variant="outline-secondary"
          >
            Next
          </Button>
        </div>
      </div>
      <div className="container-fluid">
        <Row>
          {round?.items.map((item, index) => (
            <Card
              key={item.description}
              className="col-md-4 col-sm-6 col-xs-12"
              onSelect={() => selectItem(index)}
              usesImages={round?.usesImages}
              revealed={item.selected}
              description={item.description}
              isIt={item.isIt}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Round;
