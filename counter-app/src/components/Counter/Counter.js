import React from 'react';
import Button from '../Button/Button';

class Counter extends React.Component {
    state = {
        count: 0, 
        addBy: 1
    };

    handleInc=()=>{
        this.setState({
            count: this.state.count + this.state.addBy
        })
    }
    
    handleDec=()=>{
        this.setState({
            count: this.state.count-this.state.addBy
        })
    }
    
    handleDelete=()=>{
        this.setState({
            count: 0
        })
    }

    handleAddBy = (e) => {
        const normalizedValue = Number(e.target.value);
        
        if (Number.isNaN(normalizedValue)) {
          throw new Error('Input should be a number!')
        }
        
        this.setState({
          addBy: normalizedValue
        })
      }
    
    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <input onChange={this.handleAddBy} placeholder="Add by..." />
                <Button text='increment' onClick={this.handleInc} />
                <Button text='decrement' onClick={this.handleDec} />
                <Button text='Delete' onClick={this.handleDelete}/>
            </div>
        )
    }
}

export default Counter;