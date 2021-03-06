﻿var listVm = new Vue({
    el: '.main',
    data: {
        mobile: '',
        code: '',
        url: _url,
        itvTm: 0,
        itvOb:-1,
        isLoading: false
    },
    methods: {
        setInterval: function (num) {
            var _this = this;
            _this.itvTm = num;
            _this.itvOb = setInterval(function () {
                _this.itvTm--;
                if (_this.itv <= 0) clearInterval(_this.itvOb);
            },1000)
        },
        getCode: function () {
            var _this = this;
            if (_this.isLoading) return;
            if (!IsPhone(_this.mobile)) {
                alert('手机号格式错误', null, null);
                return;
            }
            _this.isLoading = true;
            $.ajax({
                type: 'post',
                url: '/User/GetCode',
                data: {
                    mobile: _this.mobile
                },
                dataType: 'json',
                success: function (resp) {
                    _this.isLoading = false;
                    //layer.msg(resp.msg);
                    if (resp.status) {
                        layer.msg("测试验证码：" + resp.data);
                        _this.setInterval(90);
                    } else {
                    }
                }
            });
        },
        post: function () {
            var _this = this;
            if (_this.isLoading) return;
            if (!_this.mobile) {
                alert('请输入手机号', null, null);
                return;
            }
            if (!IsPhone(_this.mobile)) {
                alert('手机号格式错误', null, null);
                return;
            }
            if (!_this.code) {
                alert('请输入验证码', null, null);
                return;
            }
            _this.isLoading = true;
            $.ajax({
                type: 'post',
                url: '/User/PostMobile',
                data: {
                    mobile: _this.mobile,
                    code: _this.code
                },
                dataType: 'json',
                success: function (resp) {
                    _this.isLoading = false;
                    layer.msg(resp.msg, {}, function () {
                        if (resp.status) location.href = _this.url;
                    })
                }
            });
        }
    }
});