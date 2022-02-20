import React, { ReactNode } from 'react';
import styles from './Title.module.scss';

type TitleProps = {
  children: ReactNode,
}

function Title({ children }: TitleProps) {
  return (
    <div className={styles.base}>
      {children}
    </div>
  );
}

export default Title;
