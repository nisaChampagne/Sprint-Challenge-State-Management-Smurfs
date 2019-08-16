import React from 'react'
import { useSelector } from 'react-redux'

const SmurfList = () => {
    const state = useSelector(state => state)
    return(
    <div>
        <h1>{state.test}</h1>
    </div>
    )
}
export default SmurfList