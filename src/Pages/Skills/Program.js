import style from './Skills.module.css'

const Program = () => {
	return (
		<div className={style.test}>
			<ul>
				<li>
					<h3>Programming Languages:</h3>
					<p>Javascript</p>
					<img src='./javascript.png' alt='icons JS' />
				</li>
				<br />
				<li>
					<h3>Web Technologies:</h3>
					<p>
						HTML5, CSS3, React.js, Node.js, Redux.js, Bootstrap-5, Figma, Github
					</p>
					<img src='./html.png' alt='icons html' />
					<img src='./css.png' alt='icons CSS' />
					<img src='./react.png' alt='icons react' />
					<img src='./node.png' alt='icons node js' />
					<img src='./redux.png' alt='icons redux' />
					<img src='./bootstrap.png' alt='icons bootstrap' />
					<img src='./figma.png' alt='icons figma' />
					<img src='./github.png' alt='icons github' />
				</li>
			</ul>
		</div>
	)
}

export default Program
