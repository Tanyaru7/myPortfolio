import React from 'react'
import './Footer.css'

const MyFooter = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__container'>
					<div className='copyright'>
						<p>© 2024 Tetiana Pasichnyk</p>
					</div>
					<ul className='social'>
						<li className='social__item'>
							<a href='https://www.instagram.com/'>
								<img src='./instagram.png' alt='link' />
							</a>
							<a href='https://ru.linkedin.com/'>
								<img src='./linkedin.png' alt='link' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default MyFooter
