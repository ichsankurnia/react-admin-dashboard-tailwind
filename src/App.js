import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

const App = () => {
	return (
		<div className='font-poppins'>
			<Router>
				<Routes>
					<Route path='/sign-in' element={<Login />} />
					<Route path='/dashboard/*' element={<Dashboard />} />
					<Route path='*' element={<Navigate replace to='/dashboard' />} />
					{/* <Route path='*' element={<Navigate replace to='/' />} /> */}
				</Routes>
			</Router>
		</div>
	)
}

export default App