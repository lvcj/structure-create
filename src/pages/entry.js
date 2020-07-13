import { hot } from "react-hot-loader/root"
import React, {useState, useEffect} from "react"

import List from "./list"

import Common from '../utils/index'
import ModalYY from "../components/Modal/index"

import { LinkList, Node, TuLinkList, BinaryTree } from "../utils/dataStructure"
import useTuTable from "../utils/tuTable/index"

const NUMBER = 10
function Entry() {
  const [quickSort1, setQuickSort1] = useState([])
  const [modalStatus, setModalStatus] = useState(false)
  const [tuTablesShow, setTuTablesShow] = useState()
  const {combinedDatas, tuLinkList, addCombinedDatas, addTuTable, isShow, addSelectedDatas, selectedDatas, setTuLinkState} = useTuTable()
  const [combinedDatasShow, setCombinedDatasShow] = useState(combinedDatas)
  useEffect(()=>{

    
    const combindFeatures = [{
      "specId": 1050277679726722,
      "uniqueId": "b21cab1065a30b2164acdc6ba4b9e227",
      "specCode": "000000502010101",
      "specName": "蓝色 S 北京 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "https://inte-cloudsto.static.chanjet.com/90001120097/2020/5/18/hsy-1592450980911.jpg",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726723,
      "uniqueId": "034959c61379de545d8d24f30f171d01",
      "specCode": "000000502010102",
      "specName": "蓝色 S 北京 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726724,
      "uniqueId": "00328a60fcb7878ee0ea08c976a78d83",
      "specCode": "000000502010103",
      "specName": "蓝色 S 北京 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 69,
      "onHandQty": 84,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726725,
      "uniqueId": "c4525e670a9500fd4dca5475c01d53f1",
      "specCode": "000000502010201",
      "specName": "蓝色 S 天津 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726726,
      "uniqueId": "79fcda8b3e12c7597cebce81af2666b5",
      "specCode": "000000502010202",
      "specName": "蓝色 S 天津 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726727,
      "uniqueId": "aa4cf1d9b54f3c10321becf92cfeebb4",
      "specCode": "000000502010203",
      "specName": "蓝色 S 天津 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726728,
      "uniqueId": "2fb220577c6082b83990efdb0fc5cc3a",
      "specCode": "000000502010401",
      "specName": "蓝色 S 上海 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726729,
      "uniqueId": "d0842cefe78a8154e41ff5e2427e59bb",
      "specCode": "000000502010402",
      "specName": "蓝色 S 上海 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726730,
      "uniqueId": "9efc3caa1861d9382b5550014c703a4f",
      "specCode": "000000502010403",
      "specName": "蓝色 S 上海 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726731,
      "uniqueId": "44d0f55023c56c79c023322fb5ed29bc",
      "specCode": "000000502020101",
      "specName": "蓝色 M 北京 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726732,
      "uniqueId": "0795007f99b161b72ff266408374912e",
      "specCode": "000000502020102",
      "specName": "蓝色 M 北京 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726733,
      "uniqueId": "8243104b285e47a163109665770dfea8",
      "specCode": "000000502020103",
      "specName": "蓝色 M 北京 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726734,
      "uniqueId": "f30485b201e3474055ffd865838e70b7",
      "specCode": "000000502020201",
      "specName": "蓝色 M 天津 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726735,
      "uniqueId": "5bef63e3b0142b9ce0a427681795343f",
      "specCode": "000000502020202",
      "specName": "蓝色 M 天津 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726736,
      "uniqueId": "1f81758161e02591bca6c10b2732dbac",
      "specCode": "000000502020203",
      "specName": "蓝色 M 天津 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726737,
      "uniqueId": "4211386dfddf8373fe21f8be6d63e566",
      "specCode": "000000502020401",
      "specName": "蓝色 M 上海 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 94,
      "onHandQty": 98,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726738,
      "uniqueId": "e970b7070dd8900853fbb5b3a790c7e2",
      "specCode": "000000502020402",
      "specName": "蓝色 M 上海 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726739,
      "uniqueId": "c523fad25233cbbb57f1710655ae1fd2",
      "specCode": "000000502020403",
      "specName": "蓝色 M 上海 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726740,
      "uniqueId": "6ff88e026f29756ca3e12463a886305b",
      "specCode": "000000502030101",
      "specName": "蓝色 L 北京 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726741,
      "uniqueId": "3c08ee7533b4211dea7a39d048c88b35",
      "specCode": "000000502030102",
      "specName": "蓝色 L 北京 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726742,
      "uniqueId": "5bdf9566cf065c9db1b6d5a3f399ea7f",
      "specCode": "000000502030103",
      "specName": "蓝色 L 北京 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726743,
      "uniqueId": "d2f2b55931e8325ee15aa213e2040778",
      "specCode": "000000502030201",
      "specName": "蓝色 L 天津 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726744,
      "uniqueId": "9fd351a9b7c55d22181acff29de83aa2",
      "specCode": "000000502030202",
      "specName": "蓝色 L 天津 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726745,
      "uniqueId": "8a30ff64b0e44a2e460ffa004ecfacdb",
      "specCode": "000000502030203",
      "specName": "蓝色 L 天津 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726746,
      "uniqueId": "0a87747b80af855238d3c1d0f49c1552",
      "specCode": "000000502030401",
      "specName": "蓝色 L 上海 百度",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726747,
      "uniqueId": "531ef19b78030ed5faafd219a2c517d7",
      "specCode": "000000502030402",
      "specName": "蓝色 L 上海 阿里",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726748,
      "uniqueId": "8015164f707154158f00b6fb4467b7a6",
      "specCode": "000000502030403",
      "specName": "蓝色 L 上海 腾讯",
      "features": [{
        "productFeatureId": 1050272176799753,
        "productFeatureName": "蓝色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272176799753
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726749,
      "uniqueId": "10739ba93c62d6afa3a86407119d513f",
      "specCode": "000000503010101",
      "specName": "黑色 S 北京 百度",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726750,
      "uniqueId": "40b586fe334d9af0742adbac54f1ce60",
      "specCode": "000000503010102",
      "specName": "黑色 S 北京 阿里",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726751,
      "uniqueId": "63df1cb90b4af2bc7960063822aeb1e8",
      "specCode": "000000503010103",
      "specName": "黑色 S 北京 腾讯",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726752,
      "uniqueId": "d987bae4e7ea070c004be1c98baeae1a",
      "specCode": "000000503010201",
      "specName": "黑色 S 天津 百度",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726753,
      "uniqueId": "6f435a2931737284243b88273873e0d2",
      "specCode": "000000503010202",
      "specName": "黑色 S 天津 阿里",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726754,
      "uniqueId": "5a4b1fd68a860ee7c51ce1d45895bf7d",
      "specCode": "000000503010203",
      "specName": "黑色 S 天津 腾讯",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726755,
      "uniqueId": "f02b4d5d019fc0a213376433d75701cb",
      "specCode": "000000503010401",
      "specName": "黑色 S 上海 百度",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726756,
      "uniqueId": "fa3218c3929f3ffd757fafa4fc05a8a1",
      "specCode": "000000503010402",
      "specName": "黑色 S 上海 阿里",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726757,
      "uniqueId": "d7853d1014e9f409fd38051d99dc0d3d",
      "specCode": "000000503010403",
      "specName": "黑色 S 上海 腾讯",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452929,
        "productFeatureName": "S",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452929,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726758,
      "uniqueId": "6b3f7a79646fc4658c5e945f84eb22a5",
      "specCode": "000000503020101",
      "specName": "黑色 M 北京 百度",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726759,
      "uniqueId": "4b0342b08507df7d1e8d4936f37dbc9b",
      "specCode": "000000503020102",
      "specName": "黑色 M 北京 阿里",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726760,
      "uniqueId": "bec4c963b140d3ff598a2a68affac856",
      "specCode": "000000503020103",
      "specName": "黑色 M 北京 腾讯",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726761,
      "uniqueId": "4c144bc36306fff131c11badf635a91f",
      "specCode": "000000503020201",
      "specName": "黑色 M 天津 百度",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726762,
      "uniqueId": "5014e732fd5078d29a5e871eef20d18f",
      "specCode": "000000503020202",
      "specName": "黑色 M 天津 阿里",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726763,
      "uniqueId": "dcef941866f479199b80adb73c5d630c",
      "specCode": "000000503020203",
      "specName": "黑色 M 天津 腾讯",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726764,
      "uniqueId": "dc0486adce1368a64413d71d0ea80cf3",
      "specCode": "000000503020401",
      "specName": "黑色 M 上海 百度",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726765,
      "uniqueId": "71239c8969bfee4d3de8886692551aa5",
      "specCode": "000000503020402",
      "specName": "黑色 M 上海 阿里",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726766,
      "uniqueId": "004647c5b4d5d75cf1e2850cbce6dd22",
      "specCode": "000000503020403",
      "specName": "黑色 M 上海 腾讯",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272579452931,
        "productFeatureName": "M",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272982106114,
        "productFeatureName": "上海",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272982106114,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272579452931,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726767,
      "uniqueId": "583566802456929202942dc7458c54f0",
      "specCode": "000000503030101",
      "specName": "黑色 L 北京 百度",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726768,
      "uniqueId": "da7a3281ddb5ca556641877921be3267",
      "specCode": "000000503030102",
      "specName": "黑色 L 北京 阿里",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726769,
      "uniqueId": "020b09f1181aff311adc5429da369086",
      "specCode": "000000503030103",
      "specName": "黑色 L 北京 腾讯",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888384,
        "productFeatureName": "北京",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888384,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726770,
      "uniqueId": "713b1ce071f4bad99afbba755b02cb77",
      "specCode": "000000503030201",
      "specName": "黑色 L 天津 百度",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273116323840,
        "productFeatureName": "百度",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273116323840,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "https://inte-cloudsto.static.chanjet.com/90001120097/2020/5/18/hsy-1592451011960.png",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726771,
      "uniqueId": "85dc86e7b91adcb2b819b99c928d1072",
      "specCode": "000000503030202",
      "specName": "黑色 L 天津 阿里",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273250541568,
        "productFeatureName": "阿里",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273250541568,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }, {
      "specId": 1050277679726772,
      "uniqueId": "0b66021c13727d57ec4b99d6dacd7756",
      "specCode": "000000503030203",
      "specName": "黑色 L 天津 腾讯",
      "features": [{
        "productFeatureId": 1050272311017472,
        "productFeatureName": "黑色",
        "productFeatureTypeId": 1050271639928833,
        "productFeatureTypeName": "颜色",
        "sysSequenceNum": 1
      }, {
        "productFeatureId": 1050272713670656,
        "productFeatureName": "L",
        "productFeatureTypeId": 1050271774146560,
        "productFeatureTypeName": "尺码",
        "sysSequenceNum": 2
      }, {
        "productFeatureId": 1050272847888386,
        "productFeatureName": "天津",
        "productFeatureTypeId": 1050271908364288,
        "productFeatureTypeName": "产地",
        "sysSequenceNum": 3
      }, {
        "productFeatureId": 1050273384759296,
        "productFeatureName": "腾讯",
        "productFeatureTypeId": 1050272042582018,
        "productFeatureTypeName": "制造商",
        "sysSequenceNum": 4
      }],
      "productSpecId": {
        "pre3ProductFeatureId": 1050272847888386,
        "productId": 1050277679726596,
        "pre2ProductFeatureId": 1050272713670656,
        "pre4ProductFeatureId": 1050273384759296,
        "pre1ProductFeatureId": 1050272311017472
      },
      "specImg": "",
      "availQty": 0,
      "onHandQty": 0,
      "uomDatas": [{
        "price": 2.13,
        "uomId": 667257999196383,
        "retailPrice": 2.52
      }, {
        "price": 4.25,
        "uomId": 667257999196385,
        "retailPrice": 4.25
      }, {
        "price": 10.63,
        "uomId": 667257999196388,
        "retailPrice": 9
      }]
    }]
    
    addCombinedDatas(combindFeatures.map(features=>{
      let ids = []
      features.features.forEach(feature=>{
        ids.push(feature.productFeatureId)
      })
      return {specId: features.specId, uniqueId: features.uniqueId, ids:ids.join("-")}
    }))
  },[])
  useEffect(()=>{
    setCombinedDatasShow(combinedDatas)
  }, [combinedDatas])
  useEffect(()=>{
    
    // console.time("======for=======")
    // const arr = []
    // for(let i=0;i<NUMBER;i++){
    //   const item = Math.floor(Math.random()*NUMBER)
    //   arr.push(item)
    // }
    // console.log(arr)
    // console.timeEnd("======for=======")
    const arr = [2,7,10,30,4,9,40,5,3,1]
    const binaryTree = new BinaryTree()
    arr.forEach(value=>{
      binaryTree.addTreeNode(value)
    })
    console.log(" binaryTree == ", binaryTree)
    // console.time("======quickSort=======")//[2,7,10,30,4,9,40,5,3,1]
    // const quickSort = Common.quickSort(arr)
    // console.log(quickSort)
    // console.timeEnd("======quickSort=======")
    

    // console.time("======heapSort=======")
    // const heapSort = Common.heapSort([2,7,10,30,4,9,40,5,3,1])
    // console.log(heapSort)
    // console.timeEnd("======heapSort=======")
    

    // console.time("======minHeapSort=======")
    // const minHeapSort = Common.minHeapSort([2,7,10,30,4,9,40,5,3,1])
    // console.log(minHeapSort)
    // console.timeEnd("======minHeapSort=======")

    
    // console.time("======xieSort=======")
    // const xieSort = Common.xieSort([...arr])
    // console.log(xieSort)
    // console.timeEnd("======xieSort=======")


    // console.time("======mergeSort=======")
    // const mergeSort = Common.mergeSort([...arr])
    // console.log(mergeSort)
    // console.timeEnd("======mergeSort=======")


    // console.time("======countingSort=======")
    // const countingSort = Common.countingSort([...arr])
    // console.log(countingSort)
    // console.timeEnd("======countingSort=======")
    
    // console.time("======bucketSort=======")
    // const bucketSort = Common.bucketSort([...arr], 10000)
    // console.log(bucketSort)
    // console.timeEnd("======bucketSort=======")
    
    

    // console.time("======radixSort=======")
    // const radixSort = Common.radixSort([...arr])
    // console.log(radixSort)
    // console.timeEnd("======radixSort=======")
    // console.time("======insertSort=======")
    // const insertSort = Common.insertSort([...arr])
    // console.log(insertSort)
    // console.timeEnd("======insertSort=======")
    
    // console.time("======choiceSort=======")
    // const choiceSort = Common.choiceSort(arr)
    // console.log(choiceSort)
    // console.timeEnd("======choiceSort=======")

    // console.time("======bubbleSort=======")
    // const bubbleSort = Common.bubbleSort(arr)
    // console.log(bubbleSort)
    // console.timeEnd("======bubbleSort=======")

    // -------------查找----------------

    // console.time("======quickFind=======")
    // const findIndex = Common.quickFind(quickSort, 0, arr.length,300)
    // console.log(findIndex)
    // console.timeEnd("======quickFind=======")
    
    // console.time("======insertFind=======")
    // const insertFind = Common.insertFind(quickSort,300)
    // console.log(findIndex)
    // console.timeEnd("======insertFind=======")
    // setQuickSort1(quickSort)


    
    // let  value = "-1.".replace(/[^\d\.]/g, '').replace(/^(-|\+)?\d+(\.?)$/,"")
    // console.log(value)


    // let linkNodes = new LinkList()
    // linkNodes.addNode(1, 0)
    // linkNodes.addNode(2, 1)
    // linkNodes.addNode(3, 2)
    // linkNodes.addNode(4, 3)
    //console.log(linkNodes)
    //console.log(linkNodes.find(linkNodes.root, 3, 0))
    const productFeatures = [{
      "features": [{
        "code": "02",
        "id": 1050272176799753,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "蓝色",
        "productFeatureTypeId": 1050271639928833
      }, {
        "code": "03",
        "id": 1050272311017472,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "黑色",
        "productFeatureTypeId": 1050271639928833
      }],
      "typeName": "颜色",
      "isCrosswiseExpanded": false,
      "typeId": 1050271639928833,
      "sysSequenceNum": 1
    }, {
      "features": [{
        "code": "01",
        "id": 1050272579452929,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "S",
        "productFeatureTypeId": 1050271774146560
      }, {
        "code": "02",
        "id": 1050272579452931,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "M",
        "productFeatureTypeId": 1050271774146560
      }, {
        "code": "03",
        "id": 1050272713670656,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "L",
        "productFeatureTypeId": 1050271774146560
      }],
      "typeName": "尺码",
      "isCrosswiseExpanded": false,
      "typeId": 1050271774146560,
      "sysSequenceNum": 2
    }, {
      "features": [{
        "code": "01",
        "id": 1050272847888384,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "北京",
        "productFeatureTypeId": 1050271908364288
      }, {
        "code": "02",
        "id": 1050272847888386,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "天津",
        "productFeatureTypeId": 1050271908364288
      }, {
        "code": "04",
        "id": 1050272982106114,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "上海",
        "productFeatureTypeId": 1050271908364288
      }],
      "typeName": "产地",
      "isCrosswiseExpanded": false,
      "typeId": 1050271908364288,
      "sysSequenceNum": 3
    }, {
      "features": [{
        "code": "01",
        "id": 1050273116323840,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "百度",
        "productFeatureTypeId": 1050272042582018
      }, {
        "code": "02",
        "id": 1050273250541568,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "阿里",
        "productFeatureTypeId": 1050272042582018
      }, {
        "code": "03",
        "id": 1050273384759296,
        "lastUpdatedStamp": "2020-07-01 14:25:07",
        "name": "腾讯",
        "productFeatureTypeId": 1050272042582018
      }],
      "typeName": "制造商",
      "isCrosswiseExpanded": true,
      "typeId": 1050272042582018,
      "sysSequenceNum": 4
    }]
    // const bArr = [{id: 1, isSelected: true}, {}]
    let tuLinkListTemp = new TuLinkList()

    productFeatures.forEach((productFeature, index)=>{
      if(productFeature.features.length > 0){
        const features = productFeature.features.map(item=>{
            return {
              id: item.id, 
              code: item.code, 
              name: item.name, 
              typeId: item.productFeatureTypeId,
              isShow: combinedDatasShow.length == 0? true:isShow(combinedDatasShow, item.id),
              isSelected: selectedDatas.length == 0? false:selectedDatas[selectedDatas.length -1].ids.has(item.productFeatureTypeId),
              value: 0,
            }
        })
        tuLinkListTemp.addNode({
          "typeName": productFeature.typeName,
          "isCrosswiseExpanded": productFeature.isCrosswiseExpanded,
          "typeId": productFeature.typeId,
          "sysSequenceNum": productFeature.sysSequenceNum}, 
          features, index)
      }
    })
    addTuTable(tuLinkListTemp)

    console.log(tuLinkList, combinedDatasShow)
    setTuTablesShow(tuLinkList)
  }, [combinedDatasShow])

  const modalClose = ()=>{
    setModalStatus(false)
  }

  const onHandle=(value)=>{
    if(value.isSelected ){
      //removeSelectedDatas()
      let selected = selectedDatas[selectedDatas.length -1]
      let selecteds = selectedDatas.slice(0, selectedDatas.length - 1)
      if(selected.ids.get(value.typeId)){
        selected.ids.delete(value.typeId)
      }
      addSelectedDatas([...selecteds, selected])
      
      let datas = combinedDatas
      // for(let i in selected.ids.values()){
      //   console.log(i)
      //   //datas = setTuLinkState(combinedDatasShow, value.id)
      // }
      const obj = selected.ids.values()
      let next = obj.next()
      while(next && next.value){
        console.log(next)
        datas = setTuLinkState(datas, next.value)
        next = obj.next()
      }
      
      setCombinedDatasShow(datas)
    }else{
      let selected 
      let selecteds = selectedDatas
      if(selectedDatas.length==0){
        selected = {ids: new Map()}
      }else{
        selected = selectedDatas[selectedDatas.length -1]
        if(selected.ids.size == tuLinkList.size){
          selected = {ids: new Map()}
        }
        selecteds = selectedDatas.slice(0, selectedDatas.length - 1)
      }
      if(selected.ids.get(value.typeId)){
        selected.ids.delete(value.typeId)
      }
      selected.ids.set(value.typeId, value.id)
      addSelectedDatas([...selecteds, selected])
      setCombinedDatasShow(setTuLinkState(combinedDatasShow, value.id))
    }
  }

  const showItemFn = (value, isCrosswiseExpanded, index)=>{
    return <div key={`spec${index}`} className ={`spec-item`} >
      <span style={{color: value.isShow ? (value.isSelected? 'red':''):"grey"}} 
        onClick={()=>{
          if(isCrosswiseExpanded){
            return 
          }
          if(value.isShow){
            onHandle(value)
          }
        }}>{value.name} </span> 
      {isCrosswiseExpanded && <input type="text" />}
    </div>
  }
  const brotherFn = (brothers, isCrosswiseExpanded, index)=>{
    let next = brothers.root
    let showDom = []
    let i = 0
    while (next && next.value) {
      showDom.push(showItemFn(next.value, isCrosswiseExpanded, `${index}-${i}`))
      next = next.next
      i++
    }
  return <div className={`spec-wrap ${isCrosswiseExpanded && "spec-item-expanded"}`}>{showDom}</div>
  }

  const listFn = ()=>{
    let next = tuLinkList.root
    let showDom = []
    let i = 0
    while (next && next.value) {
      showDom.push(<div className={`type-item type-${i}`}>
                  <div>{next.value.typeName}</div>
                  {brotherFn(next.brother, next.value.isCrosswiseExpanded, i)}
                </div>)
      next = next.next
      i++
    }
    return showDom
  }
  return (
    <div className="wrap">
      <div className="header">
          <span>title</span>
      </div>
      <div className="tuTablesShow">
        {tuTablesShow && listFn()}
      </div>
      {/* <List data={quickSort1} onClick={(e)=>{
        e.stopPropagation()
        setModalStatus(true)
      }}></List>
      <ModalYY  closable={modalStatus} modalClose={modalClose}>
        <div className="modal">
          <List data={quickSort1}></List>
        </div>
      </ModalYY> */}
    </div>
  )
}

export default hot(Entry)
