import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useQuestions from 'hooks/useQuestions';
import Card from 'components/Card/Card';
import Row from 'components/Row';
import styles from './Round.module.scss';

function Round() {
  const { round: roundId } = useParams();

  const { round, totalRounds, selectItem } = useQuestions(Number(roundId));
  const navigate = useNavigate();

  const number = roundId ? +roundId : 0;

  return (
    <div>
      <div className={styles.top}>
        <h1>
          Round
          {' '}
          {number}
          :
          {' '}
          {round?.roundName}
        </h1>

        <div className={styles.navigation}>
          <Button
            variant="outline-secondary"
            onClick={() => navigate(`/round/${number - 1}`)}
            disabled={number === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => navigate(`/round/${number + 1}`)}
            disabled={number >= totalRounds}
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
