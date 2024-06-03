import {Outlet} from 'react-router-dom';
import { FC } from 'react';
import styles from './layout.module.scss';

export const Layout:FC = () => {
	return (
		<div className={styles.layout_container}>
			<div className={styles.bg}></div>
      <div className={`${styles.bg} ${styles.bg2}`}></div>
      <div className={`${styles.bg} ${styles.bg3}`}></div>
			<Outlet />
		</div>
	);
}