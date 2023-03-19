import { ReactNode } from 'react';
import styles from './Title.module.scss';

type TitleProps = {
  children: ReactNode,
}

function Title({ children }: TitleProps) {
  return (
    <div className={styles.base}>
      <a href="/" className={styles.link}>
        {children}
      </a>
    </div>
  );
}

export default Title;
