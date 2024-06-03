import { FC, useEffect, useState } from 'react';
import styles from './personal_area.module.scss';
import {useForm,SubmitHandler} from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
interface InFormRegistration{
	num_dover:string;
	name:string;
	lastname:string;
	num_room:string;
	email:string;
	password:string;
	old_password:string;
}
export const PersonalArea:FC = () =>{
	const [user_data,set_userData]=useState<InFormRegistration>();
	const [changePassword,set_changePassword] = useState(false);
	const {register,handleSubmit,formState:{errors}} = useForm<InFormRegistration>();

	useEffect(()=>{
		const storedUser = localStorage.getItem('user_data');
		set_userData(storedUser ? JSON.parse(storedUser) : null)
	},[])

	const handleChangePassword = () => {
		set_changePassword(!changePassword)
	}

	const submit:SubmitHandler<InFormRegistration> =async (data)=>{
		const new_data = {
			password:data.password,
		}
		try {
			axios.patch(`https://sheet.best/api/sheets/59f5febc-4680-4f82-8a51-01908e824821/num_dover/${user_data?.num_dover}`,new_data)
			set_changePassword(!changePassword)
			alert('Пароль успешно изменен');
		} catch (error) {
			console.error(error);
		}
	}


	return(
		<div className={styles.personal_area_container}>
			<div className={`${styles.personalArea_content} ${changePassword?styles.no_active:''}`}>
				<h1 className={styles.title}>Личный кабинет<Link to={'/home'} className={styles.home_link}>Home</Link></h1>
				<span>Имя: <p>{user_data?.name}</p></span>
				<span>Фамилия: <p>{user_data?.lastname}</p></span>
				<span>Номер комнаты: <p>{user_data?.num_dover}</p></span>
				<span>Почта: <p>{user_data?.email}</p></span>
				<button className={styles.lk_button} onClick={handleChangePassword} type='button'>Изменить пароль</button>
			</div>
			<div className={`${styles.changePassword_content} ${changePassword?styles.active:''}`}>
				<form onSubmit={handleSubmit(submit)} className={styles.changePassword_form}>
					<h1 className={styles.title}>Смена пароля</h1>
					<div className={styles.registration_input}>
						<input type="text" {...register('password',{required:'Заполните поле'})} className={`${errors.password ? styles.input_error : styles.input}`}/>
						<label>Новый пароль</label>
						{errors?.password && <p className={styles.error}>{errors?.password?.message}</p>}
					</div>
					<div className={styles.registration_input}>
						<input type="text" {...register('old_password',{required:'Заполните поле'})} className={`${errors.old_password ? styles.input_error : styles.input}`}/>
						<label>Старый пароль</label>
						{errors?.old_password && <p className={styles.error}>{errors?.old_password?.message}</p>}
					</div>
					<button className={styles.lk_button} type='submit'>Изменить пароль</button>
				</form>
			</div>
		</div>
	)
}