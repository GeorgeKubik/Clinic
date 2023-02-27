import styles from './About.module.scss';
import background from '../../assets/img/background.png';

const About = () => {

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.description}>
						<div>
							<div className={styles.title}>
								Многопрофильная клиника для детей и взрослых
							</div>
							<div className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti deserunt laborum eius 	aspernatur explicabo perferendis sequi harum pariatur, voluptatibus beatae porro odio molestias unde optio? Tempore, commodi quae. Voluptatibus, placeat?
							</div>
						</div>
					</div>
				</div> 
				<img className={styles.background} src={background} alt="bg" />
			</div>
		</>
	)
}
export default About;