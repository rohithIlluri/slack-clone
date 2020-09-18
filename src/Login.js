import React from 'react'
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__container"></div>
            <img src ="https://www.google.com/search?q=login+page+images&rlz=1C1CHWL_enIN918IN918&sxsrf=ALeKk02b04wItTpCMK54vJz4eR8V2cbXHg:1600449490083&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjDjNn6mvPrAhXJzjgGHdARDocQ_AUoAXoECA0QAw&biw=1366&bih=625"
             alt=""/>
             <h1>sign in to slack-clone HQ</h1>
             <p>slack-clone.google.com</p>
             <button>Sign in with Google</button>
            
        </div>
    )
}

export default Login
