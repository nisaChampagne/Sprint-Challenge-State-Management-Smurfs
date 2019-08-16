import React from 'react'
import { addSmurf } from '../store/actions'
import { connect } from 'react-redux'

class AddForm extends React.Component {
    state ={
        name: '',
        age:'',
        height: '',
        id: new Date()
    }
    changeHandler = e => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height:'',
            id: ''
        })
    }
    render(){
        return(
            <div className='smurf-form'>
                <form onSubmit={this.submitHandler}>
                    <label>Name: </label>
                    <input type='text'
                    value={this.state.name}
                    name='name'
                    onChange={this.changeHandler}
                    />
                    <label>Age: </label>
                    <input type='number'
                    value={this.state.age}
                    name='age'
                    onChange={this.changeHandler}
                    />
                    <label>Height: </label>
                    <input type='number'
                    value={this.state.height}
                    name='height'
                    onChange={this.changeHandler}
                    />
                    <button className='add'>Add</button>
                </form>
            </div>
        )
    }

}


export default connect(null, { addSmurf })(AddForm)