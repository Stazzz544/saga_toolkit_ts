//Saga logic

import { call, put, takeEvery} from 'redux-saga/effects'
import { getCatsSuccess } from '../store/reducers/counterSlice'

function* workGetCatsFetch():any {
	const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
		const formattedCats = yield cats.json()
		const formattedCatsShortened = formattedCats.slice(0, 10)
		yield put(getCatsSuccess(formattedCatsShortened))
	}

 
function* catSaga() {
	yield takeEvery('catsReducer/getCatsFetch', workGetCatsFetch);
}

export default catSaga;