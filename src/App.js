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
    
    <div className="App backcolor">
      <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo">Name</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Social Media</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">hello</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">info</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">other stuff</a>
                </li>
            </ul>
            <div class="format">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          //href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body class ="backcolor">
        <div class="embed-responsive embed-responsive-16by9">
          
          <h1 class = "center App-link">How are you doing?</h1>
          <div class="center App-link"> Hello</div>
            <input class="" type="text" name="hru"
	          placeholder="name"/>
          <iframe
            class="embed-responsive-item"
            src=""
            frameborder="0"
            allowfullscreen>
          </iframe>
        </div>
      </body> 
    </div>
  );
}

export default App;
