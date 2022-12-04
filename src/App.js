import './App.css';
import {getAuth} from 'firebase/auth'
import app from './firebase/firebase.init';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';

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
    <div className="">
       <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
