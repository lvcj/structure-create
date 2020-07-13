import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function ModalYY(props){
    const [divObj, setDivObj] = useState(null)

    useEffect(()=>{
        if (!props.closable && divObj) {
            clear()
        }
        if (props.closable && !divObj) {
            setDivObj(document.createElement('div'))
        }
        return ()=>{
            clear()
        }
    },[props.closable, divObj])
    
    useEffect(()=>{
        if(divObj){
            document.body.appendChild(divObj)
            document.body.classList.add('overflow-hidden')
        }
    }, [divObj])

    const clear = () => {
        if (!props.closable && divObj) {
            
            if(document.body.classList.length != 0){
                document.body.classList.remove('overflow-hidden')
                document.body.removeChild(divObj)
            }
            setDivObj(null)
        }
    }

    const renderPut = () => {
        if (!props.closable) return null

        return (
            <>
                <div className="am-modal-mask"></div>
                <div
                    className="am-modal-wrap am-modal-wrap-popup"
                    onClick={e => {
                        e.stopPropagation()
                        props.modalClose()
                    }}
                >
                    <div className="am-modal am-modal-popup popup-modal am-modal-popup-slide-up">
                        <div
                            className="am-modal-content"
                            onClick={e => {
                                e.stopPropagation()
                            }}
                        >
                            <div className="am-modal-body">{props.children}</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if (!divObj) return null
    return ReactDOM.createPortal(renderPut(), divObj)
}
