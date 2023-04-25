import hyRequest from "..";
export function getHomeGoodPriceData() {
    return hyRequest.get({
        url:"/home/goodprice"
    })
}  

export function getHomeHighScoreData() {
    return hyRequest.get({
        url:"/home/highScore"
    })
}

export function getHomeDiscountData() {
    return hyRequest.get({
        url:"/home/discount"
    })
}

export function getHomeHotRecommendData() {
    return hyRequest.get({
        url:"/home/hotrecommenddest"
    })
}

export function getHomeLongForData() {
    return hyRequest.get({
        url:"/home/longfor"
    })
}

export function getHomePlusData() {
    return hyRequest.get({
        url:"/home/plus"
    })
}