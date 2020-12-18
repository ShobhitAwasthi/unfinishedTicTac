import React from 'react';
import Box from './Box.js';

class WholeBox extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }
    render(){
        this.values=this.props.values;

    return (
        <>
        {
            this.values.map((row,i)=>
               <>
                {row.map((col,j)=>{
                 return <Box boxValue={col} row={i} column={j} modifyTicTak={this.props.modifyTicTak}/>
               })}
               <div style={{clear:"both"}}/>
               </>
                )
        }
        </>
    );

    }
}
export default WholeBox;