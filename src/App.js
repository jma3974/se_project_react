// import logo from "./images/logo.svg";
import "./App.css";


function App() {
  return (
    <div>
      <header className='header'>
        <div className='header__logoDate'>
          <div><img src='/images/logo.svg' alt='WTWR' /></div>
          <div>Date</div>
        </div>
        <div className='header__buttonNameAvatar'>
          <div><button type='text'>Add clothing</button></div>
          <div>Name</div>
          <div><img src='/images/avatar.svg' /></div>
        </div>
       </header>
       <body>
       <div className='tempWeather'>
          <div>TEMPERATURE</div>
          <div>WEATHER SPRITE</div>
        </div>
       </body>
    </div>

  );
}

export default App;
