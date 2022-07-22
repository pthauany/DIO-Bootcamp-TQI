import { checkPropTypes } from 'prop-types'
import React from 'react'

function Button(){

    const {name, onClick} = props
    return (
        <button onCLick={onClick}>{name}</button>
    )
}

export default Button