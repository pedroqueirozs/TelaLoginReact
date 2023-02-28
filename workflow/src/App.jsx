
import logo from './assets/logo.svg';
import './global.css'
import { useForm } from "react-hook-form";

export function App(){
  const {register, handleSubmit, watch, formState: { errors } } = useForm();
    function createUsers (data){
      console.log(data);
    } 

  return <div className="container">
    <header>
      <img src={logo} alt="Workflow" />
      <span>Merci d'entrer voss informations de connexion</span>
    </header>
    <form onSubmit={handleSubmit(createUsers)} id='form'>
      <div className="inputContainer">
        <label htmlFor="e-mail">E-mail</label>
        <input  type="email" name="email" id="email" placeholder="pedro@gmail.com"{...register("email",{required:true})}/>
        {errors.email && <span>Insira seu e-mail < span className='obrigatorio'>*</span></span>}
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Mot de passe</label>
        <input minLength={8} type="password" name="password" id="password" placeholder="*********"{...register("password",{required:true})}/>
        {errors.password && <span>O campo de senha é obrigatório < span className='obrigatorio'>*</span></span>}
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


