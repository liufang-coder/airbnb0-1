import { 
    getHomeGoodPriceData, 
    getHomeHighScoreData,
    getHomeDiscountData, 
    getHomeHotRecommendData,
    getHomeLongForData,
    getHomePlusData
} from '@/services'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

// 发送异步网络请求
export const fetchHomeDataAction = createAsyncThunk("fetchdata",async(payload,{dispatch}) => {
    // const res = await getHomeGoodPriceData()
    // const res2 = await getHomeHighScoreData()
    // return {goodPrice:res,highScore:res2}
    // 返回promise
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceAction(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountAction(res))
    })
    getHomeHotRecommendData().then(res => {
        dispatch(changeHotRecommendAction(res))
    })
    getHomeLongForData().then(res => {
        dispatch(changeLongForAction(res))
    })
    getHomePlusData().then(res => {
        dispatch(changePlusAction(res))
    })
})

const homeSlice = createSlice({
    name:"home",
    initialState: {
        goodPriceInfo:{},
        highScoreInfo:{},
        discountInfo:{},
        recommendInfo:{},
        longForInfo:{},
        plusInfo:{}
    },
    reducers:{
        changeGoodPriceAction(state,{ payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreAction(state,{ payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountAction(state,{ payload }) {
            state.discountInfo = payload
        },
        changeHotRecommendAction(state,{ payload }) {
            state.recommendInfo = payload
        },
        changeLongForAction(state,{ payload }) {
            state.longForInfo = payload
        },
        changePlusAction(state,{ payload }) {
            state.plusInfo = payload
        }
    },
    extraReducers:{
        // [fetchHomeDataAction.fulfilled](state,{payload}) {
        //     state.goodPriceInfo = payload
        // }
    }
})

export const { 
    changeGoodPriceAction,
    changeHighScoreAction,
    changeDiscountAction,
    changeHotRecommendAction,
    changeLongForAction,
    changePlusAction
 } = homeSlice.actions

export default homeSlice.reducer