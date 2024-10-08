import {Link} from 'react-router-dom'

function Home() {
    return (
      <div className="App backcolor">
        <header class="header">
          <nav class="navbar">
              <a href="#" class="nav-logo">Name</a>
              <ul class="nav-menu">
                  <li class="nav-item">
                    <Link to='/social-media'>Social Media</Link>
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
  
  export default Home;