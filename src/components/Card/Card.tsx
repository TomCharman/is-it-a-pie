import React from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import styles from './Card.module.scss';

type CardTypes = {
  description: string,
  isIt: boolean,
  revealed: boolean,
  onSelect: React.MouseEventHandler<HTMLButtonElement>,
  usesImages: boolean,
}

function Card({
  description,
  isIt,
  revealed,
  onSelect,
  usesImages,
}: CardTypes) {
  const middle = <Markdown>{description}</Markdown>;

  const styleProperty : React.CSSProperties = usesImages
    ? { backgroundImage: `url('/images/${description.replace(/ |'/g, '_')}.jpg')` }
    : {};

  const revealClass = isIt ? styles.good : styles.bad;

  return (
    <div className={classNames(styles.flip, { [styles.revealed]: revealed })}>
      <div className={styles.flipInner}>
        <button
          type="button"
          className={styles.card}
          onClick={onSelect}
          style={styleProperty}
        >
          {middle}
        </button>
        <div className={classNames(styles.cardBack, revealClass)}>
          {middle}
        </div>
      </div>
    </div>
  );
}

export default Card;
