import Diplom from './Diplom'
import Program from './Program'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './Skills.module.css'

const Skills = () => {
	return (
		<div>
			<div className={style.header}>
				<h2>Skills</h2>
			</div>
			<div className={style.container}>
				<Diplom />
				<Program />
			</div>
		</div>
	)
}

export default Skills
