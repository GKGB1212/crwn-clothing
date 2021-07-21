import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=async (event)=>{
        // đảm bảo rằng form không bao giờ được gửi,
        // và nó đã giành được quyền kiểm soát và ngăn
        // chặn sự kiện đó khi click. Đó là những gì chúng ta đã làm.
        event.preventDefault();
        
        const {email,password}=this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error){
            console.error(error);
        }
    }
    handleChange=event=>{
        const {value,name}=event.target;

        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required
                        label="Email"
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        required
                        label="Password"
                        handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type="submit" value="sign">Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
