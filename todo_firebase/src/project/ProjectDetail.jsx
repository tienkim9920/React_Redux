import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteDetail } from '../redux/action/projectAction'

class ProjectDetail extends Component {

    deleteDetail = () => {
        this.props.deleteDetail(this.props.detail.id)
    }

    render() {
        var { detail } = this.props
        console.log(this.props)

        var alert;

        if (detail) {
            alert = (
                <div className="card detail_padding">
                    <button className="btn btn-raised right red lighten-1" onClick={this.deleteDetail}>X</button>
                    <h1 className="card-content center">{detail.title}</h1>
                    <h1 className="card-title center">{detail.content}</h1>
                    <h1 className="card-title center grey-text">{detail.timeAt}</h1>
                </div>
            )
        }else{
            alert = (
                <div className="card detail_padding">
                    <h1 className="card-title center red-text lighten-1">Delete Success</h1>
                </div>
            )
        }

        return (
            <div className="container detail">
                {/* <div className="card detail_padding">
                    <button className="btn btn-raised right red lighten-1" onClick={this.deleteDetail}>X</button>
                    <h1 className="card-content center">{detail.title}</h1>
                    <h1 className="card-title center">{detail.content}</h1>
                    <h1 className="card-title center grey-text">{detail.timeAt}</h1>
                </div> */}
                { alert }
            </div>
        )
    }

}

const mapStateToProps = (state, getParams) => {

    var urlID = getParams.match.params.id

    return {
        detail: state.project.projects.find(e => {
            return e.id === urlID
        })
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        deleteDetail: (id) => {
            dispatch(deleteDetail(id))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail)