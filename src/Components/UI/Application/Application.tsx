import { FC, useEffect,useState } from 'react'
import styles from './Application.module.scss'
import axios from 'axios'

interface IApplication {
	num_dover: string
	date: string
	status: string
	time: string
	title_record: string
}

export const Application: FC<IApplication> = ({
	num_dover,
	date,
	status,
	time,
	title_record,
}) => {
	const [title_application, setTitleApplication] = useState<string>('')
	
	useEffect(() => {
		switch (title_record) {
			case 'Стирка':
				return setTitleApplication('wash')
			case 'Сантехник':
				return setTitleApplication('plumber');
			case 'Электрик':
				return setTitleApplication('electrician');
			case 'Плотник':
				return setTitleApplication('carpenter');
			default:
				break
		}
	}, [title_record])

	const handleDeleteApplication = () => {
		try {
			axios.delete(
				`https://sheet.best/api/sheets/662fb1f9-ba97-4d6c-9ec5-e188d69bfc95/tabs/${title_application}/num_dover/${num_dover}`
			)
			location.reload();
			alert('Заявка удалена')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className={styles.application_container}>
			<p>{title_record}</p>
			<p>{num_dover}</p>
			<p>
				{date}/{time}
			</p>
			<p>{status}</p>
			<button className={styles.button} onClick={handleDeleteApplication}>Удалить</button>
		</div>
	)
}
