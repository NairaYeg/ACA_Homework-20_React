import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input'
import { addItemToLocalStorage } from '../../helpers/localStorage'

class Counter extends React.Component {
    state = {
        count: 0, 
        addBy: 1,
        minValue: 0, 
        maxValue: 100
    };

    handleInc=()=>{
        if(this.state.count < this.state.maxValue){
            this.setState(({ count, addBy }) => ({
                count: count + addBy
              }));
        }
        return ;
    }
    
    handleDec=()=>{
        if(this.state.count > this.state.minValue){
            this.setState(({ count, addBy }) => ({
                count: count - addBy
              }));
        }

        return ;
    }
    
    handleDelete=()=>{
        this.setState({
            count: 0,
            addBy: 1,
            minValue: 0, 
            maxValue: 10
        })
    }
    
    handleMaxValueInput=(e)=>{
     const isValide = !Number.isNaN(Number(e.target.value));

     if(isValide){
         addItemToLocalStorage('maxValue', e.target.value)
         this.setState({
             maxValue: e.target.value
         })
     }
    }

    handleMinValueInput=(e)=>{
        const isValide = !Number.isNaN(Number(e.target.value));

        if(isValide){
            addItemToLocalStorage('minValue', e.target.value)
            this.setState({
                minValue: e.target.value
            })
        }
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
                <Input onChange={this.handleAddBy} type='number' text="Add by..." />
                <Input onChange={this.handleMaxValueInput} type='number' text='Maximal' />
                <Input onChange={this.handleMinValueInput} type='number' text='Minimal'/>
                <Button text='increment' onClick={this.handleInc} />
                <Button text='decrement' onClick={this.handleDec} />
                <Button text='Delete' onClick={this.handleDelete}/>
            </div>
        )
    }
}

export default Counter;