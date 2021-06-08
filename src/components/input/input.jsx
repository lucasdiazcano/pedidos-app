import React from 'react'
import styles from './input.module.scss'
import PropTypes from 'prop-types'

const Input = ({ label, type, value, onChange, placeholder }) => {
    return (
        <label className={styles.label}>
            {label}
            <input className={styles.input}type={type} value={value} onChange={onChange} placeholder={placeholder} />

        </label>
    )
}
export default Input

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["text", "number", "password"]),
    label: PropTypes.string.isRequired
}