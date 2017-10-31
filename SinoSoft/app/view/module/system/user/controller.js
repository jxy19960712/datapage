Ext.define('SinoSoft.view.module.system.user.controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usercontroller',

    BeforeEdit: function (editor, context, eOpts) {
        var view = this.getView();
        if (context.record.data.State==1) {
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
        if (records.length>0) {
            BD.DoAjax({
                url: config.url + 'appid=1&method=254&token=' + BD.GuidCode,
                meg: '正在保存数据...',
                method: 'Post',
                params: { data: Ext.encode(senddatas) },
                success: function (datas) {
                    setgrid.store.commitChanges();
                    if (fun) {
                        fun();
                    }
                    Ext.toast({ html: "保存成功", align: 't' });
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
                            params: { cnid: records[0].data.CNId },
                            success: function (datas) {
                                setgrid.store.load();
                                Ext.toast({ html: "删除成功", align: 't' });
                            },
                            failure: function () {

                            }
                        });
                    }
                });
            } else {
                Ext.toast({ html: "单据状态错误", align: 't' });
            }
        } else {
            Ext.toast({ html: "未选择行", align: 't' });
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
                                        params: { cnid: records[0].data.CNId },
                                        success: function (datas) {
                                            Ext.apply(records[0].data, datas);
                                            grid.view.refresh();
                                            Ext.toast({ html: "提交成功", align: 't' });
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
                                    params: { cnid: records[0].data.CNId },
                                    success: function (datas) {
                                        Ext.apply(records[0].data, datas);
                                        grid.view.refresh();
                                        Ext.toast({ html: "提交成功", align: 't' });
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
                    Ext.toast({ html: "提交时费用类型、人员、费用、产生时间为必填项", align: 't' });
                }
            } else {
                Ext.toast({ html: "单据状态错误", align: 't' });
            }
        } else {
            Ext.toast({ html: "未选择行", align: 't' });
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
                                    params: { cnid: records[0].data.CNId, state: 1 },
                                    success: function (datas) {
                                        Ext.apply(records[0].data, datas);
                                        setgrid.view.refresh();
                                        Ext.toast({ html: "审核成功", align: 't' });
                                    },
                                    failure: function () {

                                    }
                                });
                            } else if (btn === 'no') {
                                BD.DoAjax({
                                    url: config.url + 'appid=1&method=266&token=' + BD.GuidCode,
                                    meg: '正在审核...',
                                    method: 'Post',
                                    params: { cnid: records[0].data.CNId, state: 2 },
                                    success: function (datas) {
                                        Ext.apply(records[0].data, datas);
                                        setgrid.view.refresh();
                                        Ext.toast({ html: "审核成功", align: 't' });
                                    },
                                    failure: function () {

                                    }
                                });
                            } else {
                            }
                        }
                    });
                } else {
                    Ext.toast({ html: "单据状态错误", align: 't' });
                }
            } else {
                Ext.toast({ html: "您不具有对该记录的审核权限", align: 't' });
            }
        } else {
            Ext.toast({ html: "未选择行", align: 't' });
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
                            params: { cnid: records[0].data.CNId },
                            success: function (datas) {
                                Ext.apply(records[0].data, datas);
                                setgrid.view.refresh();
                                Ext.toast({ html: "结算成功", align: 't' });
                            },
                            failure: function () {

                            }
                        });
                    }
                });
            } else {
                Ext.toast({ html: "单据状态错误", align: 't' });
            }
        } else {
            Ext.toast({ html: "未选择行", align: 't' });
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
            Ext.toast({ html: "未选择行", align: 't' });
        }
    },
});