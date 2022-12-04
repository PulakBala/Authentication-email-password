import './App.css';
import {getAuth} from 'firebase/auth'
import app from './firebase/firebase.init';

const auth = getAuth(app);
const handleOnSubmit = (event) =>{
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password)
}
const handleEmailBlur = event =>{
  console.log(event.target.value);
}
const handlePassBlur = event =>{
  console.log(event.target.value)
}
function App() { 
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='email' />
        <br/>
        <input onBlur={handlePassBlur} type="password" name="password" id="" placeholder='password' />
        <br/>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
