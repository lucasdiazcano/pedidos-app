import React from 'react'
import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avatar.png'
import { PAGES } from '../../utils/config'
import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'


const header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt='logo' />
            <nav className={styles.nav}>
                <ul className={styles.links}>
                    {
                        PAGES?.map(({ name, url }) => (

                            <NavLink
                                to={url}
                                key={name}
                                activeClassName={styles.link_active} /* para darle color cuando el usuario está parado en esta ruta */
                            >
                                <li className={styles.link} >{name}</li>
                            </NavLink>

                        ))
                    }
                </ul>
            </nav>
            <span className={styles.user}>
                <img className={styles.avatar} src={Avatar} alt='avatar' height='40' width='50' /> <p className={styles.name} >El Viejo Jack</p>
            </span>
        </header>
    )
}

export default header
