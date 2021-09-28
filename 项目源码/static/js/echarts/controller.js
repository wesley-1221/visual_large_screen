function get_time(){
	$.ajax(
		{
			url:"/time",
			timeout:10000, //超时设置10秒
			success:function(data){
				$("#time").html(data)
			},
			error:function(xhr,type,errorThrown){

			}
		}
	);
}

function get_pie_l1(){
	$.ajax(
		{
			url:"/pie_l1_api",
			success:function(data){
				pie_l1_option.series[0].data=data
				ec_pie_l1.setOption(pie_l1_option)
			},
			error:function(xhr,type,errorThrown){

			}
		}
	);
}

function get_scatter_l2(){
	$.ajax(
		{
			url:"/scatter_l2_api",
			success:function(data){
				console.log(data)
				scatter_l2_option.series[1].data=data
				ec_scatter_l2.setOption(scatter_l2_option)
			},
			error:function(xhr,type,errorThrown){

			}
		}
	);
}

function get_bar_r1(){
	$.ajax(
		{
			url:"/bar_r1_api",
			success:function(data){
				bar_r1_option.xAxis[0].data=data.position
				bar_r1_option.series[0].data=data.highest
				bar_r1_option.series[1].data=data.lowest
				bar_r1_option.series[2].data=data.average
				ec_bar_r1.setOption(bar_r1_option)
			},
			error:function(xhr,type,errorThrown){

			}
		}
	);
}

function get_area_r2(){
	$.ajax(
		{
			url:"/area_r2_api",
			success:function(data){
				// console.log(data)
				// name, attack, defense, height, weight, age, ball_age
				area_r2_option.xAxis[0].data=data.name
				area_r2_option.series[0].data=data.attack
				area_r2_option.series[1].data=data.defense
				area_r2_option.series[2].data=data.height
				area_r2_option.series[3].data=data.weight
				area_r2_option.series[4].data=data.age
				ec_area_r2.setOption(area_r2_option)
			},
			error:function(xhr,type,errorThrown){

			}
		}
	);
}

function get_cross_c2(){
	$.ajax(
		{
			url:"/cross_c2_api",
			success:function(data){
				cross_c2_option.xAxis[0].data=data.position
				cross_c2_option.xAxis[1].data=data.position
				cross_c2_option.series[0].data=data.attack
				cross_c2_option.series[1].data=data.defence
				ec_cross_c2.setOption(cross_c2_option)
			},
			error:function(xhr,type,errorThrown){

			}
		}
	);
}
setInterval(get_time,1000);
get_pie_l1()
get_scatter_l2()
get_bar_r1()
get_area_r2()
get_cross_c2()

