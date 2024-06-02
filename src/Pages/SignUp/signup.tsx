import { FC, useState } from 'react'
import styles from './signuo.module.scss'
import Select from 'react-select'
import { Wash } from '../../Components/UI/wash/wash'
import { Plumber } from '../../Components/UI/plumber/plumber'
import { Electrician } from '../../Components/UI/electricain/electricain'
import { Carpenter } from '../../Components/UI/carpenter/carpenter'
import { Link } from 'react-router-dom'
import './select.scss'
type Option = {
	value: string
	label: string
}

const options: Option[] = [
	{
		value: 'стирка',
		label: 'Стирка',
	},
	{
		value: 'плотник',
		label: 'Плотник',
	},
	{
		value: 'электрик',
		label: 'Электрик',
	},
	{
		value: 'сантехник',
		label: 'Сантехник',
	},
]
export const SignUp: FC = () => {
	const [valueOption, setValueOption] = useState('')
	const handleChangeOption = (e:Option) => {
		setValueOption(e.value)
	}

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_content}>
				<h1 className={styles.title}>Записаться <Link to={'/home'} className={styles.home_link}>Home</Link></h1>
				<Select
					options={options}
					placeholder='Выбрать услугу'
					classNamePrefix='select'
					onChange={handleChangeOption}
				/>
				<div className={styles.option_content}>
					{(() => {
						switch (valueOption) {
							case 'стирка':
								return <div><Wash/></div>
							case 'плотник':
								return <div><Carpenter/></div>
							case 'электрик':
								return <div><Electrician/></div>
							case 'сантехник':
								return <div><Plumber/></div>
						}
					})()}
				</div>
			</div>
		</div>
	)
}
