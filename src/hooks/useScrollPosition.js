import { useEffect, useState } from "react";
import { throttle} from 'underscore'

export default function useScrollPasition() {
    // 状态记录位置
    const [scrollX,setScrollX] = useState(0)
    const [scrollY,setscrollY] = useState(0)
    // 监听window滚动
    useEffect(() => {
        const handleScroll = throttle(function handleScroll() {
            setScrollX(window.scrollX)
            setscrollY(window.scrollY)
        },100)

        window.addEventListener("scroll",handleScroll)
        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    },[])
    // 返回
    return {
        scrollX,
        scrollY
    } 
}