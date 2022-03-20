//search by category
function changeSearch(obj) {
				// 				var record_category = obj.options[obj.options.selectedIndex].innerHTML;
				var record_category = obj.options[obj.options.selectedIndex].value;
				 				// alert(record_category);
				$.ajax({
					url: "/admin/getRecordByCategory",
					method: "POST",
					dataType: "JSON",
					data:{'record_category':record_category},
					success: function(data) {

						$("#acm_event_list").empty();
						data = data.data;
						var str = "";
								str += '<table class="table table-hover text-center">' +
									'<tr>' +
									'<th width="80" style="text-align:left; padding-left:31px;">序号</th>' +
									'<th>图片</th>' +
									'<th>名称</th>' +
                                    '<th>地点</th>' +
									'<th>分类</th>' +
									'<th>时间</th>' +
									'<th width="15%">最近一次编辑时间</th>' +
									'<th width="250">操作</th>' +
									'</tr>'
						if(data != null && data != "") {
							for(var i = 0; i < data.length; i++) {
								str +=
									'<tr>' +
									'<td>' + (i + 1) + '</td>' +
									'<td width="10%"><img src="/static/' + data[i].acm_imgurl + '" alt="" width="70" height="50" /></td>' +
									'<td>' + data[i].acm_title + '</td>' +
									'<td>' + data[i].acm_place + '</td>' +
									'<td>' +
									'<font color="#00CC99">' + data[i].acm_category + '</font>' +
									'</td>' +
									'<td>' + data[i].acm_date + '</td>' +
									'<td>' + data[i].acm_edit_date + '</td>' +
									'<td>' +
									'<div class="button-group">' +
									'<a class="button border-main" href="javascript:void(0)" onclick="queryRecord(' + data[i].acm_id + ')"  data-width="50%" ><span class="icon-edit"></span> 修改</a>' +
									'<a class="button border-red" href="javascript:void(0)" onclick="deleteRecord(' + data[i].acm_id + ')"><span class="icon-trash-o"></span> 删除</a>' +
									'</div>' +
									'</td>' +
									'</tr>'
							}
						}
						// str += '<tr>' +
						// 	'<td style="text-align:left; padding:19px 0;padding-left:20px;"><input type="checkbox" id="checkall" /> 全选 </td>' +
						// 	'<td colspan="7" style="text-align:left;padding-left:20px;">' +
						// 	'<a href="javascript:void(0)" class="button border-red icon-trash-o" style="padding:5px 15px;" onclick="DelSelect()"> 删除</a>' +
						// 	'<a href="javascript:void(0)" style="padding:5px 15px; margin:0 10px;" class="button border-blue icon-edit" onclick="sorts()"> 排序</a>' +
						// 	'</td></tr></table>'
						$("#acm_event_list").html(str);

					},
					error: function(err) {
						alert("system error");
						console.log(err);
					}
				})
			}
//update
function queryRecord(acm_id) {
	window.location.href="/admin/queryRecord?acm_id="+acm_id;
}
//delete only one
function deleteRecord(acm_id) {

				if(confirm("您确定要删除吗?")) {
					$.ajax({
						url: "/admin/deleteRecord",
						method: "POST",
						data: {
							"acm_id": acm_id
						},
						dataType: "JSON",
						success: function(data) {
							if(data.result == 'ok') {
								alert("delete success!");
								window.location.reload();
							} else {
								alert("fail");
								window.location.reload();
							}
						},
						error: function(err) {
							alert("system error");
							console.log(err);
						}
					})
				} else {
						console.log("noproblem");
				}
			}
			

			