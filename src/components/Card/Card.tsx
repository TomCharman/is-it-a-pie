import clsx from 'clsx';
import { MouseEventHandler, CSSProperties } from 'react';
import Markdown from 'react-markdown';
import styles from './Card.module.scss';

type CardTypes = {
  className: string,
  description: string,
  isIt: boolean,
  revealed: boolean,
  onSelect: MouseEventHandler<HTMLButtonElement>,
  usesImages: boolean,
}

function Card({
  className,
  description,
  isIt,
  revealed,
  onSelect,
  usesImages,
}: CardTypes) {
  const middle = <Markdown>{description}</Markdown>;

  const styleProperty: CSSProperties = usesImages
    ? { backgroundImage: `url('/images/${description.replace(/ |'/g, '_')}.jpg')` }
    : {};

  const revealClass = isIt ? styles.good : styles.bad;

  return (
    <div className={clsx(
      styles.flip,
      { [styles.revealed]: revealed },
      className,
    )}
    >
      <div className={styles.flipInner}>
			{isIt}
        <button
          type="button"
          className={styles.card}
          onClick={onSelect}
          style={styleProperty}
        >
          {middle}
        </button>
        <div className={clsx(styles.cardBack, revealClass)}>
          {middle}
        </div>
      </div>
    </div>
  );
}

export default Card;
