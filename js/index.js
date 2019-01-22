layui.use(['element', 'table'], function () {
    var element = layui.element;
    var table = layui.table;

    table.render({
        elem: '#test'
        , cols: [[ //标题栏
            { field: 'date', title: '日期' }
            , { field: 'index', title: '首页' }
            , { field: 'hgjj', title: '宏观经济' }
            , { field: 'gjsd', title: '国际视点' }
            , { field: 'jrzg', title: '金融中国' }
            , { field: 'zdztsjk', title: '重点专题数据库' }
            , { field: 'qqjj', title: '全球经济' }
        ]]
        , data: [{
            "date": "2018年1月"
            , "index": "12345"
            , "hgjj": "23456"
            , "gjsd": "345"
            , "jrzg": "567"
            , "zdztsjk": "5678"
            , "qqjj": "5678"
        }, {
            "date": "2018年2月"
            , "index": "12345"
            , "hgjj": "23456"
            , "gjsd": "345"
            , "jrzg": "567"
            , "zdztsjk": "5678"
            , "qqjj": "5678"
        }, {
            "date": "2018年3月"
            , "index": "12345"
            , "hgjj": "23456"
            , "gjsd": "345"
            , "jrzg": "567"
            , "zdztsjk": "5678"
            , "qqjj": "5678"
        }, {
            "date": "2018年4月"
            , "index": "12345"
            , "hgjj": "23456"
            , "gjsd": "345"
            , "jrzg": "567"
            , "zdztsjk": "5678"
            , "qqjj": "5678"
        }, {
            "date": "2018年5月"
            , "index": "12345"
            , "hgjj": "23456"
            , "gjsd": "345"
            , "jrzg": "567"
            , "zdztsjk": "5678"
            , "qqjj": "5678"
        }, {
            "date": "2018年6月"
            , "index": "12345"
            , "hgjj": "23456"
            , "gjsd": "345"
            , "jrzg": "567"
            , "zdztsjk": "5678"
            , "qqjj": "5678"
        }, {
            "date": "2018年7月"
            , "index": "12345"
            , "hgjj": "23456"
            , "gjsd": "345"
            , "jrzg": "567"
            , "zdztsjk": "5678"
            , "qqjj": "5678"
        }, {
            "date": "2018年8月"
            , "index": "12345"
            , "hgjj": "23456"
            , "gjsd": "345"
            , "jrzg": "567"
            , "zdztsjk": "5678"
            , "qqjj": "5678"
        }]
        //,skin: 'line' //表格风格
        //, even: true
        //,page: true //是否显示分页
        //,limits: [5, 7, 10]
        //,limit: 5 //每页默认显示的数量
    });



    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '浏览次数柱状图'
        },
        tooltip: {},
        legend: {
            type: 'scroll',
            orient: 'vertical',
            left: '1%',
            top: '10%',
            data: ['首页', '宏观经济', '国际视点', '金融中国', '重点专题数据库', '全球经济']
        },
        grid: {
            left: '15%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            data: ["2018年1月", "2018年2月", "2018年3月", "2018年4月", "2018年5月", "2018年6月", "2018年7月", "2018年8月"]
        },
        yAxis: {},
        series: [{
            name: '首页',
            type: 'bar',
            stack: '浏览量',
            data: [12345, 23542, 28954, 8951, 7889, 6954, 10001, 9999]
        }, {
            name: '宏观经济',
            type: 'bar',
            stack: '浏览量',
            data: [6549, 8526, 4785, 9465, 4625, 7856, 8546, 6549]
        }, {
            name: '国际视点',
            type: 'bar',
            stack: '浏览量',
            data: [6549, 8526, 4785, 9465, 4625, 7856, 8546, 6549]
        }, {
            name: '金融中国',
            type: 'bar',
            stack: '浏览量',
            data: [6549, 8526, 4785, 9465, 4625, 7856, 8546, 6549]
        }, {
            name: '重点专题数据库',
            type: 'bar',
            stack: '浏览量',
            data: [6549, 8526, 4785, 9465, 4625, 7856, 8546, 6549]
        }, {
            name: '全球经济',
            type: 'bar',
            stack: '浏览量',
            data: [6549, 8526, 4785, 9465, 4625, 7856, 8546, 6549]
        }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    $("#btn-search").on("click",function(){
        var year = $(".select-type").val();
        if(year==""){
            alert("请选择年份！");
            return;
        }
        var origindata=[
            {
                "fdDate": "2019年1月",
                "首页": 221,
                "综合频道": 4,
                "宏观频道": 7,
                "金融频道": 2,
                "行业频道": 4,
                "区域频道": null,
                "国际频道": null,
                "为您服务": 2,
                "财经视频": null
            },
            {
                "fdDate": "2019年2月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年3月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年4月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年5月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年6月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年7月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年8月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年9月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年10月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年11月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "2019年12月",
                "首页": null,
                "综合频道": null,
                "宏观频道": null,
                "金融频道": null,
                "行业频道": null,
                "区域频道": null,
                "国际频道": null,
                "为您服务": null,
                "财经视频": null
            },
            {
                "fdDate": "合  计",
                "首页": 221,
                "综合频道": 4,
                "宏观频道": 7,
                "金融频道": 2,
                "行业频道": 4,
                "区域频道": null,
                "国际频道": null,
                "为您服务": 2,
                "财经视频": null
            }
        ];

        var tableheader=[[]];
        for(var i=0;i<origindata.length;i++){
            for(var jobject in origindata[i]){
                var tempjson={};
                tempjson.field=jobject;
                tempjson.title=jobject;
            }
        }
    })
});