import React from 'react'
import { auth } from './firebase';
import './Login.css';
import RadioButtonCheckedIcon  from '@material-ui/icons/RadioButtonChecked';
import {auth ,provider } from './firebase'
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
   const [state, dispatch] =useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then ((result ) => {
            console.log(result);
             dispatch({
                 type: actionTypes.SET_USER,
                 user :result.user,
             });
        })
         .catch((error) => {
            alert(error.message);
        })
      }       
    return (
        <div className="login">
            <div className="login__container"></div>
            <img src ="https://www.google.com/search?q=login+page+images&rlz=1C1CHWL_enIN918IN918&sxsrf=ALeKk02b04wItTpCMK54vJz4eR8V2cbXHg:1600449490083&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjDjNn6mvPrAhXJzjgGHdARDocQ_AUoAXoECA0QAw&biw=1366&bih=625"
             alt=""/>
             <h1>sign in to slack-clone HQ</h1>
             <p>slack-clone.google.com</p>
             <RadioButtonCheckedIcon onClick={signIn}>Sign in with Google</RadioButtonCheckedIcon>
            
        </div>
    )
    }

export default Login
