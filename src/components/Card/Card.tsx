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

  if (revealed) {
    return (
      <div
        className={classNames(styles.card, isIt ? styles.good : styles.bad)}
      >
        {middle}
      </div>
    );
  }

  const styleProperty : React.CSSProperties = usesImages
    ? { backgroundImage: `url('/images/${description.replace(/ |'/g, '_')}.jpg')` }
    : {};

  return (
    <button
      type="button"
      className={styles.card}
      onClick={onSelect}
      style={styleProperty}
    >
      {middle}
    </button>
  );
}

export default Card;
