import {FC,useState,useEffect} from 'react';
import styles from './wash.module.scss';
import { TimeSelector } from '../SelectTime/select_time';
import { DataSelector } from '../SelectData/select_data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
interface InOption {
  value: string;
  label: string;
}
interface InFormRegistration{
	num_dover:string;
	name:string;
	lastname:string;
	num_room:string;
	email:string;
	password:string;
	old_password:string;
}
export const Wash:FC = () => {
	const[time_value, setValueTime] = useState<InOption>();
	const [user_data,set_userData]=useState<InFormRegistration>();
	const[data_value, setValueData] = useState<InOption>();
	const navigate =useNavigate();
	useEffect(()=>{
		const storedUser = localStorage.getItem('user_data');
		set_userData(storedUser ? JSON.parse(storedUser) : null)
	},[])
	const handleTimeValueChange = (value: InOption) => {
		console.log(value);
		setValueTime(value);
	};
	const handleDataValueChange = (value: InOption) => {
		console.log(value);
		setValueData(value);
	};

	const submit = async () =>{
		const data = {
			time: time_value?.value,
			date: data_value?.value,
			name:user_data?.name,
			lastname:user_data?.lastname,
			num_dover:user_data?.num_dover,
			num_room:user_data?.num_room,
		}
		console.log(data);
		try {
			await axios.post(`https://sheet.best/api/sheets/662fb1f9-ba97-4d6c-9ec5-e188d69bfc95`, data)
			alert('Вы записались на стирку в ' + data.time + ' ' + data.date);
			navigate('/personalArea');
		} catch (error) {
			console.error(error);
		}

	}	



	return (
		<div className={styles.wash_container}>
			<div className={styles.selector_box}>
				<span>Вермя стирки</span>
				<TimeSelector onChange={handleTimeValueChange}/>
			</div>
			<div className={styles.selector_box}>
				<span>Дата стирки</span>
				<DataSelector onChange={handleDataValueChange}/>
			</div>
			<button className={styles.btn} onClick={submit}>
				Записаться
			</button>
		</div>
	);
}