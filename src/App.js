import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>bye</h1>
      <header className="App-header">
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
      </header>
      <body>
      <nav class="navbar navbar-default navbar-fixed-top menuCustom">
		<div class="container">
			<!-- this part of the menu will stay visible -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#navbar"
				aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand logo" href="#">
					<!-- add image icon here-->

				</a>
			</div>
			<!-- this part of the menu will collapse -->
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li><a href="" class="options"></a></li>
					<li><a href="" class="options"></a></li>
					<li><a href="" class="options"></a></li>
					<li><a href="" class="options"></a></li>
				</ul>
			</div>
		</div>
	</nav>

      </body>
    </div>
  );
}

export default App;
