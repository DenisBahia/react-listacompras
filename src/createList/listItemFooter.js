import React from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import {Creators as FormActions} from "../store/actions/form"

const ListItemFooter = (props) => {
    return (
        <div className="list-card-footer">
            <div className="list-card-footer-actions">
                <FontAwesomeIcon icon={faPen} size="1x" color="#00b0ff" onClick={() => props.startUpdate(props.list, props.item)}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={() => props.deleteProduct(props.item.id)} icon={faTrash} size="1x" color="#e97e63" ></FontAwesomeIcon>
            </div>
            <p>Total: R$ {props.item.total}</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null, mapDispatchToProps)(ListItemFooter)