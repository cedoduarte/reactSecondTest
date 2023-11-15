import './App.css';
import { Testimony } from './components/Testimony.js';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimony
          name='Emma Bostian'
          country='Suecia'
          image='emma'
          imageAlt='Emma picture'
          job='Ingeniero de Software'
          company='Spotify'
          testimony='Siempre me ha gustado programar con JavaScript'
        />
        <Testimony
          name='Shawn Wang'
          country='Singapur'
          image='shawn'
          imageAlt='Shawn picture'
          job='Ingeniero de Software'
          company='Amazon'
          testimony='Siempre me ha gustado trabajar con C#'
        />
        <Testimony
          name='Sarah Chima'
          country='Nigeria'
          image='sarah'
          imageAlt='Sarah picture'
          job='Ingeniero de Software'
          company='ChatDesk'
          testimony='Siempre me ha gustado trabajar con PHP'
        />
      </div>
    </div>
  );
}

export default App;
