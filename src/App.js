import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import SocialMedia from './pages/SocialMedia'

function App() {
  return (
	<Router>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/social-media' element={<SocialMedia />} />
		</Routes>
	</Router>
  );
}

export default App;
