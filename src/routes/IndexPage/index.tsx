import * as React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './index.scss';
import api from '../../service'
import {
    Button
} from 'antd'

// 使用useEffect 代替生命周期钩子函数的componentDidMount
function Home() {
    // react规定我们必须把hooks写在函数的最外层，不能写在ifelse等条件语句当中，来确保hooks的执行顺序一致。
    const [count, setCount] = useState(0);
    return (
        <div>
            <p className={styles.title}>you clicked {count} 次</p>
            <Button type="primary" onClick={() => setCount(count + 1)}>点击我计数</Button>
        </div>
    )
}

export default Home;

