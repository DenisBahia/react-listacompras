import {call, put} from "redux-saga/effects"
import {services} from "../services/index"
import {Creators as ListActions} from "../actions/list"

const genericImage = "http://blogs.correiobraziliense.com.br/nqv/wp-content/uploads/sites/22/2017/03/pingodoce6-617x370-550x331.jpg"

export function* getImageRequest(action){
    try {
        const img = yield call(services.getImages, action.product.product)
        yield put(ListActions.getImageSuccess(action.product, img))
    } catch (ex){
        console.log(ex)
        yield put(ListActions.getImageError(action.product, genericImage))
    }
}