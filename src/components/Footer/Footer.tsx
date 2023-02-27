import styles from './Footer.module.scss';
import logo  from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { ReactComponent as WhatsApp } from '../../assets/img/whatsapp.svg';
import { ReactComponent as Instagram } from '../../assets/img/instagram.svg';
import { ReactComponent as Telegram } from '../../assets/img/telegram.svg';
import MenuList from '../MenuList/index';

const Footer = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.block}>
						<Link to='/' className={styles.logo}><img src={logo} alt="logo" /></Link>
						<div className={styles.menu}><MenuList/></div>
						<div className={styles.social}>
							<WhatsApp className={styles.socialItem}/>
							<Instagram className={styles.socialItem}/>
							<Telegram className={styles.socialItem}/>
						</div>	
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer;