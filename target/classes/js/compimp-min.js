(function(b){console.log("oh hello");var a=AJS.contextPath()+"/rest/xproduct-admin/1.0/";b(document).ready(function(){b.ajax({url:a,dataType:"json"}).done(function(c){b("#name").val(c.name);b("#time").val(c.time)})})})(AJS.$||jQuery);function updateConfig(){AJS.$.ajax({url:AJS.contextPath()+"/rest/xproduct-admin/1.0/",type:"PUT",contentType:"application/json",data:'{ "name": "'+AJS.$("#name").attr("value")+'", "time": '+AJS.$("#time").attr("value")+" }",processData:false})}AJS.$("#admin").submit(function(a){console.log("hmmm");a.preventDefault();updateConfig()});