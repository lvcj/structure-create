// 快排
function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    const left = []
    const right = []
    const mids = []
    const mid = arr[Math.floor(arr.length/2)]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>mid){
            right.push(arr[i])
        }else if(arr[i]<mid){
            left.push(arr[i])
        }else{
            mids.push(mid)
        }
    }
    return quickSort(left).concat(mids, quickSort(right))
}

// 快速二分查找
function quickFind(arr, startIndex, endIndex, findObj){
    if(endIndex<startIndex){
        return -1
    }
    if(endIndex == startIndex && findObj!= arr[startIndex]){
        return -1;
    }
    const midIndex = Math.floor((endIndex-startIndex)/2)+startIndex
    
    const mid = arr[midIndex]
    if(mid>findObj){
        return quickFind(arr, startIndex, midIndex, findObj)
    }else if(mid < findObj){
        return quickFind(arr, midIndex+1, endIndex, findObj)
    }else{
        return midIndex
    }
}

// 插入排序
function insertSort(arr){
    if(arr.length <= 1){
        return arr
    }
    for(let i = 1; i< arr.length;i++){
        let j = i-1
        const temp = arr[i]
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
    }
    return arr
}
// 希尔排序
function xieSort(arr){
    let gap = Math.floor(arr.length/2)
    for(; gap>0; gap = Math.floor(gap/2)){
        for(let i = gap; i< arr.length; i++){
            let j = i;
            let current = arr[i]
            while((j-gap) >= 0 && current < arr[j - gap]){
                arr[j] = arr[j-gap]
                j = j-gap;
            }
            arr[j] = current
        }
    }
    return arr
}
// 插入查找
function insertFind(arr, findObj){
    for(let i = 0; i<arr.length; i++){
        if(findObj == arr[i]){
            return i
        }
    }
}

// 简单选择排序
function choiceSort(arr){
    for(let i = 0; i<arr.length;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

// 冒泡排序
function bubbleSort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
// 归并排序
function mergeSort(arr) {
    let len = arr.length;
    if(len < 2) {
        return arr;
    }
    const middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    const result = merge(mergeSort(left), mergeSort(right))
    //console.log(result)
    return result
}
function merge(left, right) {
    const result = [];
 
    while(left.length>0 && right.length>0) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else{
            result.push(right.shift());
        }
    }
 
    while(left.length)
        result.push(left.shift());
 
    while(right.length)
        result.push(right.shift());
 
    return result;
}
// 多路归并

// 大堆排序

/**
 *  方法： 创建大堆
 *  描述: 将数组长度除以2，然后向上取整，从此处循环直到0，然后开始比对此节点与其左右节点哪个最大，放在根节点。
 *  arr: 数组
 *  len: 数组的长度
 * **/
function buildMaxHeap(arr, len){
    for(let i = Math.floor(len/2); i >= 0; i--) {
        heapifyMax(arr, i, len);
    }
}

function heapifyMax(arr, i, len){
    let left = 2*i + 1,
        right = 2*i + 2,
        largest = i;
    if(left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if(right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if(largest != i) {
        swap(arr, i, largest);
        heapifyMax(arr, largest, len);
    }
}

function swap(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    let len = arr.length
    buildMaxHeap(arr, len)
    for(let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i)
        len--
        heapifyMax(arr, 0, len)
    }
    return arr;
}

// 小堆排序
/**
 *  方法： 创建大堆
 *  描述: 将数组长度除以2，然后向上取整，从此处循环直到0，然后开始比对此节点与其左右节点哪个最大，放在根节点。
 *  arr: 数组
 *  len: 数组的长度
 * **/
function createMinHeap(arr, len){
    for(let i = Math.floor(len/2); i >=0; i--){
        heapifyMin(arr, i, len)
    }
}

function heapifyMin(arr, i, len){
    let left = 2*i + 1,
        right = 2*i + 2,
        minIndex = i;
    if(left < len && arr[minIndex] > arr[left]){
        minIndex = left
    }

    if(right < len && arr[minIndex] > arr[right]){
        minIndex = right
    }
    
    if(minIndex != i){
        swap(arr, i, minIndex)
        heapifyMin(arr, minIndex, len)
    }
}

function minHeapSort(arr){
    let len = arr.length
    createMinHeap(arr, len)
    for(let i = arr.length - 1; i>0; i--){
        swap(arr, 0, i)
        len--
        heapifyMin(arr, 0, len)
    }
    return arr
}
// 计数排序 
/**
 * arr:是无序的数组
 * maxValue:数组中的最大值
 * **/
function countingSort(arr){
    let i,
        arrLen = arr.length,
        maxValue = arr[0];
   
    for(i = 1; i < arrLen; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];                // 输入数据的最大值
        }
    }
    let bucket = new Array(maxValue + 1),
          sortedIndex = 0,
         
          bucketLen = maxValue + 1;
    for(i = 0; i < arrLen; i++) {
        if(!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
     
    for(let j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
    
    return arr;
}

// 桶排序

function bucketSort(arr, bucketSize) {
    if(arr.length === 0) {
      return arr;
    }
 
    let i,
        minValue = arr[0],
        maxValue = arr[0];
    for(i = 1; i < arr.length; i++) {
      if(arr[i] < minValue) {
        minValue = arr[i];                // 输入数据的最小值
      } else if(arr[i] > maxValue) {
        maxValue = arr[i];                // 输入数据的最大值
      }
    }
 
    // 桶的初始化
    let DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  
    let buckets = new Array(bucketCount);
    
    // 利用映射函数将数据分配到各个桶中
    for(i = 0; i < arr.length; i++) {
        const index = Math.floor((arr[i] - minValue) / bucketSize)
        if(buckets[index]==null) {
            buckets[index] = [];
        }
        buckets[index].push(arr[i]);
    }
 
    arr.length = 0;
    for(i = 0; i < bucketCount; i++) {
        buckets[i] = countingSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
        for(var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                     
        }
    }
 
    return arr;
}

// 基数排序
const counter = [];
function radixSort(arr) {

    let i,
        arrLen = arr.length,
        maxValue = arr[0];
   
    for(i = 1; i < arrLen; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];                // 输入数据的最大值
        }
    }
    const maxDigit = (maxValue+"").length
    let mod = 10;
    let dev = 1;
    for(let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(let j = 0; j < arrLen; j++) {
            let bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        let pos = 0;
        for(let j = 0; j < counter.length; j++) {
            let value = null;
            if(counter[j]!=null) {
                while((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
}

export default {
    quickSort,
    insertSort,
    choiceSort,
    bubbleSort,
    xieSort,
    mergeSort,
    heapSort,
    minHeapSort,
    insertFind,
    quickFind,
    countingSort,
    bucketSort,
    radixSort,
}