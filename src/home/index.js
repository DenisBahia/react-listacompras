import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import NewList from "./newList"
import List from "./list"
import {getListTotal, getClosedtems, getOpenedItems} from "../store/reducers/list"
import {Creators as ListActions} from "../store/actions/list"

import "./home.css"

const Home = (props) =>  {
    return (
        <div className="page-container home-img">

            <NewList newList={props.newList}></NewList>
            {props.list.items.length > 0 &&
                <List
                    list={props.list.list}
                    total={props.total}
                    openedItems={props.openedItems}
                    closedItems={props.closedItems}
                    date={props.date}
                />
            }

        </div>
    )
}

const mapStateToProps = state => ({
    list: state.list,
    total: getListTotal(state),
    openedItems: getOpenedItems(state),
    closedItems: getClosedtems(state),
    date: state.list.date
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps,  mapDispatchToProps)(Home)