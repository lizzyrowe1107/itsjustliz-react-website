import logo from './logo.svg';
import './App.css';
import TwitterBackground from './TwitterBackground.png';
import Skills from './Skills.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">

          <div className="col-lg-6 mt-5 img-description">
            <img src={logo} className="App-logo" alt="logo" /> 
            <span className="profile-description">

              I'm Liz, a Mechanical Engineer and <a className="youtube-link"href="https://www.youtube.com/channel/UCvUUPRqQxlSjXiJQsIU1HhA">YouTuber</a>
            </span>
            

          </div>

          <div className="col-lg-6">
            <div className="profile-picture">
              <img className="img-fluid rounded mt-5" alt="liz-profile" src={TwitterBackground}></img>

            </div>
          </div>

        </div>
        
      </header>

      <main>

        <Skills />

      </main>

      <footer>
        
        

      </footer>

        
        
    </div>
  );
}

export default App;
