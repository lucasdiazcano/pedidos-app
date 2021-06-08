import React, { useState } from 'react'
import styles from './orders.module.scss'
import Page from '../../components/page/Page'
import Input from '../../components/input/input'
import Tag from '../../components/tag/tag'

const Orders = () => {
    const [search, setSearch] = useState("")

    return (
        <Page className={styles.orders}>

            <div className={styles.body} >
                <p className={styles.title} >Items para agregar</p>
                <Input 
                value={search}
                onChange={({ target }) => setSearch(target.value)}
                placeholder="Buscar"
                />
                <div className={styles.tags}>
                    <Tag/>
                </div>
            </div>

            <aside className={styles.aside} >
                <p className={styles.title} >Orden actual</p>
            </aside>

        </Page>
    )
}

export default Orders
