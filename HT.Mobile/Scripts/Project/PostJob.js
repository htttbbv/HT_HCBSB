﻿
// 发布
var vue = new Vue({
    el: '.main',
    data: {
		model: {
            cateid: 4,//类型 4司机求职
            cate: "司机求职",//司机求职
			validity_num:"",//有效期
			validity_unit: "天",//有效期单位 天,月
            start_province: "",//工作地区省份
            start_city: '', //工作地区城市
            start_district: '', //工作区域
            stop_province: '',//籍贯省份
            stop_city: '',//籍贯
            stop_district: '',//籍贯
            use_type: '',//驾照等级
            car_length: '', //驾龄
            car_style: '',//驾驶类型
			other_remark: "",//其它补充
			contact_name: "",//联系人
			contact_phone: "",//联系电话
            set_top: "",//置顶类型  空不置顶 1分类 2全站
			set_top_money: 0,//置顶金额
			reward_money: 0,//打赏金额
			total:0//需支付金额
        },
        useTypeData: [],//驾照等级列表
        carLengthData: [],//驾龄列表
        carStyleData: [],//驾驶类型列表
		rewardMoneyData: [],//打赏金额列表
		top_cate_select: false,//是否选中分类置顶
        top_all_select: false,//是否选中全站置顶
        reward_select: false,//是否选中赏福利
		top_cate_money: 0,//分类置顶金额
		top_all_money: 0,//全站置顶金额
        pub_job_amount: 0,// 发布费用
        validity_to_time: 0,// 有效期至
        validity_to_time_str: '',// 有效期至
        interval:-1,
        select: {
            showCityStart: false,
            showCityStop: false
		}
	},
    watch: {
        'pub_job_amount': function (val, oldval) {
            this.calcTotal();
        },
		'model.reward_money': function (val, oldval) {
				this.calcTotal();
			},
	     'model.set_top_money': function (val, oldval) {
				this.calcTotal();
			}
	},
    methods: {
        init: function () {
            
            this.loadCateData('use_type', 60);//驾照等级
            this.loadCateData('car_length', 82);//驾龄
            this.loadCateData('car_style', 72);//驾驶类型
            this.loadCateData('reward_money', 55);//打赏福利列表

            this.loadConfigData('top_cate_money');//分类置顶金额
            this.loadConfigData('top_all_money');//全站置顶金额
            this.loadConfigData('pub_job_amount');//发布费用
            this.loadConfigData('pub_job_value');//发布时长
            this.loadConfigData('pub_job_unit');//发布单位

        },
        loadCateData: function (code, cid) {
            var _this = this;
            $.ajax({
                type: 'post',
                url: '/Home/CateList',
                data: { cid: cid },
                dataType: 'json',
                success: function (resp) {
                    if (resp.status) {
						if (code == 'use_type') { _this.useTypeData = resp.result };
						if (code == 'car_length') { _this.carLengthData = resp.result };
						if (code == 'car_style') { _this.carStyleData = resp.result };
						if (code == 'reward_money') { _this.rewardMoneyData = resp.result };
						
                    }
                }
            });
        },
        loadConfigData: function (configName) {
            var _this = this;
            $.ajax({
                type: 'post',
                url: '/Config/Get',
                data: { configName: configName },
                dataType: 'json',
                success: function (resp) {
                    if (resp.status) {
                        if (configName == 'top_cate_money') { _this.top_cate_money = parseFloat(resp.result); _this.topCate(); };                          
                        if (configName == 'top_all_money') { _this.top_all_money = parseFloat(resp.result); };
                        if (configName == 'pub_job_amount') { _this.pub_job_amount = parseFloat(resp.result); };
                        if (configName == 'pub_job_value') { _this.model.validity_num = parseFloat(resp.result); _this.getInterval(); };
                        if (configName == 'pub_job_unit') { _this.model.validity_unit = resp.result; _this.getInterval(); };
                    }
                }
            });
        },//配置
        getInterval: function () {
            var _this = this;
            if (_this.interval == -1 && !!_this.model.validity_num && !!_this.model.validity_unit) {
                var value = new Date();
                if (_this.model.validity_unit == '月') {
                    value.setMonth(value.getMonth() + _this.model.validity_num);
                }
                else if (_this.model.validity_unit == '天') {
                    value.setDate(value.getDate() + _this.model.validity_num);
                }
                _this.validity_to_time = value.getTime();
                _this.getTime();
                //_this.interval = setInterval(function () {
                //    _this.validity_to_time += 1000000;
                //    _this.getTime();
                //}, 1000);
            }
        },
        getTime: function () {
            var _this = this;
            var value = new Date(_this.validity_to_time);
            var year = value.getFullYear();
            var month = value.getMonth() + 1 < 10 ? "0" + (value.getMonth() + 1) : value.getMonth() + 1;
            var day = value.getDate() < 10 ? "0" + value.getDate() : value.getDate();
            var hour = value.getHours() < 10 ? "0" + value.getHours() : value.getHours();
            var minute = value.getMinutes() < 10 ? "0" + value.getMinutes() : value.getMinutes();
            _this.validity_to_time_str = year + "-" + month + "-" + day + " " + hour + ":" + minute;
        },
		calcTotal: function () {//计算总金额
			var _this = this;
            _this.model.total = 0;
            _this.model.total += _this.pub_job_amount;
			if (_this.model.set_top_money > 0) {
				_this.model.total += parseFloat(_this.model.set_top_money);
			}
			if (_this.model.reward_money > 0) {
				_this.model.total += parseFloat(_this.model.reward_money);
			}
			//console.log(["model", _this.model]);
		},
		topCate: function () {//分类置顶点击
			var _this = this;
			_this.top_cate_select = !_this.top_cate_select;
			if (_this.top_cate_select) {
				_this.top_all_select = false;
				_this.model.set_top_money = _this.top_cate_money;
				_this.model.set_top = "1";
				
			} else {
				_this.model.set_top_money = 0;
				_this.model.set_top = "";
			}
		},
		topAll: function () {//全站置顶点击
			var _this = this;
			_this.top_all_select = !_this.top_all_select;
			if (_this.top_all_select) {
				_this.top_cate_select = false;
				_this.model.set_top_money = _this.top_all_money;
				_this.model.set_top = "2";
			} else {
				_this.model.set_top_money = 0;
				_this.model.set_top = "";
			}
        },
        rewardClick: function () {//打赏福利点击
            var _this = this;
            _this.reward_select = !_this.reward_select;
            if (_this.reward_select) {

            } else {
                _this.model.reward_money = 0;

            }
        },
		checkInput: function () {//检查输入
			//return true;
			var _this = this;
			if (_this.model.validity_num == "" || _this.model.validity_num<=0) {
				alert("请输入有效期");
				return false;
			}
			if (_this.model.start_city == "" ) {
                alert("请选择请选择工作地区");
				return false;

			}
			if (_this.model.stop_city == "") {
				alert("请选择籍贯");
				return false;

			}

			if (_this.model.contact_name == "") {
				alert("请输入联系人");
				return false;

			}
			if (_this.model.contact_phone == "") {
				alert("请输入联系电话");
				return false;
			}
			return true;

		},
		submit: function () {//提交
            var _this = this;
            //console.log(_this.model);
            //return false;
			if (!_this.checkInput()) {
				return false;
            }
			//confirm("提示", "确定发布", "发布", "取消", function () {
				$.ajax({
					type: 'post',
                    url: '/Project/PostSubmit',
					data: _this.model,
					dataType: 'json',
					success: function (resp) {
						if (resp.status) {
							window.location.href = "/User/Pay/"+resp.result.order_no;
						} else {
							alert(resp.msg);
						}
					}
				});

			//}, function () {
			//	layer.closeAll();
		 //   })
		}
    }
});
vue.init();