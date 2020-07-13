// 栈
export function Stack(){

    let stack = []

    const push=(item)=>{
        stack.push(item)
    }

    const pop=(item)=>{
        return stack.pop()
    }

    const getCount=()=>{
        return stack.length
    }

    const isEmpty=()=>{
        return getCount() == 0
    }

    return {
        stack: stack,
        push: push,
        pop: pop,
        getCount: getCount,
        isEmpty: isEmpty
    }
}

// 队列
export function Queue(){

    let queues = []

    const enQueue = (item)=>{
        return queues.push(item)
    }

    const deQueue = ()=>{
        return queues.shift()
    }

    const getHeader=()=>{
        return queues[0]
    }

    const getLength=()=>{
        return queues.length 
    }

    const isEmpty =()=>{
        return getLength() === 0
    }

    return {
        queues: queues,
        enQueue: enQueue,
        deQueue: deQueue,
        getHeader: getHeader,
        getLength: getLength,
        isEmpty: isEmpty
    }
}

// 链表
export function Node(value, next){
    this.value = value
    this.next = next
    this.tails = []
}

export function LinkList(){
    this.size = 0
    this.root = new Node(null, null)
    // 查找
    this.find = (header, index, currentIndex)=>{
       
        if(header == null) return null
        if(index == currentIndex) return header
        return this.find(header.next, index, currentIndex + 1)
    }
    // 添加
    /**
     *  v: 值
     *  index: 位置
     * **/
    this.addNode = (v, index) => {
        this.checkIndex(index)
        // 当往链表末尾插入时，prev.next 为空
        // 其他情况时，因为要插入节点，所以插入的节点
        // 的 next 应该是 prev.next
        // 然后设置 prev.next 为插入的节点
        let prev = this.find(this.root, index, 0)
        prev.value = v
        prev.next = new Node(null, null)
        this.size++
        return prev
    }

    this.insertNode = (v, index) => {
        return this.addNode(v, index)
    }

    this.addToFirst = (v) => {
        return this.addNode(v, 0)
    }

    this.addToLast = (v) => {
        return this.addNode(v, this.size)
    }

    this.removeNode = (index, isLast) => {
        this.checkIndex(index)
        index = isLast ? index - 1 : index
        let prev = this.find(this.root, index, 0)
        let node = prev.next
        prev.next = node.next
        node.next = null
        this.size--
        return node
    }

    this.removeFirstNode = () => {
        return this.removeNode(0)
    }

    this.removeLastNode = () => {
        return this.removeNode(this.size, true)
    }

    this.checkIndex = (index) => {
        if (index < 0 || index > this.size) throw Error('Index error')
    }

    this.getNode = (index) => {
        this.checkIndex(index)
        if (this.isEmpty()) return
        return this.find(this.root, index, 0).next
    }

    this.isEmpty = () => {
        return this.size === 0
    }

    this.getSize = () =>{
        return this.size
    }

}


export function TuNode(value, parent, next, brother){
    this.value = value
    this.parent = parent
    this.next = next
    this.brother = brother
}

export function TuLinkList(){
    this.root = new TuNode(null, null, null, null)
    this.size = 0
    /**
     * checkIndex: 检查是否存在此深度和广度下的角标
     * depthIndex: 深度的下角标
     * breadthIndex： 广度的下角标
     * **/
    this.checkIndex = (depthIndex)=>{
        if(depthIndex<0 || depthIndex > this.size) throw Error('Index error')
    }

    /**
     * depthFind: 深度查找
     * header: 要查找的对象
     * depthIndex: 要查找的位置
     * currentIndex： 当前位置
     * **/
    this.depthFind = (header, depthIndex, currentIndex)=>{
        if(header == null) return null
        if(depthIndex == currentIndex) return header
        return this.depthFind(header.next, depthIndex, currentIndex + 1)
    }

    /**
     * breadthFind: 广度查找
     * node: 要查找的对象
     * **/
    this.breadthFind = (value, depthIndex, breadthIndex)=>{
        //if(breadthIndex == )
    }

    
    /**
     * addNode: 添加节点
     * value: 当前的值
     * depthIndex： 深度的下角标
     * breadthIndex：广度的下角标
     * **/
    this.addNode = (value, brothers, depthIndex)=>{
        this.checkIndex(depthIndex)
        let tuNode = this.depthFind(this.root, depthIndex, 0)
        tuNode.value = value
        // 兄弟节点处理
        let brotherNode = new LinkList()
        brothers.forEach((brother, index)=>{
            if(brother != value){
                brotherNode.addNode(brother, index)
            }
        })
        tuNode.brother = brotherNode
        tuNode.next = new TuNode(null, tuNode, null, null)
        this.size++
        return tuNode.next
    }
}

// 二叉树

function TreeNode(value){
    this.value = value
    this.left = null
    this.right = null
}


export function BinaryTree(){
    this.root = null
    this.size = 0
    this.addTreeNode = (value)=>{
        this.root = this._addChild(this.root, value)
    }

    this._addChild = (node, value)=>{
        if(!node){
            this.size++
            return  new TreeNode(value)
        }else{
            if(node.value > value){
                node.left = this._addChild(node.left, value)
            }else if(node.value < value){
                node.right = this._addChild(node.right, value)
            }
        }
        return node
    }
    //先序优先遍历
    this.preTraversal = ()=>{
        
    }
}


