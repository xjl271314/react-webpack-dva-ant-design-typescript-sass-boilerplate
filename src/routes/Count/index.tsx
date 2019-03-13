import React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './index.scss';
import {
    Button
} from 'antd'

function Count() {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.container}>
            <p className={styles.title}>you clicked {count} 次</p>
            <Button className={styles.button1} type="primary" onClick={() => setCount(count + 1)}>点击我计数</Button>
            <Button type="danger" onClick={() => setCount(0)}>重新计数</Button>
        </div>
    )
}

export default Count;

