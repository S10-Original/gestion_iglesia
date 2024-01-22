import '../css/cssPrincipal.css';
import Logo from '../img/logo-blanco-iglesia.png';

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
          <input type='submit' name=''/>
          <a href='#'>OLVIDO DE CONTRASEÑA</a>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
