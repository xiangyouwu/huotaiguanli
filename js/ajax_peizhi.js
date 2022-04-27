$.ajaxPrefilter(function (opt) {
    opt.url = 'http://www.liulongbin.top:3007' + opt.url;

    if (opt.url.indexOf('/my/') !== -1) {
        // 设置请求头
        opt.headers = {
            // 不一定会有这个值，所以需要或
            Authorization: localStorage.getItem('token') || ''
        }
    }

    // 无论成功或者失败都会执行
    opt.complete = function (e) {
        // console.log(e.responseJSON);

        // 获取失败
        if (e.responseJSON.status !== 0) {
            layer.msg(e.responseJSON.message);
            // window.location.href = './sign.html';
            return;
        }
    }
})