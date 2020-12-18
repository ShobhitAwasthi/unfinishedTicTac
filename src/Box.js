import React from 'react';

class Box extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }
    showValues=()=>{
        this.props.modifyTicTak(this.props.row,this.props.column);
    }
    render(){
    return (
        <>
        <div style={{float:"left"}} onClick={this.showValues}>
        {this.props.boxValue}
        </div>
        </>
    );

    }
}
export default Box;