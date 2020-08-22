import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
// import { bindActionCreators } from 'redux'

const Counter = ({ counter, inc, dec, rnd }) => {
    return(
        <div className="jumbotron">
            <h2 id='counter'>{ counter }</h2>
            <button id='dec' 
                onClick={dec}
                className="btn btn-primary btn-large">DEC</button>
            <button id='inc' 
                onClick={inc}
                className="btn btn-primary btn-large">INC</button>
            <button id='rnd' 
                onClick={rnd}
                className="btn btn-primary btn-large">RND</button>
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        counter: state
    }
}
// console.log(actions);

export default connect(mapStateToProps, actions)(Counter)