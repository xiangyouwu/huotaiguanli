// 点击登录，显示注册
$('.deng').click(() => {
    $('.zc').show();
    $('.dl').hide();
})
// 点击注册，显示登录
$('.zhu').click(() => {
    $('.zc').hide();
    $('.dl').show();
})

// 密码验证和验证两次密码相同
let form = layui.form;
form.verify({
    //我们既支持上述函数式的方式，也支持下述数组的形式
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    pass: [
        /^[\S]{6,12}$/
        , '密码必须6到12位，且不能出现空格'
    ],
    respass: function (e) {
        let pass = $('.zc [name="pass"]').val();
        if (pass !== e) {
            return '两次密码不一样'
        }
    }
});


// 注册验证
$('.z').on('submit', function (e) {
    var e = e || window.e;
    e.preventDefault();

    let username = $('.z [name="name"]').val();
    let password = $('.z [name="pass"]').val();
    // ajax注册
    $.ajax({
        url: 'http://www.liulongbin.top:3007/api/reguser',
        method: 'post',
        data: {
            username,
            password
        },
        success: function (data) {
            // 
            if (data.status == 1) {
                return layer.msg(data.message);
            }

            // 注册成功跳转到登录
            layer.msg('注册成功');
            $('.zhu').click();
        }
    })
})


// 登录验证
$('.d').on('submit', function (e) {
    var e = e || window.e;
    e.preventDefault();

    let username = $('.d [name="name"]').val();
    let password = $('.d [name="pass"]').val();
    // ajax登录
    $.ajax({
        url: 'http://www.liulongbin.top:3007/api/login',
        method: 'post',
        data: {
            username,
            password
        },
        success: function (data) {
            // 登录失败
            if (data.status == 1) {
                return layer.msg(data.message);
            }

            // 登录成功
            layer.msg(data.message);
            localStorage.setItem('token', data.token);
            window.location.href = '../html/index.html';
        },
        error: function (err) {
            console.log(err);
        }
    })
})