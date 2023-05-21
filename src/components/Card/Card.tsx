import clsx from 'clsx';
import { MouseEventHandler, CSSProperties } from 'react';
import Markdown from 'react-markdown';
import { styles } from './Card.css';

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

  return (
    <div className={clsx(
      styles.flip,
      className,
    )}
    >
      <div className={styles.flipInner({ revealed })}>
        <button
          type="button"
          className={styles.card}
          onClick={onSelect}
          style={styleProperty}
        >
          {middle}
        </button>
        <div className={styles.cardBack({ isIt })}>
          {middle}
        </div>
      </div>
    </div>
  );
}

export default Card;
