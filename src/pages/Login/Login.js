import { useState, useRef } from 'react'
import './Login.css'

function Login(){

    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleClickFocus = (e) => {
        if(e.target.children[1].classList.contains('username')){
            e.target.classList.add('active')
            e.target.children[0].classList.add('active')
            e.target.children[1].focus()

            passwordRef.current.classList.remove('active')
            passwordRef.current.children[0].classList.remove('active')
            passwordRef.current.children[1].blur()
        }
        else{
            e.target.classList.add('active')
            e.target.children[0].classList.add('active')
            e.target.children[1].focus()

            usernameRef.current.classList.remove('active')
            usernameRef.current.children[0].classList.remove('active')
            usernameRef.current.children[1].blur()
        }
        
    }

    return ( 
        <div className="login">
            <div className="login__form">
                <img src="./assets/imgs/logo.png" alt="" />
                <div className="login__form__content">
                    <h1>Login</h1>
                    <div 
                        className="container-login-input"
                        onClick={handleClickFocus}
                        ref={usernameRef} 
                    >
                        <i className="fa fa-user" />
                        <input 
                            type="text" 
                            placeholder="Username"  
                            className="username" 
                        />
                    </div>
                    <div 
                        className="container-login-input"
                        onClick={handleClickFocus}
                        ref={passwordRef}
                    >
                        <i class="fa-solid fa-lock"></i>
                        <input 
                            type="text" 
                            placeholder="Password"    
                            className="password"
                        />
                    </div>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login