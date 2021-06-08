import React, { useState } from 'react'
import styles from './login.module.scss'
import Input from '../../components/input/input'
import Logo from '../../assets/logo.png'
import Button from '../../components/button/button'

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")

    return (
        <div className={styles.login}>

            <div className={styles.left}>
                <img src={Logo} alt='log' width='100' height='50' />
                <p className={styles.subtitle}> Ingresa tu usuario para loguearte </p>
                <Input label='Usuario' value={user} onChange={( target ) => setUser(target.value)}/>
                <Input type='password' label='Contraseña' value={password} onChange={( target ) => setPassword(target.value)}/>
                <Button content={"enviar"}/>
            </div>

            <div className={styles.right}>                

            </div>

        </div>
    )
}

export default Login
