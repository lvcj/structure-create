import { createBrowserHistory as BrowserHistory } from "history"

export default (function createBrowserHistory(){
    const history = createBrowserHistory()
    let BeforeHistory = history.location
    history.listen( (location,action) => {
    // location就是window.location的一个子集
    // action可能的值，"PUSH", "REPLACE", "POP"
    //if(action == "POP"){
        BeforeHistory = location
    //}
    } )

    // window.onpopstate=function(e){
    //   //具体业务操作
    //   console.log("onpopstate =", e)
    // }
    // //监听hash值的变化，即描点的电话
    // window.οnhashchange=function(e){
    //   // 具体业务逻辑操作
    //   console.log("οnhashchange =", e)
    // }
    let beforeFn = null
    let afterFn = null

    history.beforeEach = function(fn){
        beforeFn = fn
    }

    history.afterEach = function(fn){
        afterFn = fn
    }
    let _wr = function(type) {
        // const orig = history[type];
        // return function() {
        //     const rv = orig.apply(this, arguments);
        //     const fromUrl = window.location.href
        //     console.log(fromUrl)
        //     history.beforeEach(arguments[0], fromUrl)
        // //     const e = new Event(type);
        // //     e.arguments = arguments;
        // //     window.dispatchEvent(e);
        //     return rv;
        // }
        const orig = history[type];
        let params = null
        return function() {
            params = Array.prototype.slice.call(arguments)
            const arr = arguments[0].split("?")
            let toUrl = {
                hash: "",
                pathname: arr[0],
                search: arr.length > 1 && `${arr[1]}`,
                state: arguments.length > 1 && arguments[1]
            }

            // 设置了前置函数
            if(beforeFn){
                beforeFn(toUrl, BeforeHistory, function(){
                    const args = Array.prototype.slice.call(arguments)
                    args.forEach((arg, index) => {
                    params[index] = Object.assign(params[index], arg)
                    })
                    orig.apply(this, params)
                })
            }
            // 未设置前置函数
            if(!beforeFn){
                orig.apply(this, params)
            }

            // 设置后置函数
            if(afterFn){
                afterFn(toUrl, BeforeHistory)
            }
            // 保存上一次的url信息
            //BeforeHistory = toUrl
        }
    }
    
    history.push = _wr('push')
    history.replace = _wr('replace')
    // Use it like this:
    // window.addEventListener('push', function(e) {
    //   console.log('THEY DID IT AGAIN!', e);
    //     // if(e.arguments.length > 1){
    //     //   history.replace(e.arguments[0], {...e.arguments[1]})
    //     // }else{
    //     //   history.replace(`${e.arguments[0]}?v=1`)
    //     // }
    // })
    // window.addEventListener('replace', function(e) {
    //   console.log('THEY DID IT AGAIN!', e);
        
    // })

    return history

})(BrowserHistory)