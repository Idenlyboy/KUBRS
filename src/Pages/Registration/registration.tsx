import { FC } from 'react';
import styles from './registration.module.scss';
import {useForm,SubmitHandler} from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

interface InFormRegistration {
	num_dover: string;
	name:string;
	lastname:string;
	num_room:string;
	email:string;
	password:string;
}
export const Registration: FC = () => {
	const {register,handleSubmit,formState:{errors}} = useForm<InFormRegistration>();
	const navigate=useNavigate();
	const submit:SubmitHandler<InFormRegistration> = (data) => {
		try {
			axios.post('https://sheet.best/api/sheets/59f5febc-4680-4f82-8a51-01908e824821',data).then((response) => {console.log('data save',response)})
			navigate('/login');
			alert('вы успешно зарегистрировались');
		} catch (error) {
			console.error(error);
		}
	}

	return(
		<div className={styles.registration_container}>
			<form className={styles.registration_form} onSubmit={handleSubmit(submit)}>
				<div className={styles.title}>Регистрация</div>
				<div className={styles.form_main}>
				<div className={styles.registration_input}>
						<input type="text" {...register('num_dover',{required:'Заполните поле',maxLength:{value:9,message:'Maximum name lenght - 50 characters'}})} className={`${errors.num_dover ? styles.input_error : styles.input}`}/>
						<label>Номер доверенности</label>
						{errors?.num_dover && <p className={styles.error}>{errors?.num_dover?.message}</p>}
				</div>
				<div className={styles.registration_input}>
						<input type="text" {...register('name',{required:'Заполните поле',maxLength:{value:18,message:'Maximum name lenght - 50 characters'}})} className={`${errors.name ? styles.input_error : styles.input}`}/>
						<label>Имя</label>
						{errors?.name && <p className={styles.error}>{errors?.name?.message}</p>}
				</div>
				<div className={styles.registration_input}>
						<input type="text" {...register('lastname',{required:'Заполните поле',maxLength:{value:18,message:'Maximum name lenght - 50 characters'}})} className={`${errors.lastname ? styles.input_error : styles.input}`}/>
						<label>Фамилия</label>
						{errors?.lastname && <p className={styles.error}>{errors?.lastname?.message}</p>}
				</div>
				<div className={styles.registration_input}>
						<input type="text" {...register('num_room',{required:'Заполните поле'})} className={`${errors.num_room ? styles.input_error : styles.input}`}/>
						<label>Номер комнаты</label>
						{errors?.num_room && <p className={styles.error}>{errors?.num_room?.message}</p>}
				</div>
				<div className={styles.registration_input}>
						<input type="text" {...register('email',{required:'Заполните поле'})} className={`${errors.email ? styles.input_error : styles.input}`}/>
						<label>Почта</label>
						{errors?.email && <p className={styles.error}>{errors?.email?.message}</p>}
				</div>
				<div className={styles.registration_input}>
						<input type="text" {...register('password',{required:'Заполните поле'})} className={`${errors.password ? styles.input_error : styles.input}`}/>
						<label>Пароль</label>
						{errors?.password && <p className={styles.error}>{errors?.password?.message}</p>}
				</div>
				</div>
				<button className={styles.form_btn}>Создать Аккаунт</button>
			</form>
		</div>
	)
}
