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
    ///
    ///</summary>
    public partial class ht_user_money_log
    {
    ///<summary>
    ///
    ///</summary>
        public int id { get; set; }
    ///<summary>
    ///
    ///</summary>
        public Nullable<int> userid { get; set; }
    ///<summary>
    ///1提现
    ///</summary>
        public Nullable<int> type { get; set; }
    ///<summary>
    ///
    ///</summary>
        public Nullable<decimal> money { get; set; }
    ///<summary>
    ///
    ///</summary>
        public string remark { get; set; }
    ///<summary>
    ///
    ///</summary>
        public Nullable<System.DateTime> addtime { get; set; }
    ///<summary>
    ///
    ///</summary>
        public Nullable<int> status { get; set; }
    }
}
