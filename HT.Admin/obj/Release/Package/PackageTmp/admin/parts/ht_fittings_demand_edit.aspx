﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ht_fittings_demand_edit.aspx.cs" Inherits="HT.Admin.admin.parts.ht_fittings_demand_edit" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>编辑配件需求信息</title>
    <link href="../../scripts/artdialog/ui-dialog.css" rel="stylesheet" type="text/css" />
    <link href="../skin/default/style.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" charset="utf-8" src="../../scripts/jquery/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="../../scripts/jquery/Validform_v5.3.2_min.js"></script>
    <script type="text/javascript" charset="utf-8" src="../../scripts/artdialog/dialog-plus-min.js"></script>
    <script type="text/javascript" src="../../scripts/webuploader/webuploader.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="../../editor/kindeditor-min.js"></script>
    <script type="text/javascript" charset="utf-8" src="../js/uploader.js"></script>
    <script type="text/javascript" charset="utf-8" src="../js/laymain.js"></script>
    <script type="text/javascript" charset="utf-8" src="../js/common.js"></script>
    <script type="text/javascript">
        $(function () {
            //初始化表单验证
            $("#form1").initValidform();
        });
    </script>
</head>
<body class="mainbody">
    <form id="form1" runat="server">
        <!--导航栏-->
        <div class="location">

            <a href="../center.aspx" class="home"><i></i><span>首页</span></a>
            <i class="arrow"></i>
            <span>配件需求信息管理</span>
            <i class="arrow"></i>
            <span>编辑配件需求信息</span>
        </div>
        <div class="line10"></div>
        <!--/导航栏-->

        <!--内容-->
        <div class="content-tab-wrap">
            <div id="floatHead" class="content-tab">
                <div class="content-tab-ul-wrap">
                    <ul>
                        <li><a href="javascript:;" onclick="tabs(this);" class="selected">基本信息</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="tab-content">
            <dl>
                <dt>状态</dt>
                <dd>
                    <div class="rule-multi-radio">
                        <asp:RadioButtonList runat="server" ID="status" RepeatDirection="Horizontal">
                            <asp:ListItem Value="1" Selected="True">待审核</asp:ListItem>
                            <asp:ListItem Value="2">已通过</asp:ListItem>
                        </asp:RadioButtonList>
                    </div>
                    <span class="Validform_checktip">*</span>
                </dd>
            </dl>
            <dl>
                <dt>封面图片</dt>
                <dd>
                    <asp:Image ID="thumbnail_img" runat="server" CssClass="upload-path upload-images" Width="200" Height="200" />
                </dd>
            </dl>
            <dl>
                <dt>标题</dt>
                <dd>
                    <asp:TextBox ID="title" runat="server" CssClass="input normal" ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>
            <dl>
                <dt>简介</dt>
                <dd>
                    <asp:TextBox ID="summary" runat="server" CssClass="input normal"  ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>

            <dl>
                <dt>联系人</dt>
                <dd>
                    <asp:TextBox ID="contact" runat="server" CssClass="input normal" ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>
            <dl>
                <dt>电话</dt>
                <dd>
                    <asp:TextBox ID="mobile" runat="server" CssClass="input normal" ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>
            <dl>
                <dt>价格</dt>
                <dd>
                    <asp:TextBox ID="price" runat="server" CssClass="input normal" ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>
            <dl>
                <dt>品牌</dt>
                <dd>
                    <asp:TextBox ID="brand" runat="server" CssClass="input normal" ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>
            <dl>
                <dt>型号</dt>
                <dd>
                    <asp:TextBox ID="model" runat="server" CssClass="input normal" ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>
            <dl>
                <dt>尺码</dt>
                <dd>
                    <asp:TextBox ID="size" runat="server" CssClass="input normal" ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>
            <dl>
                <dt>产品详情</dt>
                <dd>
                    <asp:TextBox ID="details" runat="server" CssClass="input normal" ReadOnly="true"></asp:TextBox>
                </dd>
            </dl>
            <dl>
                <dt>轮播图</dt>
                <dd>
                    <div class="photo-list">
                        <ul>
                            <asp:Repeater ID="rpt_image" runat="server">
                                <ItemTemplate>
                                    <li>
                                        <img src="<%#Eval("imgurl")%>" />
                                    </li>
                                </ItemTemplate>
                            </asp:Repeater>
                        </ul>
                    </div>
                </dd>
            </dl>
        </div>

        <!--/内容-->

        <!--工具栏-->
        <div class="page-footer">
            <div class="btn-list">
                <asp:Button ID="btnSubmit" runat="server" Text="提交保存" CssClass="btn" OnClick="btnSubmit_Click" />
                <input name="btnReturn" type="button" value="返回上一页" class="btn yellow" onclick="javascript: history.back(-1);" />
            </div>
            <div class="clear"></div>
        </div>
        <!--/工具栏-->

    </form>
</body>
</html>



