import React from 'react'

import './signin.styles.scss'
import FormInput from '../form-input/form_input'
import CustomButton from '../custom-button/custom_button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }


    }
    handleSubmit=(eve) =>{
        eve.preventDeault()
        this.setState({email:'',
                    password:''})
    }
   handleChange=(eve) =>{
        const {value, name}=eve.target
        this.setState({[name]:value})
        
         
   }
    render(){
       

        return(
            <div className='sign-in'>
                <h2 className='title'>I already have account</h2>
                <span className='subtitle'>Please signin with email and password</span>
                <form className='form' onSubmit={this.handleSubmit}>
                    
                    <FormInput type='email' name='email' label='email' value={this.state.email} handleChange={this.handleChange} required></FormInput>
                    
                    <FormInput type='password' 
                    name='password' value={this.state.password} label='password' handleChange={this.handleChange} required></FormInput>
                    <div className='buttons'>
                    <CustomButton value='submit'>Sign In</CustomButton>
                    <CustomButton onClick ={signInWithGoogle} isGoogleSignin>signInWithGoogle</CustomButton>
                    </div>
                  
                </form>
            </div>
        )
    }


}

export default SignIn
