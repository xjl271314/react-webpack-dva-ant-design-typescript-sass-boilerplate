import * as React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './index.scss';
import api from '../../service'
import List from 'components/List'

function ListPage() {
    const [list, setList] = useState([]);
    const [loading, toggleLoading] = useState(true);

    const handleStatusChange = (status) => { toggleLoading(status) }
    //当react要渲染我们的组件时，它会先记住我们用到的副作用。
    //等react更新了DOM之后，它再依次执行我们定义的副作用函数。

    const initData = async (): Promise<any> => {
        // 发起请求并执行初始化操作
        api.getListInfo().then((res) => {
            console.log(res)
            if (res.code == 1) {
                setTimeout(() => {
                    setList(res.data)
                    handleStatusChange(false)
                }, 500)
            }
        })
    }

    // 执行初始化操作，需要注意的是，如果你只是想在渲染的时候初始化一次数据，那么第二个参数必须传空数组。
    useEffect(() => {
        initData();
    }, []);

    // useEffect怎么解绑一些副作用 传给useEffect的副作用函数返回一个新的函数即可
    // 这个新的函数将会在组件下一次重新渲染之后执行

    // 这种解绑的模式跟componentWillUnmount不一样。componentWillUnmount只会在组件被销毁前执行一次而已，
    // 而useEffect里的函数，每次组件渲染后都会执行一遍，包括副作用函数返回的这个清理函数也会重新执行一遍。

    // 怎么跳过一些不必要的副作用函数?

    // 我们只需要给useEffect传第二个参数即可。
    // 用第二个参数来告诉react只有当这个参数的值发生改变时，才执行我们传的副作用函数（第一个参数
    return (
        <List
            dataSource={list}
            loading={loading}
        />
    )
}

export default ListPage