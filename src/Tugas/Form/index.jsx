import React from "react";
import * as Validator from "validatorjs";

const Input = ({label, type, name, onChange}) => {
    return(
      <div>
        <label>
          {label} : 
        </label>
        <br/>
          <input type={type} name={name} onChange={e => onChange(e.target.value)} />
        <br/>
      </div>
    )
  }

const ShowErrors = ({errors}) => {
    return(
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((errors,i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}

export default class TugasForm extends React.Component{
    state = {
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email,password} = this.state;

        let data = {email, password};
          
        let rules = {
            email: 'required|email',
            password: 'required|min:8'
        };

        let validation = new Validator(data, rules);
        if(validation.passes() === true){
            alert(`
                email: ${this.state.email}
                password: ${this.state.password}
            `);
        }
        this.setState({
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password'),
            ]
        });
    }

    render(){
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }
        return(
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h4>Login Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="Email" name="email" label="Email" onChange={value => this.setState({email: value})} />
                    <Input type="password" name="password" label="Password" onChange={value => this.setState({password: value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}