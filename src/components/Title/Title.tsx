import React, { ReactNode } from 'react';
import styles from './Title.module.scss';

type TitleProps = {
  children: ReactNode,
}

function Title({ children }: TitleProps) {
  return (
    <a href="/" className={styles.base}>
      {children}
    </a>
  );
}

export default Title;
