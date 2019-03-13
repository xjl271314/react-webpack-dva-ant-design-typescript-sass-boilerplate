import * as React from 'react';
import * as styles from './index.scss'
import {Spin} from 'antd'

export default function LoadingSpin() {
    return(
        <div className={styles.loadingRow}>
            <Spin className={styles.spin}/>
            <p className={styles.spinText}>玩命加载中...!</p>
        </div>
    )
}