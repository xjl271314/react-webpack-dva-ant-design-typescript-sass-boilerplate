import * as React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './index.scss';
import api from '../../service'
import {
    Spin
} from 'antd'
import ListItem from 'components/ListItem'

interface LoadTypes{
    isLoading:boolean,
    toggleLoading:any
}

function ListPage(){
    // const { list,setList }:any = useState([])
    const { isLoading,toggleLoading } :any = useState(true)
    const handleStatusChange = (status)=>{toggleLoading(status)}

    const initData = async (): Promise<any> => {
        // 发起请求并执行初始化操作
        api.getListInfo().then((res) => {
            console.log(res)
        })
    }

    // 执行初始化操作，需要注意的是，如果你只是想在渲染的时候初始化一次数据，那么第二个参数必须传空数组。
    useEffect(() => {
        initData();
    }, []);

    return (
        <div>
            <Spin spinning={isLoading} />
        </div>
    )
}

export default ListPage