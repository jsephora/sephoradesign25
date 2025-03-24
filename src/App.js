import './App.css'
import background from './Assets/dark-triangles.png'
import logo from './Assets/sdLogo-portrait.png'

function App() {
  return (
    <div
      className='App'
      style={{
        backgroundImage: `url(${background})`,
        height: '100vh',
        // marginTop: '0px',
      }}
    >
      <div className='centerContent'>
        <img src={logo} alt='sephora design logo'
        style={{width: '500'}}/>
        {/* <h1
          style={{
            color: 'white',
          }}
        >
          Sephora Design is under construction
        </h1> */}
      </div>
    </div>
  )
}

export default App
