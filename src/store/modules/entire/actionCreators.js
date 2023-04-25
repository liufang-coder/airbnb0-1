import { getEntireRoomListData } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
    type:actionTypes.CHANGE_IS_LOADING,
    isLoading
})

// 发送网络请求
export const fetchRoomListAction = (page = 0) => {
    // 新的函数
    return async (dispatch,getState) => {
        // 分页操作改变时0.修改currentPage
        dispatch(changeCurrentPageAction(page))
        // getEntireRoomListData(0).then(res => {
        // })
        // 异步函数
        // 偏移数量写成动态
        // 1.根据页码获取最新的数据
        // const currentPage = getState().entire.currentPage
        // console.log(currentPage);
        // 页面加载
        dispatch(changeIsLoadingAction(true))
        const res = await getEntireRoomListData(page * 20)
        // 页面请求完成
        dispatch(changeIsLoadingAction(false))
        // 2.获取到最新的数据，保存到redux的store中
        const totalCount = res.totalCount
        const roomList = res.list
        dispatch(changeTotalCountAction(totalCount))
        dispatch(changeRoomListAction(roomList))
    }
}