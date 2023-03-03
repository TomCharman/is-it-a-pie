import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  return (
    <Link className={styles.invite} to="/round/1">Let us begin</Link>
  );
}

export default Home;
