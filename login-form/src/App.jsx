import React from 'react';
import Input from './components/Input/Input';
import {addItemToLocalStorage} from './helpers/localStorage';
import Button from './components/Button/Button'

export default class App extends React.Component{
    constructor(props){
        super(props);
         
        this.state = {
            username: "",
            password: ""
        }
    }
    
    handleUnameInput =(e)=>{
        this.setState({
            username: e.target.value
        })
    }

    handlePassInput =(e)=>{
        this.setState({
            password: e.target.value
        })
    }
    
    handleSubmitBtnClick=(e)=>{
        
        const userInfo = {
            username: this.state.username,
            password: this.state.password
        }
        this.state.username = '';
        this.state.password = ''
        addItemToLocalStorage("userInfo", userInfo)
        console.log(userInfo)
    }
      
    render(){
        return(
            <form>
                <label style={{display: 'block'}}>
                    Username:
                </label>
                <Input type='text' value={this.state.username} name='uname' text='Enter Username' minLength='5' maxLength='15' onChange={this.handleUnameInput}/>
                <label style={{display: 'block'}}>
                    Password:
                </label>
                <Input type='password' value={this.state.password} name='psw' text='Enter Password' minLength='5' maxLength='15' onChange={this.handlePassInput}/>
                <Button type='submit' text='Log In' onClick={this.handleSubmitBtnClick}/>
            </form>
        )
    }
}
