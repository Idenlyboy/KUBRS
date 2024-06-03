import {FC,useState,useEffect,useCallback} from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Application } from '../../Components/UI/Application/Application';
interface InDataRecord{
	num_dover:string;
	date:string;
	status:string;
	time:string;
	title_record:string;
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
export const Home:FC = () => {
	const [active,setActive] = useState(false);
	const [user_data,set_userData]=useState<InFormRegistration>();
	const [application_mass, SetApplicationMass] = useState<InDataRecord[]>([]);
	const handleActiveRecord = () => {
		setActive(!active);
	}
	useEffect(()=>{
		const storedUser = localStorage.getItem('user_data');
		set_userData(storedUser ? JSON.parse(storedUser) : null)
	},[])

	const fetchData = useCallback(async () => {
		try {
			const response1 = await axios.get<InDataRecord[]>('https://sheet.best/api/sheets/662fb1f9-ba97-4d6c-9ec5-e188d69bfc95');
			const response2 = await axios.get<InDataRecord[]>('https://sheet.best/api/sheets/662fb1f9-ba97-4d6c-9ec5-e188d69bfc95/tabs/plumber');
			const response3 = await axios.get<InDataRecord[]>('https://sheet.best/api/sheets/662fb1f9-ba97-4d6c-9ec5-e188d69bfc95/tabs/electrician');
			const response4 = await axios.get<InDataRecord[]>('https://sheet.best/api/sheets/662fb1f9-ba97-4d6c-9ec5-e188d69bfc95/tabs/carpenter');
	
			const userData1 = response1.data;
			const userData2 = response2.data;
			const userData3 = response3.data;
			const userData4 = response4.data;
	
			const user_num_dover = user_data?.num_dover;
	
			const application1 = userData1.find(user => user.num_dover === user_num_dover);
			const application2 = userData2.find(user => user.num_dover === user_num_dover);
			const application3 = userData3.find(user => user.num_dover === user_num_dover);
			const application4 = userData4.find(user => user.num_dover === user_num_dover);
	
			const applications = [
				application1 && { ...application1, title_record: 'Стирка', status: 'в процессе' },
				application2 && { ...application2, title_record: 'Сантехник', status: 'в процессе' },
				application3 && { ...application3, title_record: 'Электрик', status: 'в процессе' },
				application4 && { ...application4, title_record: 'Плотник', status: 'в процессе' },
			].filter(Boolean) as InDataRecord[];
	
			SetApplicationMass(prevState => [...prevState, ...applications]);
		} catch (error) {
			console.error(error);
		}
	}, [user_data?.num_dover]);



	useEffect(() => {
		if (user_data?.num_dover) {
      fetchData();
    }

	}, [fetchData,user_data?.num_dover]);



	return (
		<div className={styles.home_container}>
			<div className={`${styles.home_content} ${active ? styles.active : ''}`}>
				<h2 className={styles.title}>Меню <Link to={'/home'} className={styles.home_link}>Home</Link></h2>
				<div className={styles.home_header}>
						<Link to={'/personalArea'} className={styles.home_button_lk}>
							Личный кабинет
						</Link>
						<Link to={'/signup_for_service'} className={styles.home_button_lk}>
							Записаться
						</Link>
						<button className={styles.home_button_lk} onClick={handleActiveRecord}>
							Активные записи
						</button>
				</div>
			</div>
			<div className={`${styles.signup_box} ${active ? styles.active : ''}`}>
					<h2 className={styles.title}>Активные записи <Link to={'/home'} className={styles.home_link}>Home</Link></h2>
					<div className={styles.application_content}>
						{application_mass.map((item) => (
							<>
								<Application num_dover={item.num_dover} date={item.date} status={item.status} time={item.time} title_record={item.title_record}/>
							</>
						))}
					</div>
			</div>
		</div>	
	)
}