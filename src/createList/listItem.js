import React from "react"

import Checkbox from "@material-ui/core/Checkbox"
import Typography from "@material-ui/core/Typography"

import CustomCard from "../common/customCard"

import ListItemFooter from "./listItemFooter"

const ListItem = (props) => {
    return (
        <CustomCard 
        link="#"
        image={props.item.img}
        containerClass="list-item"
        footer={<ListItemFooter list={props.list} item={props.item} deleteProduct={props.deleteProduct}></ListItemFooter>}>
            <div>
                <div className="list-item-header">
                    <Typography variant="subtitle1" component="h2">{props.item.product}</Typography>
                    <Checkbox 
                        checked={props.item.checked} 
                        onClick={() => props.toggleProduct(props.item.id)}
                        />
                </div>
                <Typography component="p">{props.item.quantity} {props.item.unit}</Typography>
                <Typography component="p">R$ {props.item.price}</Typography>

            </div>    
        </CustomCard>
    )
}

export default ListItem