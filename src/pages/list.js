import React  from "react"

import "../style/css/list/index.css"
export default function List(props){

    return (<div className="list-wrap">
        <div className="list-scroller">
            {
                props.data.map(item=><div key={item} onClick={props.onClick}>{item}</div>)
            }
        </div>
    </div>)
}