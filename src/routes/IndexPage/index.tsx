import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Link } from 'dva/router';
import * as styles from './index.scss';
import {
    Button
} from 'antd'

console.log(styles)
// 使用useEffect 代替生命周期钩子函数的componentDidMount
function Home() {
    // react规定我们必须把hooks写在函数的最外层，不能写在ifelse等条件语句当中，来确保hooks的执行顺序一致。
    const [count, setCount] = useState(0);
    const initData = async () => {
        // 发起请求并执行初始化操作

    }
    // 执行初始化操作，需要注意的是，如果你只是想在渲染的时候初始化一次数据，那么第二个参数必须传空数组。
    useEffect(() => {
        initData();
    }, []);
    return (
        <div>
            <p className={styles.title}>you clicked {count} 次</p>
            <Button type="primary" onClick={() => setCount(count + 1)}>点击我计数</Button>
        </div>
    )
}

export default Home;

