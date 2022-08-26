import Temperature from './Temperature';
import './App.css';

function App() {
      return (
      <div className="App">
        <div className="weather-app">
          <h1><strong>Weather</strong> </h1>

          <br />
          <form id="search-form">
            <div class="container d-flex">
            <div className="row">
              <div className="col">
                <input
                  type="search"
                  placeholder="Type a city"
                  className="form-space"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-80"
                />
              </div>
            </div>
            </div>
          </form>
          <hr />
          <Temperature />
          <br />
          <div className="forecast-temp" id="forecast"></div>
  
          <hr />
          <small>
            <a
              href="https://github.com/Nnebuife/terminal-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Nne Buife
          </small>
        </div>
      </div>
    );
  }

export default App;
