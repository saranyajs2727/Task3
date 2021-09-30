import React, { Component } from "react";
import '../App.css';
import { Redirect } from "react-router";

class Login extends Component {
 constructor(props) {
        super(props)
        this.state={
            username:'',
            Password:'',
            isLog : false,
        }
     }
     handleuser=(e)=>{
         this.setState({
             username:e.target.value
         })
     }
     handleemail=(e)=>{
        this.setState({
            Password:e.target.value
        })
    }
     handlesubmit = (e)=>{
        console.log(`${this.state.username} ${this.state.Password} `)
        e.preventDefault();
        let name=this.state.username.length;
        let password=this.state.Password;
        
        if(name<3){
             alert("name char must be greater than 3")
         }
         else if(password ===" ")
         {
             alert("please enter a password");
         }
         else if(password.length < 8)
         {
             alert("password must be greater than 8");
         }else if(!password.match(/[a-z]/g))
         {
             alert("password must contain lowercase letter");
         }
         else if(!password.match(/[A-Z]/g))
         {
             alert("password must contain uppecase letter");
         }
         else if(!password.match( /[0-9]/g))
         {
             alert("password must contain number");
         }
         else if(!password.match(/[^a-zA-Z\d]/g))
         {
             alert("password must contain a special character");
         }
         else{
             alert("welcome to lofin page");
             
             this.setState({ isLog : true})
        }
        const user={
            username:this.state.username,
            password:this.state.Password

        };
       /*   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })    */
    }
     
    // callme(){
    //     this.setState({
     //        username: 'saran'
             
     //    });
    // }
     clickeme()
     {
         alert(`hi`)
     }
     
      render()
      {
        return (            
            <div style={{ backgroundImage: "url(img.jpg)" }}>
               {this.state.isLog&&<Redirect to="/header" />}
                <h2 className="s">Login Form</h2>
                <form onSubmit={this.handlesubmit}>
                <div className="container">   
                    <label>Username : </label>   
                    <input type="text" placeholder="Enter Username"
                    value={this.state.username} 
                    onChange={this.handleuser}
                    className="text" required/> <br></br> 
                    <label>Password : </label>   
                    <input type="password" placeholder="Enter Password"
                     name="password" className="text" 
                     value={this.state.email} 
                    onChange={this.handleemail}
                      required/>  <br></br>  
                    <p>{this.state.username}</p>
                    <button id="btn">submit</button>  
                    <button onClick={this.clickeme}>clickme</button>
                    
                </div>
               
                </form>
            </div>  
          
            
          );
      }
  
}
export default Login;
