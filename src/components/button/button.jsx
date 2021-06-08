import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.scss'

const Button = ({ content }) => {
    return (
        <button className={styles.button}>{content}</button>
    )
}

export default Button

Button.propTypes = {
    content: PropTypes.string.isRequired,
}