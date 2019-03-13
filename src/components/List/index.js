import * as React from 'react';
import * as styles from './index.scss'
import ListItem from 'components/ListItem'
import LoadingSpin from 'components/LoadingSpin'
import Types from 'util/types'

export default function List(props) {
    const { dataSource, loading } = props
    return Types.isLenArray(dataSource) && !loading?
        dataSource.map((item,index) =>
            <ListItem
                key={item.key+index}
                data={item}
            />) : <LoadingSpin />
}