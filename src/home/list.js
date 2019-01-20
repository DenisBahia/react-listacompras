import React from "react"

import { faShoppingBasket, faCheck} from "@fortawesome/free-solid-svg-icons"

import CustomCard from "../common/customCard"
import ListFooter from "./listFooter"
import ListItem from "./listItem"

import "./list.css"

const List = (props) => {
    return (
        <CustomCard containerClass="list-container" 
            footer={<ListFooter total={props.total}></ListFooter>}
            link="/lista/edicao"
            cardClass={props.openedItems < 1 ? "closed-list" : "opened-list"}
            >
            <div>
                <p className="title">{props.list}</p>
                <div className="list-card-body">
                    <ListItem icon={faShoppingBasket} text={`${props.openedItems} items restantes`}></ListItem>
                    <ListItem icon={faCheck} text={`${props.closedItems} items comprados`}></ListItem>
                </div>
            </div>
        </CustomCard>    
    )
}

export default List