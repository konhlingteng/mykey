//到后台页面时调用此函数
function getlist() {
    $.ajax({
        method: "get",
        url: "/my/userinfo",
        success: function (res) {
            console.log(res);
            xuanran(res.data)
        }        
    })
}
getlist()
//退出功能
$("#layui-nav-item-child").on("click", function () {
    layer.confirm('确定退出吗', {icon: 3, title:'提示'}, function(index){
        location.href = "/login.html"
        localStorage.removeItem("token")
        layer.close(index);
      });
})
//渲染用户列表
function xuanran(user) {
    var name = user.nickname || user.username
    $("#welcome").html("欢迎&nbsp;&nbsp;" + name)
    if (user.user_pic==null) {
        $(".text-avatar").html(name[0].toUpperCase()).show()
        $(".layui-nav-img").hide()
    } else {
        $(".layui-nav-img").attr("src",user.user_pic).show()
        $(".text-avatar").hide()
    }
}
