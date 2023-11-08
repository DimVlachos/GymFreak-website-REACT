import '../index.css';
import logo from '../assets/logo.jpg';



function Header (){
    return(
        <header className="App-header">
            <img className= 'App-logo' src={logo} alt="logo"/> 
            <div><h2>GymFreak</h2> </div>
            <h1> Choose your Workout Plan</h1>
            <p> Unlimited Possibilities </p>
        </header>
    )
};
export default Header;