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
    
    public partial class ht_sms_record
    {
        public int id { get; set; }
        public string mobile { get; set; }
        public string code { get; set; }
        public Nullable<int> codetype { get; set; }
        public Nullable<System.DateTime> expirestime { get; set; }
        public Nullable<System.DateTime> addtime { get; set; }
    }
}
