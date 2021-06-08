import React from 'react'
import PropTypes from 'prop-types'
import styles from './tag.module.scss'

const Tag = ({ content, onClick }) => {
    return (
        <p className={styles.tag} onClick={onClick} >
            {content}
        </p>
    )
}

export default Tag

Tag.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}