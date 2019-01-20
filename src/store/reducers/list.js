import {createSelector} from "reselect"
import {Types} from "../actions/list"
import uuidv1 from "uuid/v1"

const initialState = {
    list: null,
    items: []
}

export default function list(state = initialState, action){
    switch(action.type){
        case Types.NEW_LIST:
            return {
                ...initialState, date: getDate()
            }
        case Types.ADD_PRODUCT:
            return {
                ...state,
                list: action.list,
            }
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id != action.productId)
            }
        case Types.TOGGLE_PRODUCT:
            return {
                ...state,
                items: toggleItem(state.items, action.productId)
            }
        case Types.UPDATE_PRODUCT:
            return {
                ...state,
                list: action.list,
                items: updateProduct(state.items, action.product)
            }
        case Types.GET_IMAGE_SUCCESS:
        case Types.GET_IMAGE_ERROR:
            return {
                ...state,
                items: [
                    ...state.items, 
                    {
                        ...action.product, 
                        total: getItemTotal(action.product), 
                        id: uuidv1(), 
                        checked: false,
                        img: action.img
                    }
                ]
            }
        default:
            return state
    }
}

function getDate() {
    const date = new Date()
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }
    return date.toLocaleDateString("pt-BR", options)
}

function getItemTotal(product){
    return product.price * product.quantity
}

function updateProduct(items, product){

    //achar produto especifico
    const index = items.findIndex(item => item.id === product.id)
    console.log(product)
    
    return [
        //todos os itens antes do item a ser modificado
        ...items.slice(0, index),
        //item especifico atualizado
        {... product, total: getItemTotal(product)},
        //todos os itens depois do item a ser modificado
        ...items.slice(index+1),
    ]
    
}

function toggleItem(items, productId){
    
    //achar produto especifico
    const index = items.findIndex(item => item.id === productId)
    
    return [
        //todos os itens antes do item a ser modificado
        ...items.slice(0, index),
        //item especifico
        {... items[index], checked: !items[index].checked},
        //todos os itens depois do item a ser modificado
        ...items.slice(index+1),
    ]

}

export const getListTotal = createSelector (
    state => state.list.items,
    items => items.reduce((total, item) => total + item.total, 0),
) 

export const getOpenedItems = createSelector (
    state => state.list.items,
    items => items.filter(item => !item.checked).length
) 

export const getClosedtems = createSelector (
    state => state.list.items,
    items => items.filter(item => item.checked).length
) 