import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useQuestions from 'hooks/useQuestions';
import Card from 'components/Card/Card';
import styles from './Round.module.scss';

function Round() {
  const { round: roundId } = useParams();

  const { round, totalRounds, selectItem } = useQuestions(roundId);
  const navigate = useNavigate();

  const number = roundId ? +roundId : 0;

  return (
    <div>
      <div className={styles.navigation}>
        <Button
          variant="outline-secondary"
          onClick={() => navigate(`/round/${number - 1}`)}
          disabled={number === 1}
        >
          Last Round

        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => navigate(`/round/${number + 1}`)}
          disabled={number >= totalRounds}
        >
          Next Round

        </Button>
      </div>
      <h1>
        Round
        {' '}
        {number}
        :
        {' '}
        {round?.roundName}
      </h1>
      {round?.items.map((q) => (
        <Card
          key={q.description}
          onSelect={() => selectItem(q.id)}
          usesImages={round?.usesImages}
          revealed={q.selected}
          description={q.description}
          isIt={q.isIt}
        />
      ))}
    </div>
  );
}

export default Round;
