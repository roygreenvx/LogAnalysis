layui.use(['element', 'table', 'laydate'], function () {
    var element = layui.element;
    var table = layui.table;
    var laydate = layui.laydate;
    var $ = layui.jquery;

    laydate.render({
        elem: '#select-timebegin'
    });

    laydate.render({
        elem: '#select-timeend'
    });

    table.render({
        elem: '#test'
        , id: "analyseTable"
        , limit: 20
        , loading: true
        , cols: [[ //标题栏
            { "field": "首页", "title": "首页" },
            { "field": "综合频道", "title": "综合频道" },
            { "field": "宏观频道", "title": "宏观频道" },
            { "field": "金融频道", "title": "金融频道" },
            { "field": "行业频道", "title": "行业频道" },
            { "field": "区域频道", "title": "区域频道" },
            { "field": "国际频道", "title": "国际频道" },
            { "field": "为您服务", "title": "为您服务" },
            { "field": "财经视频", "title": "财经视频" }
        ]]
        , data: []
        //,skin: 'line' //表格风格
        //, even: true
        //,page: true //是否显示分页
        //,limits: [5, 7, 10]
        //,limit: 5 //每页默认显示的数量
    });



    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart'));


    $("#btn-search").on("click", function () {
        var timestart = $("#select-timebegin").val();
        var timeend = $("#select-timeend").val();
        var ipstart = $("#input-ipbegin").val();
        var ipend = $("#input-ipend").val();
        
        var origindata = [
            {
                "fdID": "-1",
                "fdName": "首页",
                "fdCount": 221
            },
            {
                "fdID": "4028c7ca-37115425-0137-11559c4d-0001",
                "fdName": "综合频道",
                "fdCount": 4
            },
            {
                "fdID": "4028c7ca-37115425-0137-11559cf9-0003",
                "fdName": "宏观频道",
                "fdCount": 7
            },
            {
                "fdID": "4028c7ca-37115425-0137-11559d28-0005",
                "fdName": "金融频道",
                "fdCount": 2
            },
            {
                "fdID": "4028c7ca-37115425-0137-11559db4-0009",
                "fdName": "区域频道",
                "fdCount": 0
            },
            {
                "fdID": "4028c7ca-37115425-0137-11559dd3-000b",
                "fdName": "国际频道",
                "fdCount": 0
            },
            {
                "fdID": "4028c7ca-37115425-0137-11559d66-0007",
                "fdName": "行业频道",
                "fdCount": 4
            },
            {
                "fdID": "4b4ff4a5-3b1cfb0e-013b-2618ac6d-2d1c",
                "fdName": "财经视频",
                "fdCount": 0
            },
            {
                "fdID": "4b4ff4a4-39b8f896-0139-b90e8442-01d0",
                "fdName": "为您服务",
                "fdCount": 2
            }
        ];

        var tableheader = [[]];
        var tabledata=[{}];
        var chartheader = [];
        var chartdata = [];
        for (var i = 0; i < origindata.length; i++) {
            var tempheader = {};
            tempheader.field = origindata[i].fdName;
            tempheader.title = origindata[i].fdName;
            tableheader[0].push(tempheader);
            tabledata[0][origindata[i].fdName]=origindata[i].fdCount;
            chartheader.push(origindata[i].fdName);
            chartdata.push(origindata[i].fdCount);
        }

        //alert(JSON.stringify(tableheader));
        //alert(JSON.stringify(tabledata));

        table.reload("analyseTable", {
            loading: true,
            cols: tableheader,
            data: tabledata
        })

        //alert(JSON.stringify(chartdata));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '浏览次数柱状图'
            },
            tooltip: {},
            grid: {
                left: '4%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                data: chartheader
            },
            yAxis: {},
            series: [{
                //name: '首页',
                type: 'bar',
                //stack: '浏览量',
                data: chartdata
            }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
});