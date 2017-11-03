Ext.define('SinoSoft.view.module.system.user.controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usercontroller',

    BeforeEdit: function (editor, context, eOpts) {
        var view = this.getView();
        if (context.record.data.State == 1) {
            switch (context.field) {
                case "RelateOrganName":
                    context.cancel = !view.canshenhe
                    break;
                default:
                    break;
            }
        } else {
            context.cancel = true;
        }
    },
    //grid添加事件------------------------------开始
    Add: function () {
        var view = this.getView();
        var setgrid = view.down("grid");
        BD.DoAjax({
            url: config.url + 'appid=1&method=253&token=' + BD.GuidCode,
            meg: '正在获取数据...',
            method: 'Post',
            success: function (datas) {
                setgrid.store.loadPage(1);
            },
            failure: function () {

            }
        });

    },
    //grid添加事件------------------------------结束

    //grid保存事件------------------------------开始
    Save: function (btn, e, eOpts, fun) {
        var view = this.getView();
        var setgrid = view.down("grid");
        var records = setgrid.store.getModifiedRecords();
        var senddatas = [];
        Ext.each(records, function (item) {
            senddatas.push(item.data);
        })
        if (records.length > 0) {
            BD.DoAjax({
                url: config.url + 'appid=1&method=254&token=' + BD.GuidCode,
                meg: '正在保存数据...',
                method: 'Post',
                params: {data: Ext.encode(senddatas)},
                success: function (datas) {
                    setgrid.store.commitChanges();
                    if (fun) {
                        fun();
                    }
                    Ext.toast({html: "保存成功", align: 't'});
                },
                failure: function () {

                }
            });
        }

    },
    //grid保存事件------------------------------结束
    Delete: function () {
        var view = this.getView();
        var setgrid = view.down("grid");
        var records = setgrid.getSelection();
        if (records.length > 0) {
            if (records[0].data.State == 1) {
                Ext.Msg.confirm("提示", "您确认要删除该费用记录？", function (choice) {
                    if (choice == 'yes') {
                        BD.DoAjax({
                            url: config.url + 'appid=1&method=255&token=' + BD.GuidCode,
                            meg: '正在执行...',
                            method: 'Post',
                            params: {cnid: records[0].data.CNId},
                            success: function (datas) {
                                setgrid.store.load();
                                Ext.toast({html: "删除成功", align: 't'});
                            },
                            failure: function () {

                            }
                        });
                    }
                });
            } else {
                Ext.toast({html: "单据状态错误", align: 't'});
            }
        } else {
            Ext.toast({html: "未选择行", align: 't'});
        }
    },
    TiJiao: function (btn, e, eOpts) {
        var view = this.getView();
        var grid = view.down("grid");
        var records = grid.getSelection();
        if (records.length > 0) {
            if (records[0].data.State == 1) {
                if (records[0].data.CTId && records[0].data.CostWorkerId && records[0].data.Cost && records[0].data.CostDate) {
                    if (records[0].dirty) {
                        this.Save(btn, e, eOpts, function () {
                            Ext.Msg.confirm("提示", "您确定要提交？提交后将不能对数据进行修改", function (choice) {
                                if (choice == 'yes') {
                                    BD.DoAjax({
                                        url: config.url + 'appid=1&method=265&token=' + BD.GuidCode,
                                        meg: '正在提交...',
                                        method: 'Post',
                                        params: {cnid: records[0].data.CNId},
                                        success: function (datas) {
                                            Ext.apply(records[0].data, datas);
                                            grid.view.refresh();
                                            Ext.toast({html: "提交成功", align: 't'});
                                        },
                                        failure: function () {

                                        }
                                    });
                                } else {
                                    return;
                                }
                            });
                        })
                    } else {
                        Ext.Msg.confirm("提示", "您确定要提交？提交后将不能对数据进行修改", function (choice) {
                            if (choice == 'yes') {
                                BD.DoAjax({
                                    url: config.url + 'appid=1&method=265&token=' + BD.GuidCode,
                                    meg: '正在提交...',
                                    method: 'Post',
                                    params: {cnid: records[0].data.CNId},
                                    success: function (datas) {
                                        Ext.apply(records[0].data, datas);
                                        grid.view.refresh();
                                        Ext.toast({html: "提交成功", align: 't'});
                                    },
                                    failure: function () {

                                    }
                                });
                            } else {
                                return;
                            }
                        });
                    }
                } else {
                    Ext.toast({html: "提交时费用类型、人员、费用、产生时间为必填项", align: 't'});
                }
            } else {
                Ext.toast({html: "单据状态错误", align: 't'});
            }
        } else {
            Ext.toast({html: "未选择行", align: 't'});
        }
    },
    Shenhe: function () {
        var view = this.getView();
        var setgrid = view.down("grid");
        var records = setgrid.getSelection();
        if (records.length > 0) {
            if (records[0].data.SHOrganId == BD.WorkerInfo.OrganId) {
                if (records[0].data.State == 2) {
                    Ext.Msg.show({
                        title: "提示",
                        message: "请选择审核结果，审核通过请点击是，不通过请点击否，放弃审核请点击取消",
                        buttons: Ext.Msg.YESNOCANCEL,
                        icon: Ext.Msg.QUESTION,
                        fn: function (btn) {
                            if (btn === 'yes') {
                                BD.DoAjax({
                                    url: config.url + 'appid=1&method=266&token=' + BD.GuidCode,
                                    meg: '正在审核...',
                                    method: 'Post',
                                    params: {cnid: records[0].data.CNId, state: 1},
                                    success: function (datas) {
                                        Ext.apply(records[0].data, datas);
                                        setgrid.view.refresh();
                                        Ext.toast({html: "审核成功", align: 't'});
                                    },
                                    failure: function () {

                                    }
                                });
                            } else if (btn === 'no') {
                                BD.DoAjax({
                                    url: config.url + 'appid=1&method=266&token=' + BD.GuidCode,
                                    meg: '正在审核...',
                                    method: 'Post',
                                    params: {cnid: records[0].data.CNId, state: 2},
                                    success: function (datas) {
                                        Ext.apply(records[0].data, datas);
                                        setgrid.view.refresh();
                                        Ext.toast({html: "审核成功", align: 't'});
                                    },
                                    failure: function () {

                                    }
                                });
                            } else {
                            }
                        }
                    });
                } else {
                    Ext.toast({html: "单据状态错误", align: 't'});
                }
            } else {
                Ext.toast({html: "您不具有对该记录的审核权限", align: 't'});
            }
        } else {
            Ext.toast({html: "未选择行", align: 't'});
        }
    },
    Statement: function () {
        var view = this.getView();
        var setgrid = view.down("grid");
        var records = setgrid.getSelection();
        if (records.length > 0) {
            if (records[0].data.State == 3) {
                Ext.Msg.confirm("提示", "您确认要结算？", function (choice) {
                    if (choice == 'yes') {
                        BD.DoAjax({
                            url: config.url + 'appid=1&method=267&token=' + BD.GuidCode,
                            meg: '正在结算...',
                            method: 'Post',
                            params: {cnid: records[0].data.CNId},
                            success: function (datas) {
                                Ext.apply(records[0].data, datas);
                                setgrid.view.refresh();
                                Ext.toast({html: "结算成功", align: 't'});
                            },
                            failure: function () {

                            }
                        });
                    }
                });
            } else {
                Ext.toast({html: "单据状态错误", align: 't'});
            }
        } else {
            Ext.toast({html: "未选择行", align: 't'});
        }
    },
    ShowPJ: function () {
        var view = this.getView();
        var setgrid = view.down("grid");
        var records = setgrid.getSelection();
        if (records.length > 0) {
            Ext.create("ServicePlatformWeb.view.costnote.TicketWin", {
                note: records[0].data
            }).show();
        } else {
            Ext.toast({html: "未选择行", align: 't'});
        }
    },

    afterRender: function () {
        var tips = [{
            target: this.lookup('rich').el,
            cls: 'Wrapper-headerbar-btn-tipbar',
            // anchor: 'bottom',
            width: '49.2%',
            autoHide: false,
            closable: false,
            // style: {
            //     'background-color': '#fff',
            //     'border-color': '#5eb9f0',
            //     'transform': 'translateX(-2.5%) translateY(-2.5%)',
            //     'padding': 0
            // },
            layout: {
                type: 'table',
                columns: 1,
                tableAttrs: {
                    style: {
                        width: '100%'
                    }
                }
            },
            defaults: {
                border: true,
                padding: 5,
                style: {
                    'margin-bottom': '0px'
                }
            },
            bbar:{
                cls:'Wrapper-headerbar-btn-tipbar-bottombar',
                padding:0,
                items:[
                    {
                        width:'100%',
                        xtype:'container',
                        layout:'column',
                        style:{
                            'padding':'10px 0 10px 0'
                        },
                        items:[
                            {
                                cls: 'Wrapper-headerbar-btn',
                                xtype: 'button',
                                text: '重置',
                                style:{
                                    'background-color': '#5db9f0'
                                }
                            },
                            {
                                cls: 'Wrapper-headerbar-btn',
                                xtype: 'button',
                                text: '查询',
                                style:{
                                    'background-color': '#bcbcbc'
                                }
                            },
                            {
                                cls: 'Wrapper-headerbar-btn-more',
                                xtype: 'button',
                                text: '其他查询条件省略',
                            }
                        ]
                    }
                ]
            },
            items: [
                {
                    width: 465,
                    xtype: 'textfield',
                    fieldLabel: '姓名',
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '性别',
                    name: 'remember',
                    items: [
                        {
                            boxLabel: '男',
                        },
                        {
                            boxLabel: '女',
                        },
                    ]
                },
                {
                    xtype: 'form',
                    frame: true,
                    layout: 'column',
                    style: {
                        'border': 0
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: '任意年龄',
                        vtype: 'daterange',
                    }, {
                        xtype: 'tbtext',
                        text: '至',
                        style: {
                            'line-height': '32px'
                        }
                    }, {
                        itemId: 'enddt',
                        vtype: 'daterange',
                    }
                    ]
                },
                {
                    xtype: 'form',
                    frame: true,
                    layout: 'column',
                    style: {
                        'border': 0
                    },
                    defaultType: 'datefield',
                    items: [{
                        fieldLabel: '出生年月',
                        vtype: 'daterange',
                    }, {
                        xtype: 'tbtext',
                        text: '至',
                        style: {
                            'line-height': '32px'
                        }
                    }, {
                        vtype: 'daterange',
                    }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '民族',
                    width:'100%',
                    items: [
                        {
                            boxLabel: '汉族',
                        },
                        {
                            boxLabel: '少数民族',
                        },
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '政治面貌',
                    width:'100%',
                    items: [
                        {
                            boxLabel: '中共党员',
                        },
                        {
                            boxLabel: '民主党派',
                        },
                        {
                            boxLabel: '无党派',
                        },
                        {
                            boxLabel: '群众',
                        },
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '最高全日制学历',
                    width:'100%',
                    items: [
                        {
                            boxLabel: '研究生',
                        },
                        {
                            boxLabel: '本科',
                        },
                        {
                            boxLabel: '大专',
                        },
                        {
                            boxLabel: '中专',
                        },
                        {
                            boxLabel: '其他',
                        },
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '最高学历',
                    width:'100%',
                    items: [
                        {
                            boxLabel: '研究生',
                        },
                        {
                            boxLabel: '本科',
                        },
                        {
                            boxLabel: '大专',
                        },
                        {
                            boxLabel: '中专',
                        },
                        {
                            boxLabel: '其他',
                        },
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '干部类别',
                    width:'100%',
                    items: [
                        {
                            boxLabel: '中管干部',
                        },
                        {
                            boxLabel: '省管干部',
                        },
                        {
                            boxLabel: '市管干部',
                        },
                        {
                            boxLabel: '县管干部',
                        },
                        {
                            boxLabel: '其他',
                        },
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '领导职务',
                    width:'100%',
                    items: [
                        {
                            boxLabel: '领导职务',
                        },
                        {
                            boxLabel: '非领导职务',
                        },
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: '最高职务级别',
                    width:'100%',
                    items: [
                        {
                            boxLabel: '国家级正职',
                        },
                        {
                            boxLabel: '国家级副职',
                        },
                        {
                            boxLabel: '省部级正职',
                        },
                        {
                            boxLabel: '厅局级',
                        },
                        {
                            boxLabel: '县处级',
                        },
                    ]
                },
            ]
        }];

        this.tips = Ext.Array.map(tips, function (cfg) {
            cfg.showOnTap = true;
            return new Ext.tip.ToolTip(cfg);
        });
    },
});