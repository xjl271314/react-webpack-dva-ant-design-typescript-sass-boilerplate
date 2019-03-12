import React,{ Component } from 'react';
import { connect } from 'dva';

type IindexProps = {
    num:number;
    dispatch:any;
}
//有状态
class Count extends Component<IindexProps,any>{
    constructor(props){
        super(props)
    }
    render(){
        const { num,dispatch } = this.props;
        return(
            <div>
                <div> {num} </div>
                <button onClick={()=>dispatch({type:'count/add'})}>添加</button>
                <button onClick={()=>dispatch({type:'count/reduce'})}>减少</button>
            </div>
        );
    }
}

function mapState(state) {
    return { num: state.count.num };
  }
  
  export default connect(mapState)(Count);