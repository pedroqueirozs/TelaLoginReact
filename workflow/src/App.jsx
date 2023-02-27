import logo from './assets/logo.svg';
import './global.css'


export function App(){
  return <div className="container">
    <header>
      <img src={logo} alt="Workflow" />
      <span>Merci d'entrer voss informations de connexion</span>
    </header>
    <form id='form'>
      <div className="inputContainer">
        <label htmlFor="e-mail">E-mail</label>
        <input required type="e-mail" name="email" id="email" placeholder="pedro@gmail.com"/>
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Mot de passe</label>
        <input minLength={8} type="password" name="password" id="password" placeholder="*********"/>
      </div>
      <a href="#" >Mot de passe oublié?</a>
      <button form='form' className="btn">Se connecter
        <img src="" alt="" />
      </button>
      <div className="footer">
        <p>Vous n'avez pas de compte?</p>
        <a href="#">Créer un compte</a>
      </div>
    </form>
  </div>
}