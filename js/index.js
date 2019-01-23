layui.use(['element', 'table'], function () {
    var element = layui.element;
    var table = layui.table;
    var $ = layui.jquery;

    table.render({
        elem: '#test'
        , id: "analyseTable"
        , limit: 20
        , loading: true
        , cols: [[
            { "field": "fdDate", "title": "日期" },
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
        var year = $(".select-type").val();
        if (year == "") {
            alert("请选择年份！");
            return;
        }
        var origindata = [
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

        var tableheader = [[]];
        var chartheader = [];
        var chartdata = [];
        for (var i = 0; i < origindata.length; i++) {
            if (i == 0) {
                for (var jobject in origindata[i]) {
                    var tempjson = {};
                    tempjson.field = jobject;
                    if (tempjson.field == "fdDate") {
                        tempjson.title = "日期";
                    }
                    else {
                        tempjson.title = jobject;
                        var tempchart = {};
                        tempchart.name = jobject;
                        tempchart.type = "bar";
                        tempchart.stack = "浏览量";
                        tempchart.data = [];
                        chartdata.push(tempchart);
                        chartheader.push(jobject);
                    }
                    tableheader[0].push(tempjson);
                }
            }
            if(i < origindata.length-1){
                for (var j = 0; j < chartdata.length; j++) {
                    chartdata[j].data.push(origindata[i][chartdata[j].name]);
                }
            }
        }

        table.reload("analyseTable", {
            loading: true,
            cols: tableheader,
            data: origindata
        })

        //alert(JSON.stringify(chartdata));

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
                data: chartheader
            },
            grid: {
                left: '15%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                data: ["2018年1月", "2018年2月", "2018年3月", "2018年4月", "2018年5月", "2018年6月", "2018年7月", "2018年8月", "2018年9月", "2018年10月", "2018年11月", "2018年12月"]
            },
            yAxis: {},
            series: chartdata
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
});