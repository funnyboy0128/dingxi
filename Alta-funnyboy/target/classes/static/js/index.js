$(function(){
	dongguanTongji();  //东莞统计
	dayonline();       //每日在线
	vankeAct();        //万科激活
	biweeklyAct();     //双周运营
	
});
/**  双周运营 报表相关  **/
biweeklyAct= function(){
	var setData = {"diweekNum":7};
	$.ajax({
        type: 'POST',     
        contentType: "application/json",
        url: '/vanke/charts/wankeDiweekData',   
        data:JSON.stringify(setData),
        dataType: 'json',     
        success: function(data) {  
        	
        	var title = data.data.title;
	 		var tatal = data.data.tatal;
	 		var file = data.data.file;
	 		var link = data.data.link;
	 		var share = data.data.share;
	 		
	 		//填充表格
	 		fillTableRow("diweek_act_title", title);
	 		fillTableRow("diweek_act_total", tatal);
	 		fillTableRow("diweek_act_file", file);
	 		fillTableRow("diweek_act_link", link);
	 		fillTableRow("diweek_act_share", share);
    		
	 		//移除首个元素
	 		title.splice(0,1);
	 		tatal.splice(0,1);
	 		file.splice(0,1);
	 		link.splice(0,1);
	 		share.splice(0,1);
	 		
	 		biweeklyTotal(title,tatal); 
	 		uploadFileAct(title,file);
	 		biweeklylink(title,link);
	 		biweeklyshare(title,share);
	 		
        },     
        error: function(err){     
            alert(err);     
        }
	});
};

//双周用户激活数
biweeklyTotal = function(data1,data2){
	var myChart = echarts.init(document.getElementById('biweekly_sataistics_total'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '双周用户激活数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '双周用户激活数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#00bfb4",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}

//上传文件增长数
uploadFileAct = function(data1,data2){
	var myChart = echarts.init(document.getElementById('biweekly_sataistics_upload'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '上传文件增长数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '上传文件增长数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#f27e02",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}

//文件外链增长数
biweeklylink = function(data1,data2){
	var myChart = echarts.init(document.getElementById('biweekly_sataistics_link'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '文件外链增长数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '文件外链增长数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#fcc43b",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}

//文件共享增长数
biweeklyshare = function(data1,data2){
	var myChart = echarts.init(document.getElementById('biweekly_sataistics_share'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '文件共享增长数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '文件共享增长数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#1585dc",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}


/**  万科激活 报表相关  **/
vankeAct= function(){
	var setData ={"startDate":"","endDate":""};
	$.ajax({
        type: 'POST',     
        contentType: "application/json",
        url: '/vanke/charts/vankeAct',   
        data:JSON.stringify(setData),
        dataType: 'json',     
        success: function(data) {  
        	
        	var title = data.data.title;
	 		var tatal = data.data.tatal;
	 		var inc = data.data.inc;
	 		var web = data.data.web;
	 		var pc = data.data.pc;
	 		var ios = data.data.ios;
	 		var android = data.data.android;
	 		
	 		//填充表格
	 		fillTableRow("vanke_act_title", title);
	 		fillTableRow("vanke_act_total", tatal);
	 		fillTableRow("vanke_act_inc", inc);
	 		fillTableRow("vanke_act_web", web);
	 		fillTableRow("vanke_act_pc", pc);
	 		fillTableRow("vanke_act_ios", ios);
	 		fillTableRow("vanke_act_android", android);
    		
	 		//移除首个元素
	 		title.splice(0,1);
	 		tatal.splice(0,1);
	 		inc.splice(0,1);
	 		web.splice(0,1);
	 		pc.splice(0,1);
	 		ios.splice(0,1);
	 		android.splice(0,1);
	 		
	 		vkactTotal(title,tatal); 
	 		vkactInc(title,inc);
	 		vkactWeb(title,web);
	 		vkactPc(title,pc);
	 		vkactIos(title,ios);
	 		vkactAndroid(title,android);
        },     
        error: function(err){     
            alert(err);     
        }
	});
};

//万科激活总数
vkactTotal = function(data1,data2){
	var myChart = echarts.init(document.getElementById('vanke_act_total_chart'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '万科激活用户数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '万科激活用户数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#f27e02",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}

//万科激活增长数
vkactInc = function(data1,data2){
	var myChart = echarts.init(document.getElementById('vanke_act_inc_chart'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '增长数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '增长数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#fcc43b",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}

//万科激活-web
vkactWeb = function(data1,data2){
	var myChart = echarts.init(document.getElementById('vanke_act_web_chart'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ 'Web端' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : 'Web端',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#1585dc",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}

//万科激活-PC
vkactPc = function(data1,data2){
	var myChart = echarts.init(document.getElementById('vanke_act_pc_chart'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ 'PC端' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : 'PC端',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#00bfb4",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}

//万科激活-IOS
vkactIos = function(data1,data2){
	var myChart = echarts.init(document.getElementById('vanke_act_ios_chart'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ 'IOS' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : 'IOS',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#b14bb0",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}

//万科激活-安卓
vkactAndroid = function(data1,data2){
	var myChart = echarts.init(document.getElementById('vanke_act_android_chart'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ 'Android' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : 'Android',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#eb4d8a",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	myChart.setOption(option);
}


/**  每日在线 报表相关  **/
dayonline= function(){
	var setData ={"startDate":"","endDate":""};
	$.ajax({
        type: 'POST',     
        contentType: "application/json",
        url: '/vanke/charts/dayOnline',   
        data:JSON.stringify(setData),
        dataType: 'json',     
        success: function(data) {  
        	
        	var title = data.data.title;
	 		var tatal = data.data.tatal;
	 		var web = data.data.web;
	 		var pc = data.data.pc;
	 		var ios = data.data.ios;
	 		var android = data.data.android;
	 		
	 		//填充表格
	 		fillTableRow("t_online_title", title);
	 		fillTableRow("t_online_total", tatal);
	 		fillTableRow("t_online_web", web);
	 		fillTableRow("t_online_pc", pc);
	 		fillTableRow("t_online_ios", ios);
	 		fillTableRow("t_online_android", android);
    		
	 		//移除首个元素
	 		title.splice(0,1);
	 		tatal.splice(0,1);
	 		
	 		onlineTotal(title,tatal); //在线总数
        },     
        error: function(err){     
            alert(err);     
        }
	});
};

//万科在线总数统计
onlineTotal = function(data1,data2){

	var myChart = echarts.init(document.getElementById('online_total_chart'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '万科在线用户数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '万科在线用户数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#1585dc",
					position : 'top'
				}
			},
			data : data2
		} ]
	};

	myChart.setOption(option);
}

/**  东莞统计报表相关  **/
dongguanTongji= function(){
	var setData ={"startDate":"","endDate":""};
	$.ajax({
        type: 'POST',     
        contentType: "application/json",
        url: '/vanke/charts/dongguanActive',   
        data:JSON.stringify(setData),
        dataType: 'json',     
        success: function(data) {  
        	
        	var title = data.data.title;
	 		var active = data.data.active;
	 		var incNum = data.data.incNum;
	 		var fileUpload = data.data.fileUpload;
	 		var spaceNum = data.data.spaceNum;
	 		
	 		//填充表格
	 		fillTableRow("tab1", title);
	 		fillTableRow("tab2", active);
	 		fillTableRow("tab3", incNum);
	 		fillTableRow("tab4", fileUpload);
	 		fillTableRow("tab5", spaceNum);
    		
	 		//移除首个元素
	 		title.splice(0,1);
	 		active.splice(0,1);
	 		incNum.splice(0,1);
	 		fileUpload.splice(0,1);
	 		spaceNum.splice(0,1);
	 		
	 		activeFunc(title,active); //激活数
        	incNumFunc(title,incNum); //增长数
        	uploadFunc(title,fileUpload);//文件上传数
        	spaceFunc(title,spaceNum);//东莞存储使用量
        },     
        error: function(err){     
            alert(err);     
        }
	});
};

//激活数
activeFunc =function(data1,data2){
	
	var myChart = echarts.init(document.getElementById('main'));
	var option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '东莞用户激活数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '东莞用户激活数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
						}
					},
					color : "#1585dc",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	//option.xAxis[0].data=data1;
    //option.series[0].data=data2;
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

//增长数
incNumFunc = function(data1,data2){
	var chart_incnum = echarts.init(document.getElementById('incnum'));
	//增长数
	option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '增长数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",

		},
		calculable : true,
		xAxis : [ {
			
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			type : 'category',
			data : data1
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '增长数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充

					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',

						}
					},
					color : "#00bfb4",
					position : 'top'
				}
			},
			data : data2
		} ]
	};
	
	chart_incnum.setOption(option);
}

//文件上传数
uploadFunc =function(xList,yList){
	var chart = echarts.init(document.getElementById('uploadFile'));
	option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '文件上传数' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green",
	
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			axisLabel : {
				interval:0,  //全部显示
				rotate :40,  //倾斜度
			},
			data : xList
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
	
		{
			name : '文件上传数',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
	
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
	
						}
					},
					color : "#f27e02",
					position : 'top'
	
				}
			},
			data : yList
		} ]
	};
	
	chart.setOption(option);

}

//东莞存储使用量
spaceFunc =function(xList,yList){
	var chart = echarts.init(document.getElementById('storageEnable'));
	option = {
		tooltip : {
			show : true,
			trigger : 'item'
		},
		legend : {
			data : [ '东莞存储使用量' ]
		},
		toolbox : {
			show : true,
			effectiveColor : "green"
	
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			
			axisLabel : {
				interval:0,  //全部显示
				rotate :40  //倾斜度
				 
			},
			data : xList
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [
		{
			name : '东莞存储使用量',
			type : 'bar',
			barWidth : 28,// 系列级个性化，柱形宽度
	
			itemStyle : {
				normal : { // 系列级个性化，横向渐变填充
	
					label : {
						show : true,
						position : 'top',
						textStyle : {
							fontSize : '14',
							color:'#333333',
							fontFamily : '微软雅黑',
	
						}
					},
					color : "#fcc43b",
					position : 'top'
	
				}
			},
			data : yList
		} ]
	};
	chart.setOption(option);
}

//填充表格行数据
function fillTableRow(table_id, table_data) {
	var table_tr = "";
	for (var i = 0; i < table_data.length; i++) {
		table_tr += "<td>" + table_data[i] + "</td>"
	}
	document.getElementById(table_id).innerHTML = table_tr;
}

