//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace HT.Model
{
    using System;
    using System.Collections.Generic;
    
    ///<summary>
    ///验证码发送记录
    ///</summary>
    public partial class ht_sms_record
    {
    ///<summary>
    ///
    ///</summary>
        public int id { get; set; }
    ///<summary>
    ///手机号
    ///</summary>
        public string mobile { get; set; }
    ///<summary>
    ///验证码
    ///</summary>
        public string code { get; set; }
    ///<summary>
    ///验证码类型: 1.注册 2.找回密码 3.修改密码 4.修改绑定手机
    ///</summary>
        public Nullable<int> codetype { get; set; }
    ///<summary>
    ///过期时间
    ///</summary>
        public Nullable<System.DateTime> expirestime { get; set; }
    ///<summary>
    ///添加时间
    ///</summary>
        public Nullable<System.DateTime> addtime { get; set; }
    }
}
