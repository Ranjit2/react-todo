import React, { Component } from 'react'

export default class Todoinput extends Component {
    
    render() {
        const {item,handleChange,handleSubmit,editItem} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <input type="text"
                            className="form-control"
                            value={item}
                            onChange={handleChange}>

                            </input>
                            

                        </div>
                <button className="btn btn-primary ml-1">
                    {editItem?"update":"save"}
                </button>
                    </div>
                </form>
            </div>
        )
    }
}
