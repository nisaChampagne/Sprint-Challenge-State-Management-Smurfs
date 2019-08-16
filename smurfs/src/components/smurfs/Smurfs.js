import React from "react";
import {connect} from 'react-redux'
import { removeSmurf } from '../store/actions'
// import { REMOVE_SMURF } from '../store/reducer'

function Smurfs(props) {
  return (
    <div className='existing-smurf'>
        <h3>Name: {props.smurf.name}</h3>
        <h4>{props.smurf.age} years old and {props.smurf.height}cm tall</h4>
        <button className='delete' type='submit' onClick={()=> removeSmurf(props.smurf.id)}>Delete</button>
    </div>
  );
}
export default connect() (Smurfs)