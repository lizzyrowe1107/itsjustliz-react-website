import logo from './logo.svg';
import './App.css';
import TwitterBackground from './TwitterBackground.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">

          <div className="col-6 mt-5 img-description">
            <img src={logo} className="App-logo" alt="logo" /> 
            <span className="profile-description">

              I'm Liz, a Mechanical Engineer and <a className="youtube-link"href="https://www.youtube.com/channel/UCvUUPRqQxlSjXiJQsIU1HhA">YouTuber</a>
            </span>
            <h3 class="about-description mt-5">
              Explore my website to find out information on my book reviews, projects, and construction experience. 
            </h3>

          </div>

          <div className="col-lg-6">
            <div className="profile-picture">
              <img className="img-fluid rounded mt-5" src={TwitterBackground}></img>

            </div>
          </div>

        </div>
        
      </header>

      <main>

        

      </main>

      <footer>
        
        

      </footer>

        
        
    </div>
  );
}

export default App;
