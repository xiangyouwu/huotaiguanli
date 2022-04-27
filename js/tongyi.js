function shang() {
    $.ajax({
        url: '/my/userinfo',
        method: 'get',
        success: (data) => {

            // 获取成功，修改头像
            $('.welcome').html(`&nbsp;欢迎&nbsp; ${data.data.nickname ? data.data.nickname : data.data.username}`);   //欢迎
            if (data.data.user_pic) {
                $('.text-avatar').html(`<img src="${data.data.user_pic}" alt="" style="width:100%;border-radius:50%">`)
            } else {
                $('.text-avatar').html(data.data.nickname ? data.data.nickname.slice(0, 1) : data.data.username.slice(0, 1))
            }




            // 调用当前页面的内容
            abc(data);



        },
        error: (err) => {
            console.log(err);
        }
    })
}
shang();



// 退出
$('.logout').on('click', function () {
    // 清除token
    localStorage.removeItem('token');
    window.location.href = './sign.html';

})