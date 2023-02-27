import { Link } from 'react-router-dom';
import styles from './MenuList.module.scss';

const MenuList = () => {

	return (
		<>
			<menu className={styles.menuList}>
				<Link className={styles.menuItem} to='/'>О клинике</Link>
				<Link className={styles.menuItem} to='/services'>Услуги</Link>
				<Link className={styles.menuItem} to='/specialists'>Специалисты</Link>
				<Link className={styles.menuItem} to='/price'>Цены</Link>
				<Link className={styles.menuItem} to='/contact'>Контакты</Link>
			</menu>
		</>
	)
}

export default MenuList;