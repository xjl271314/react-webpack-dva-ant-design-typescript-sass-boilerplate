import * as React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './index.scss';
import api from '../../service'
import List from 'components/List'

function AdvancedListPage() {
    const [list, setList] = useState([]);
    const [loading, toggleLoading] = useState(true);

    const handleStatusChange = (status) => { toggleLoading(status) }

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

    return (
        <List
            dataSource={list}
            loading={loading}
        />
    )
}

export default AdvancedListPage