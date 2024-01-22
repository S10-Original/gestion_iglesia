import { NavLink } from 'react-router-dom';
import '../css/cssPrincipal.css';
import Logo from '../img/logo-blanco-iglesia.png';
// import Principal from './Principal';

function Login() {
  return (
    <div className="App">
      <div className='ContenedorLogin'>
        <div className='ContenedorIzquierda'>
          <img className='LogoLogin' src={Logo} alt='logo'/>
        </div>
        <div className='ContenedorDerecha'>
          <p className='TituloLogin'>INICIAR SESIÓN</p>
          <p>USUARIO</p>
          <input type='text' name=''/>
          <p>CONTRASEÑA</p>
          <input type='password' name=''/>
          <button type='submit' onClick={<NavLink to="/Principal"></NavLink>}>INGRESAR</button>
          <a href='/Principal'>OLVIDO DE CONTRASEÑA</a>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
