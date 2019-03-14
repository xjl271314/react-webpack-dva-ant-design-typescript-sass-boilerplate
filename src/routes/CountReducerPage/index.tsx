import * as React from 'react';
import { useState, useEffect, useReducer } from 'react';
import * as styles from './index.scss';
import {
    Button
} from 'antd'

const initialState = {
    count: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
    }
}
//useReducer:接受类型为(state，action) => newState的reducer，并返回与dispatch方法配对的当前状态。 

//useReducer:接受可选的第三个参数initialAction。
//如果提供，则在初始渲染期间应用初始操作。这对于计算包含通过props传递的值的初始状态非常有用：
function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className={styles.conatiner}>
            <p>Count: {state.count}</p>

            <Button className={styles.button} type="primary" onClick={() => dispatch({ type: 'increment' })}>+</Button>
            <Button disabled={state.count < 1} className={styles.button} type="primary" onClick={() => dispatch({ type: 'decrement' })}>-</Button>
            <Button className={styles.button} type="danger" onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </Button>
        </div>
    );
}

export default Counter