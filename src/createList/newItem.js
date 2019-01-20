import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import CustomCard from "../common/customCard"
import {Creators as FormActions} from "../store/actions/form"

const NewItem = props => (
    <CustomCard
    link="#"
    action={() => props.startAdd(props.list)}
    containerClass="list-item"
    >
        <div className="new-item">
            <p className="title">Novo Produto</p>
            <FontAwesomeIcon icon={faPlus} color="#e4e4e4" size="8x"></FontAwesomeIcon>
        </div>
    </CustomCard>
)

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null, mapDispatchToProps)(NewItem)