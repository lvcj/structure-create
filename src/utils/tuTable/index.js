import { LinkList, Node, TuLinkList, TuNode } from "../dataStructure"
import react, { useState, useEffect} from 'react'

export default function useTuTable(){
    // 图表定义
    const [tuLinkList, setLinkList] = useState(new TuLinkList())

    // 所有组合数据
    const [combinedDatas, setCombinedDatas] = useState([])

    // 选中的数据列表
    const [selectedDatas, setSelectedDatas] = useState([])

    // 添加图表的数据
    const addTuTable = (linkList)=>{
        //tuLinkList.addNode(productFeature, features, index)
        setLinkList(linkList)
    }

    // 添加组合数据
    const addCombinedDatas = (items) => {
       // combinedDatas.push(item)
        // if(combinedDatas.length == 0){
        //     setCombinedDatas([item])
        // }else{
        //     setCombinedDatas([...combinedDatas, item])
        // }
        setCombinedDatas(items)
    }

    // 添加选中的数据
    const addSelectedDatas = (items)=>{
        // if(selectedDatas.length == 0){
        //     setSelectedDatas([item])
        // }else{
        //     setSelectedDatas([...selectedDatas, item])
        // }
        //selectedDatas.push(item)
        setSelectedDatas(items)
    }

    // 通过选中的数据和组合数据设置状态
    const setTuLinkState = (combinedDatas, id)=>{
        if(id){
            return combinedDatas.filter(item=> item.ids.indexOf(id)!=-1)
        }
        return combinedDatas
        // states.forEach(state=>{
        //     datas.addNode()
        // })
        // 循环 tuLinkList 
        // 查找到满足的内容
        //tuLinkList
    }
    // 获取 图列表
    // const getTuLinkList = ()=>{
    //     return tuLinkList
    // }

    // 获取 组合数据
    // const getCombinedDatas = ()=>{
    //     return combinedDatas
    // }

    // 是否存在在组合的sku中
    const isShow = (combinedDatas, id)=>{
        // if(selectedDatas.length > 0){

        // }
        return combinedDatas.findIndex(item=> item.ids.indexOf(id) != -1) != -1
    }
    return {
        addTuTable,
        addCombinedDatas,
        addSelectedDatas, 
        setTuLinkState,
        tuLinkList,
        combinedDatas,
        selectedDatas,
        isShow
    }
}