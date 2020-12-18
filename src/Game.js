import React from 'react';
import WholeBox from './WholeBox.js';

class Game extends React.Component{
    constructor(){
        super();
        this.state={
            tictak:[[0,0,0],[0,0,0],[0,0,0]],
            score:0,
            toggle:false
        }
    }

    modifyTicTak=(row,column)=>{
        let tempTT=this.state.tictak;
        if(tempTT[row][column]!==0)
        return;
        if(!this.state.toggle)
        tempTT[row][column]='X';
        else
        tempTT[row][column]='O';

        this.setState((prev)=>({tictak:tempTT,toggle:!prev.toggle}),()=>{this.checkWinner();});
    }
    checkWinner=()=>{
        if(this.state.tictak[0][0]!==0 &&this.state.tictak[0][0]===this.state.tictak[1][1] && this.state.tictak[0][0]===this.state.tictak[2][2])
        alert(this.state.tictak[0][0]+" won!!!");
        if(this.state.tictak[0][2]!==0 &&this.state.tictak[0][2]===this.state.tictak[1][1] && this.state.tictak[2][0]===this.state.tictak[0][2])
        alert(this.state.tictak[0][0]+" won!!!");
        this.state.tictak.forEach((row,r)=>{
            if(row[0]!==0 && row[0]===row[1] && row[0]===row[2]){
                alert(row[1]+" won!!!");

            }
       
        })
    
    }
    render(){
    return (
        <>
        <WholeBox values={this.state.tictak} modifyTicTak={this.modifyTicTak}/>
        </>
    );

    }
}
export default Game;