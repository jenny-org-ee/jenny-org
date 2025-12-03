define({ "api": [
  {
    "type": "POST",
    "url": "/api/trademark/add",
    "title": "add",
    "version": "1.0.0",
    "group": "TrademarkOssController",
    "name": "add",
    "parameter": {
      "fields": {
        "请求体": [
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "beginTime",
            "description": "<p>合作方售卖开始时间</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "endTime",
            "description": "<p>合作方售卖结束时间</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "classificationCode",
            "description": "<p>一品类Code</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>商标标签</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "originalPrice",
            "description": "<p>合作方价格</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "ownerEnName",
            "description": "<p>申请人名称（英文）</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "ownerName",
            "description": "<p>申请人名称（中文）</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>合作方唯一标识</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "regAnnDate",
            "description": "<p>注册公告时间</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "secondaryClassification",
            "description": "<p>二级分类</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>售卖状态：1：售卖中；2：已下架</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "thirdClassification",
            "description": "<p>三级分类</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "tmIcon",
            "description": "<p>商标Icon下载地址</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "tmName",
            "description": "<p>商标名称</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "tmNumber",
            "description": "<p>商标申请号</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>转让类型:  经营不善、企业转型、其他</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>转让原因: 20到100字之间</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "trademarkOssId",
            "description": "<hr>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "uploadStatus",
            "description": ""
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "createTime",
            "description": ""
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "createBy",
            "description": ""
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": ""
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "updateBy",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "请求体示例",
          "content": "{\"reason\":\"iUwWWj6NZ\",\"trademarkOssId\":9711,\"originalPrice\":6607,\"ownerEnName\":\"GA8r\",\"partnerCode\":\"2oEkcFuGI\",\"tmIcon\":\"sx9\",\"description\":\"jE\",\"uploadStatus\":9704,\"updateTime\":2795154105622,\"label\":\"Wjmi\",\"type\":\"xqgmp\",\"tmNumber\":\"vprq\",\"classificationCode\":\"izS0\",\"thirdClassification\":\"JdlL\",\"createBy\":\"yCPxLj0\",\"tmName\":\"nX4b\",\"ownerName\":\"hUv52L\",\"createTime\":1535652528622,\"updateBy\":\"vInRuAb2\",\"beginTime\":1285358468045,\"endTime\":1867345117354,\"secondaryClassification\":\"10y\",\"regAnnDate\":3845937590193,\"status\":1473}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "响应结果": [
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>请求ID</p>"
          },
          {
            "group": "响应结果",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "ErrorMsg",
            "description": "<p>接口响应描述</p>"
          },
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "ErrorCode",
            "description": "<p>接口响应系统状态码</p>"
          },
          {
            "group": "响应结果",
            "type": "Object",
            "optional": false,
            "field": "Module",
            "description": "<p>结果对象</p>"
          },
          {
            "group": "响应结果",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "响应结果示例",
          "content": "{\"RequestId\":\"gDNiKueu\",\"ErrorMsg\":\"Tq\",\"ErrorCode\":\"HYpDkyds\",\"Module\":{},\"Success\":true,\"Result\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/gimc/zest/modules/trademark/controller/TrademarkOssController.java",
    "groupTitle": "TrademarkOssController"
  },
  {
    "type": "POST",
    "url": "/api/trademark/list",
    "title": "getListByParam",
    "version": "1.0.0",
    "group": "TrademarkOssController",
    "name": "getListByParam",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Array",
            "optional": false,
            "field": "records",
            "description": "<p>查询数据列表</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.beginTime",
            "description": "<p>合作方售卖开始时间</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.endTime",
            "description": "<p>合作方售卖结束时间</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.classificationCode",
            "description": "<p>一品类Code</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.description",
            "description": "<p>描述</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.label",
            "description": "<p>商标标签</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.originalPrice",
            "description": "<p>合作方价格</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.ownerEnName",
            "description": "<p>申请人名称（英文）</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.ownerName",
            "description": "<p>申请人名称（中文）</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.partnerCode",
            "description": "<p>合作方唯一标识</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.regAnnDate",
            "description": "<p>注册公告时间</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.secondaryClassification",
            "description": "<p>二级分类</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.status",
            "description": "<p>售卖状态：1：售卖中；2：已下架</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.thirdClassification",
            "description": "<p>三级分类</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.tmIcon",
            "description": "<p>商标Icon下载地址</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.tmName",
            "description": "<p>商标名称</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.tmNumber",
            "description": "<p>商标申请号</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.type",
            "description": "<p>转让类型:  经营不善、企业转型、其他</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.reason",
            "description": "<p>转让原因: 20到100字之间</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.trademarkOssId",
            "description": "<hr>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.uploadStatus",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.createTime",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.createBy",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "records.updateTime",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "records.updateBy",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页显示条数，默认 10</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "current",
            "description": "<p>当前页</p>"
          },
          {
            "group": "请求参数",
            "type": "Boolean",
            "optional": false,
            "field": "isSearchCount",
            "description": "<p>是否进行 count 查询</p>"
          },
          {
            "group": "请求参数",
            "type": "Array",
            "optional": false,
            "field": "orders",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "orders.column",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Boolean",
            "optional": false,
            "field": "orders.asc",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Boolean",
            "optional": false,
            "field": "optimizeCountSql",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Boolean",
            "optional": false,
            "field": "hitCount",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Object",
            "optional": false,
            "field": "createTimeVo",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "createTimeVo.startDate",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "createTimeVo.endDate",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "beginTime",
            "description": "<p>合作方售卖开始时间</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "endTime",
            "description": "<p>合作方售卖结束时间</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "classificationCode",
            "description": "<p>一品类Code</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>商标标签</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "originalPrice",
            "description": "<p>合作方价格</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "ownerEnName",
            "description": "<p>申请人名称（英文）</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "ownerName",
            "description": "<p>申请人名称（中文）</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>合作方唯一标识</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "regAnnDate",
            "description": "<p>注册公告时间</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "secondaryClassification",
            "description": "<p>二级分类</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>售卖状态：1：售卖中；2：已下架</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "thirdClassification",
            "description": "<p>三级分类</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "tmIcon",
            "description": "<p>商标Icon下载地址</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "tmName",
            "description": "<p>商标名称</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "tmNumber",
            "description": "<p>商标申请号</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>转让类型:  经营不善、企业转型、其他</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>转让原因: 20到100字之间</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "trademarkOssId",
            "description": "<hr>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "uploadStatus",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "createTime",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "createBy",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": ""
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "updateBy",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例",
          "content": "reason=CdFbG91bb&trademarkOssId=530&hitCount=false&originalPrice=6184&partnerCode=nPXKCl&records={\"reason\":\"tsidiRO\",\"trademarkOssId\":3433,\"originalPrice\":9455,\"ownerEnName\":\"wBTUCOM\",\"partnerCode\":\"5mF\",\"tmIcon\":\"NMzHhVfUhQ\",\"description\":\"kuUm\",\"uploadStatus\":6499,\"updateTime\":2422015446241,\"label\":\"5xCO95\",\"type\":\"uEM4mvQ6W\",\"tmNumber\":\"rQu0\",\"classificationCode\":\"q\",\"thirdClassification\":\"0FBj\",\"createBy\":\"srXHqjGz\",\"tmName\":\"j7Hf9Ja6V\",\"ownerName\":\"pfMBNtYXe\",\"createTime\":2496498901341,\"updateBy\":\"xQ\",\"beginTime\":1283037561549,\"endTime\":1646502973525,\"secondaryClassification\":\"rEDgCdEjw\",\"regAnnDate\":2678516620986,\"status\":8528}&tmIcon=PtC5nNe&description=S&uploadStatus=7024&type=JvSUQV&total=3086&current=4716&ownerName=ZECifLO&updateBy=pmS0vV53rI&beginTime=3802257335852&secondaryClassification=X&regAnnDate=61283984141&createTimeVo={\"endDate\":\"eAhjxZ6\",\"startDate\":\"vlyMFp1Eh\"}&optimizeCountSql=false&ownerEnName=UlE&updateTime=3055874655525&label=Jgvz0i&tmNumber=6GtMvWg&classificationCode=8GALCv&thirdClassification=AvngVpB&createBy=dem8zxk9&tmName=ZUb1ycKINZ&size=2045&createTime=1319394632073&orders={\"asc\":false,\"column\":\"qVyEZm80UT\"}&endTime=700633106337&isSearchCount=false&status=9735",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "响应结果": [
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>请求ID</p>"
          },
          {
            "group": "响应结果",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "ErrorMsg",
            "description": "<p>接口响应描述</p>"
          },
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "ErrorCode",
            "description": "<p>接口响应系统状态码</p>"
          },
          {
            "group": "响应结果",
            "type": "Object",
            "optional": false,
            "field": "Module",
            "description": "<p>结果对象</p>"
          },
          {
            "group": "响应结果",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "响应结果示例",
          "content": "{\"RequestId\":\"nVCnwd\",\"ErrorMsg\":\"cZIrdbLBHb\",\"ErrorCode\":\"3iA\",\"Module\":{},\"Success\":false,\"Result\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/gimc/zest/modules/trademark/controller/TrademarkOssController.java",
    "groupTitle": "TrademarkOssController"
  },
  {
    "type": "POST",
    "url": "/api/trademark/modify",
    "title": "modify",
    "version": "1.0.0",
    "group": "TrademarkOssController",
    "name": "modify",
    "parameter": {
      "fields": {
        "请求体": [
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "beginTime",
            "description": "<p>合作方售卖开始时间</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "endTime",
            "description": "<p>合作方售卖结束时间</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "classificationCode",
            "description": "<p>一品类Code</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>商标标签</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "originalPrice",
            "description": "<p>合作方价格</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "ownerEnName",
            "description": "<p>申请人名称（英文）</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "ownerName",
            "description": "<p>申请人名称（中文）</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "partnerCode",
            "description": "<p>合作方唯一标识</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "regAnnDate",
            "description": "<p>注册公告时间</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "secondaryClassification",
            "description": "<p>二级分类</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>售卖状态：1：售卖中；2：已下架</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "thirdClassification",
            "description": "<p>三级分类</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "tmIcon",
            "description": "<p>商标Icon下载地址</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "tmName",
            "description": "<p>商标名称</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "tmNumber",
            "description": "<p>商标申请号</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>转让类型:  经营不善、企业转型、其他</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>转让原因: 20到100字之间</p>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "trademarkOssId",
            "description": "<hr>"
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "uploadStatus",
            "description": ""
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "createTime",
            "description": ""
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "createBy",
            "description": ""
          },
          {
            "group": "请求体",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": ""
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "updateBy",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "请求体示例",
          "content": "{\"reason\":\"wt22n6OHQ\",\"trademarkOssId\":8423,\"originalPrice\":9519,\"ownerEnName\":\"Q5C8e\",\"partnerCode\":\"U4UHwU\",\"tmIcon\":\"4t5Qhv3EL\",\"description\":\"rey5t\",\"uploadStatus\":450,\"updateTime\":1091485833045,\"label\":\"LH\",\"type\":\"EV\",\"tmNumber\":\"JoV6g\",\"classificationCode\":\"rGFeg\",\"thirdClassification\":\"ebM0CneK\",\"createBy\":\"npld9R6f9j\",\"tmName\":\"md0noSlLj\",\"ownerName\":\"KI3MzY\",\"createTime\":2060846818136,\"updateBy\":\"JdR56Cq\",\"beginTime\":2690069868613,\"endTime\":3216741525945,\"secondaryClassification\":\"S1cp\",\"regAnnDate\":2089611040092,\"status\":1865}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "响应结果": [
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>请求ID</p>"
          },
          {
            "group": "响应结果",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "ErrorMsg",
            "description": "<p>接口响应描述</p>"
          },
          {
            "group": "响应结果",
            "type": "String",
            "optional": false,
            "field": "ErrorCode",
            "description": "<p>接口响应系统状态码</p>"
          },
          {
            "group": "响应结果",
            "type": "Object",
            "optional": false,
            "field": "Module",
            "description": "<p>结果对象</p>"
          },
          {
            "group": "响应结果",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "响应结果示例",
          "content": "{\"RequestId\":\"xZvZcqwHy\",\"ErrorMsg\":\"KlHa\",\"ErrorCode\":\"OOT\",\"Module\":{},\"Success\":true,\"Result\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/gimc/zest/modules/trademark/controller/TrademarkOssController.java",
    "groupTitle": "TrademarkOssController"
  },
  {
    "type": "get",
    "url": "/upload/data",
    "title": "Request User information",
    "name": "商标数据导入",
    "group": "trademark",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/gimc/zest/modules/trademark/controller/TrademarkOssController.java",
    "groupTitle": "trademark"
  }
] });
