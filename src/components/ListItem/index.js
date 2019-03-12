import * as React from 'react';
import * as styles from './index.scss'
export default function ListItem(props) {
    const { data } = props
    return(
        <div className={styles.itemRow}>
            <img src={data.icon} className={styles.icon}/>
            <div className={styles.info}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.desc}>{data.desc}</p>
            </div>
        </div> 
    )
}