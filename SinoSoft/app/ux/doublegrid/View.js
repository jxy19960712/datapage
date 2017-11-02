Ext.define('SinoSoft.ux.doublegrid.View', {
    extend: 'Ext.container.Container',
    xtype: 'doublegridview',
    requires: [
        'SinoSoft.ux.doublegrid.Controller'
    ],
    controller: 'doublegridcontroller',
    //viewModel:'tree',

    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    config: {
        showTree: false,
        showSub: false,
        tree: {
            width: 200,
            frame:true,
            url: 'system/classCollect/templet/tree?entityName=DEP_B001',
            rootText: '',
            isAjax: true,//如果是ajax则使用ajaxtreeview的动态模式
            expandByAjax: false,//，否则只是第一次使用ajax加载
            treeValueField: '',//点击tree后需要传给主集的属性名称
            //其他参数使用tree已有的参数

        },
        master: {
            setName: '人员信息',//作为标题显示在主集上
            setId:14,
            columnUrl: 'infomaintain/getInfoItems4GridBySetId',
            storeUrl: 'infomaintain/findMasterSetDataByPage',
            storeField: '',//tree treeValueField属性传过来的值在store参数中的字段名称
           
        },
        sub: {
            defaults: {
                columnParamName: 'setName',
                columnUrl: 'infomaintain/getInfoItems4GridBySetName',
                masterParamName: 'EMP_ID',
                storeParamName: 'masterSetId',
                storeUrl: 'infomaintain/findSubSetDataByPage',
            },
            items: [
                { setId: 'EMP_A005', title: '学历及学位' },
                { setId: 'EMP_A195', title: '专利情况信息' },
                { setId: 'EMP_A010', title: '专业技术职务' },
                { setId: 'EMP_A225', title: '保险福利信息' },
            ],
        },
    },
    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    items: [
        
    ],
    //masterLoad: function () {
    //    var me = this;
    //    var mastergrid = me.lookup('mastergrid');
    //    mastergrid.store.load();
    //}
    addToolBar:function (items){
    	var me = this;
    	var mastertbar = me.lookup('mastertbar');
    	mastertbar.add(items);
    },
    //添加主集的pageBar，分页条的bar
    addMasterPagingBar:function(items){
    	var me = this;
    	var masterpagingbar = me.lookup('masterpagingbar');
    	masterpagingbar.add(items);
    }
});
