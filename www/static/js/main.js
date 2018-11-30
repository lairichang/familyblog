$(function(){
    /* 设置内容区域的高度 */
    $("#contentdiv").height($(window).height()-$("#daohang").height() - $(".footer").height());
    /* 加载菜单并加载导航树 */
    loadMenu();
    


    /**
     * 导航缩放控制
     */
    $("#menudiv").mouseover(function(e){
        $.UIkit.offcanvas.offcanvas.show('#menupage');
    });

    /**
     * 导航菜单点击颜色控制
     */
    $(".uk-nav-offcanvas>li>a").click(function(e){
        $(".uk-nav-offcanvas>li>a").css({background:"#2b5a83",color:"#fff",outline:"0"});
        $(this).css({background:"#3985c7",color:"#fff",outline:"0"});
    });

    /**
     * 加载菜单
     */
    function loadMenu(){
        //异步抓取用户菜单

        //构造菜单树
        menuClick();
    }

    /**
     * 菜单点击事件
     * @param id 菜单id
     * @param name 菜单名称
     * @param url 需要跳转的url
     */
    function menuClick(id,name,url){
        $('#contentdiv').html('');
        $('#contentdiv').panel({
            href:"/platform/manage_users_url/"
        });     
    }
})

