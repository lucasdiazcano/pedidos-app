import { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './Page.module.scss'
import Header from '../header/header'

const Page = ({ children }) => {
    return (
        <Fragment className={styles.page}>
            <Header/>
            <main>{children}</main>
        </Fragment>
    )
}

export default Page


Page.propTypes = {
    children: PropTypes.node.isRequired
}