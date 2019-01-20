import React from "react"

import CustomCard from "../common/customCard"

const NewList = (props) => {
    return (
        <CustomCard action={props.newList} link="/lista/novo" containerClass="new-list-container">
            <p className="title">
                Adicionar Novas Listas
            </p>
        </CustomCard>        
    )
}

export default NewList