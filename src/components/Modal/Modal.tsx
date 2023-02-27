	import styles from './Modal.module.scss';
	import 'react-toastify/dist/ReactToastify.css';
	import { useForm } from 'react-hook-form';
	import emailjs from 'emailjs-com';
	import {useRef, useState} from 'react';

	interface StateModal {
		stateModal: boolean;
	}

	interface IFormInputs {
		name: string;
		email: string;
		phone: string;
	 }

	const Modal = ({stateModal}:StateModal) => {
		const form = useRef<any>();
		const [submit, setSubmit] = useState(false);
		const [nameValue, setNameValue] = useState('');
		const [mailValue, setMailValue] = useState('');
		const [phoneValue, setPhoneValue] = useState('');
		

		const handleClick = () => {
			setSubmit(true);
		}
		const handleChangeName = (e:any) => {
			setNameValue(e.target.value);
		}
		const handleChangeMail = (e:any) => {
			setMailValue(e.target.value);
		}
		const handleChangePhone = (e:any) => {
			setPhoneValue(e.target.value);
		}

		const sendEmail = (e:any) => {
			e.preventDefault();
			
			emailjs.sendForm('service_zdsmpw7', 'template_rzc7gmj', form.current,'LHE3a_yC4ugMEtWYd')
			.then(res => {if (res && submit) {
				setNameValue('');
				setMailValue('');
				setPhoneValue('');
			}})
			.catch(err => {console.log(err)});
		}

		const {
		register,
		formState: { errors },
		} = useForm<IFormInputs>();
	
		const errorName = errors.name
		? { outline: '1px solid #EB5757' }
		: { border: ' none' };
		const errorPhone = errors.phone
		? { outline: '1px solid #EB5757' }
		: { border: ' none' };
		const errorEmail = errors.email
		? { outline: '1px solid #EB5757' }
		: { border: ' none' };

		const displayStyle = stateModal ? {"display" : "block"} : {"display" : "none"}; 

		 const modalElement = ( stateModal ? <div style={displayStyle} className={styles.wrapper}>
				<div className={styles.title}>
					Есть вопросы? Мы позвоним!
				</div>
				
				<form ref={form} className={styles.form} onSubmit={sendEmail}>
					<input
						style={errorName}
						className={styles.login}
						type='text'
						{...register('name', { required: true })}
						placeholder='Имя'
						value={nameValue}
						onChange={handleChangeName}
					/>
					<input
						style={errorEmail}
						className={styles.email}
						type='email'
						{...register('email', { required: true })}
						placeholder='Email'
						value={mailValue}
						onChange={handleChangeMail}
					/>
					<input
						style={errorPhone}
						className={styles.phone}
						type='phone'
						{...register('phone', { required: true })}
						placeholder='Телефон'
						value={phoneValue}
						onChange={handleChangePhone}
					/>
					{(errors.name || errors.email || errors.phone) && (
						<p className={styles.errorEnter}>Ошибка ввода</p>
					)}
					<button onClick={handleClick} className={styles.formBtn} type='submit'>
						Отправить
					</button>
				</form> 
			 </div> : null
		 )

		return (
			<>
				{modalElement}
			</>
		)
	}

	export default Modal;