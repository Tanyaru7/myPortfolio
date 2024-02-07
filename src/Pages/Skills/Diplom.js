import { useState } from 'react'
import { data } from './DiplomData'
import style from './Diplom.module.css'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

const Diplom = () => {
	const [item, setItem] = useState(0)
	const { id, image } = data[item]

	const nextImage = () => {
		setItem((item) => {
			item++
			if (item > data.length - 1) {
				item = 0
			}

			return item
		})
	}

	const previosImage = () => {
		setItem((item) => {
			item--
			if (item < 0) {
				return data.length - 1
			}

			return item
		})
	}

	return (
		<div className={style.container}>
			<img src={image} height='400px' alt={`Diploma ${id}`} />
			<GrCaretPrevious
				className={style.btnPrev}
				onClick={previosImage}
			></GrCaretPrevious>
			<GrCaretNext className={style.btnNext} onClick={nextImage}></GrCaretNext>
		</div>
	)
}

export default Diplom
