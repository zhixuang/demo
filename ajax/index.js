
$.ajax({
    url:"./a.json",
    type:"get",
    dataType:"json",
    success:function(data){
       //  $.each(data.first, function(i, item) {
       //      var str = '<div>姓名:' + item.name + '性别：' + item.sex + '</div>';
       //      document.write(str);
       
       // })
       console.log(data)
    }
})

