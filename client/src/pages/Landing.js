import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby tote bag franzen kombucha, thundercats synth bushwick
            crucifix jean shorts. Actually PBR&B leggings hammock +1 four dollar
            toast literally. Artisan occupy letterpress, praxis pok pok butcher
            migas freegan pour-over. Air plant migas blue bottle, tilde DIY
            lo-fi hoodie. Quinoa chartreuse man braid pour-over. Live-edge
            chillwave chartreuse iPhone gluten-free actually.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
