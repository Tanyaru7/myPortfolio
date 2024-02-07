import './App.css'
import MyNavbar from './Components/Navbar/Navbar'
import MyFooter from './Components/Footer/Footer'
import MyProject from './Pages/Project/Project'
import MyHome from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactForm from './Pages/Form/Form'

function App() {
	return (
		<div>
			<Router>
				<MyNavbar />
				<Routes>
					<Route path='/' element={<MyHome />} />
					<Route path='/portfolio' element={<MyProject />} />
					<Route path='/contact' element={<ContactForm />} />
				</Routes>
				<MyFooter />
			</Router>
		</div>
	)
}

export default App
