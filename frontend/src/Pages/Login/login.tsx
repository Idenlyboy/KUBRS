import { FC } from 'react';
import styles from './login.module.scss';
import {useForm,SubmitHandler} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface InLoginForm {
	num_dover: string;
	password: string;
}
interface InFormRegistration {
	num_dover: string;
	name:string;
	lastname:string;
	num_room:string;
	email:string;
	password:string;
}

export const Login:FC = () => {
	const navigate = useNavigate();

	const {register,handleSubmit,formState:{errors}} = useForm<InLoginForm>();

	const submit:SubmitHandler<InLoginForm> =async (data)=>{
		try {
			axios.get<InFormRegistration[]>('https://sheet.best/api/sheets/59f5febc-4680-4f82-8a51-01908e824821').then(response=>{
				const userData = response.data;
        const userName = data.num_dover // Replace with the desired user name
        const user = userData.find(user => user.num_dover === userName);
				if(user?.password === data.password){
					localStorage.setItem('user_data',JSON.stringify(user));
					navigate('/personalArea');
				}else{
					alert('Неверный пароль')
				}
			})
		} catch (error) {
			console.error(error);
		}
	}


	return(
		<div className={styles.login_container}>
			<form className={styles.form_container} onSubmit={handleSubmit(submit)}>
				<div className={styles.title}>Вход</div>
				<div className={styles.form_main}>
					<div className={styles.registration_input}>
						<input type="text" {...register('num_dover',{required:'Заполните поле'})} className={`${errors.num_dover ? styles.input_error : styles.input}`}/>
						<label>Номер договора</label>
						{errors?.num_dover && <p className={styles.error}>{errors?.num_dover?.message}</p>}
					</div>
					<div className={styles.registration_input}>
						<input type="text" {...register('password',{required:'Заполните поле'})} className={`${errors.password ? styles.input_error : styles.input}`}/>
						<label>Пароль</label>
						{errors?.password && <p className={styles.error}>{errors?.password?.message}</p>}
					</div>
				</div>
				<button className={styles.login_btn}>Войти</button>
			</form>
		</div>
	)
}