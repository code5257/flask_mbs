$(function () {
    // console.log(1111)
    $('#email input').blur(function () {

        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式

        //格式是否正确
        if ($(this).val() == '') return

        // 格式是否正确
        if (reg.test($(this).val())) {  // 符合
            // 账号是否可用 [必须发给服务器]
            // 只需要 服务器 提示 可用true/不可用false
            // 通过ajax和服务器通信

            // jQuery.get( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
            // jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
            // jQuery.getJSON( url [, data ] [, success(data, textStatus, jqXHR) ] )

            request_data = {
                'email': $(this).val()
            }

            $.get('/apis/v1/checkemail/', request_data, function (response) {   // 回调函数
                // 客户端接受到数据之后的处理
                console.log(response)
                if (response.status) {   // 1可用
                    return
                    // $('#email-t').attr('data-content', '恭喜你账号是可用').popover('hide')
                    //
                    // $('#email').removeClass('has-error').addClass('has-success')
                    // $('#email>span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                } else {    // 0不可用
                    // $('#email-t').attr('data-content', response.msg).popover('show')
                    //
                    // $('#email').removeClass('has-success').addClass('has-error')
                    // $('#email>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                    alert('该邮箱已被注册')
                }
            })


        } else {    // 不符合
            alert('输入邮箱有误')
        }
    })

    $('#tel input').blur(function () {
        console.log(123)
        var reg = new RegExp("^[1][0-9]{10}$"); //正则表达式

        if ($(this).val() == '') return

        // 格式是否正确
        if (reg.test($(this).val())) {  // 符合
            // 账号是否可用 [必须发给服务器]
            // 只需要 服务器 提示 可用true/不可用false
            // 通过ajax和服务器通信

            // jQuery.get( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
            // jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
            // jQuery.getJSON( url [, data ] [, success(data, textStatus, jqXHR) ] )

            request_data = {
                'tel': $(this).val()
            }

            $.get('/apis/v1/checketel/', request_data, function (response) {   // 回调函数
                // 客户端接受到数据之后的处理
                console.log(response)
                if (response.status) {   // 1可用
                    return
                } else {    // 0不可用
                    alert('该手机号已被注册')
                }
            })


        } else {    // 不符合
            alert('输入手机号有误')
        }

    })

});
