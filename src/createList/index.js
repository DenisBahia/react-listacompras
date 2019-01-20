import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import Form from "./form"
import ListItem from "./listItem"
import {Creators as ListActions } from "../store/actions/list"
import NewItem from "./newItem"

import "./list.css"

class CreateList extends Component {

    addProduct = (product, list) => {
        this.props.addProduct(product, list)
    }

    render (){
        return (
            <div className="page-container">
                <Form 
                    url={this.props.match.params.action}
                    addProduct={this.addProduct} 
                    updateProduct={this.props.updateProduct}/>
                <div className="list-items-container">
                    {
                        this.props.list.items.map(item => 
                            <ListItem 
                            list={this.props.list.list}
                            key={item.id}
                            item={item}
                            deleteProduct={this.props.deleteProduct}
                            toggleProduct={this.props.toggleProduct}
                            />
                        ) 
                    }

                    {this.props.match.params.action === "edicao" &&
                        <NewItem list={this.props.list} />
                    }

                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    list: state.list
})
  
const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateList)