﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class Entities : DbContext
    {
        public Entities()
            : base("name=Entities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<ht_account> ht_account { get; set; }
        public virtual DbSet<ht_ad> ht_ad { get; set; }
        public virtual DbSet<ht_ad_category> ht_ad_category { get; set; }
        public virtual DbSet<ht_category> ht_category { get; set; }
        public virtual DbSet<ht_comm_relation> ht_comm_relation { get; set; }
        public virtual DbSet<ht_commission> ht_commission { get; set; }
        public virtual DbSet<ht_help> ht_help { get; set; }
        public virtual DbSet<ht_manager> ht_manager { get; set; }
        public virtual DbSet<ht_manager_log> ht_manager_log { get; set; }
        public virtual DbSet<ht_manager_role> ht_manager_role { get; set; }
        public virtual DbSet<ht_manager_role_value> ht_manager_role_value { get; set; }
        public virtual DbSet<ht_navigation> ht_navigation { get; set; }
        public virtual DbSet<ht_news_cate> ht_news_cate { get; set; }
        public virtual DbSet<ht_order> ht_order { get; set; }
        public virtual DbSet<ht_order_appraise> ht_order_appraise { get; set; }
        public virtual DbSet<ht_payment> ht_payment { get; set; }
        public virtual DbSet<ht_pinpai> ht_pinpai { get; set; }
        public virtual DbSet<ht_region> ht_region { get; set; }
        public virtual DbSet<ht_review> ht_review { get; set; }
        public virtual DbSet<ht_single_page> ht_single_page { get; set; }
        public virtual DbSet<ht_sms_config> ht_sms_config { get; set; }
        public virtual DbSet<ht_sms_email> ht_sms_email { get; set; }
        public virtual DbSet<ht_sms_record> ht_sms_record { get; set; }
        public virtual DbSet<ht_sms_template> ht_sms_template { get; set; }
        public virtual DbSet<ht_sys_config> ht_sys_config { get; set; }
        public virtual DbSet<ht_user> ht_user { get; set; }
        public virtual DbSet<ht_user_message> ht_user_message { get; set; }
        public virtual DbSet<ht_user_money_log> ht_user_money_log { get; set; }
        public virtual DbSet<ht_user_point_log> ht_user_point_log { get; set; }
        public virtual DbSet<ht_news> ht_news { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
    }
}
