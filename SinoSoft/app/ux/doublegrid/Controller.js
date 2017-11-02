Ext.define('SinoSoft.ux.doublegrid.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.doublegridcontroller',
    requires: [
        'SinoSoft.common.LocalData'
    ],
    masterConQuerys:{},//组合查询参数
    afterRender: function () {
        var view = this.getView(),
            controller = this,
            showTree = view.getShowTree(),
            showSub = view.getShowSub(),
            tree = view.getTree(),
            master = view.getMaster(),
            sub = view.getSub();

        var loadcount = 0;
        var maxloadcount = showTree ? 2 : 1;
        var treeview = null;
        if (showTree) {
            treeview = view.add(Ext.apply({
                xtype: 'ajaxtreeview',
                reference: 'treeview',
                expanderFirst: false,
                expanderOnly: false,
                singleExpand: false,
                collapsible: true,
                collapseDirection: 'left',
                showTbar:'true',
                margin : '-40 0 0 0',
                listeners: {
                    ajaxload: function () {
                        loadcount++;
                        if (loadcount == maxloadcount) {
                            masterstore.load();
                        }
                    },
                    selectionchange: 'onselectionchange',
                },
            }, tree));
            view.add({
                xtype: 'splitter',
                collapseTarget: 'prev',
            });
        }
        view.add({
            xtype: 'container',
            reference: 'gridcontainer',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            defaults: {
                frame: true,
                margin: '0 0 5 0',
            },
            items: [
            ]
        });
        gridcontainer = controller.lookup("gridcontainer");
        var mastergrid = gridcontainer.add({
            xtype: 'grid',
            reference: 'mastergrid',
            flex: 1,
            selType: 'checkboxmodel',
            multiColumnSort: true,
           // remoteSort:true,//设置属性进行请求后台排序  
            tbar: {
                xtype: 'toolbar',
                defaults: {
                    margin: '3'
                },
                items: [
              /*      {
                        xtype: 'label', text: master.setName, style: {
                            //'font-weight': 'bold',
                            'font-size': '14px',
                            'margin-top': '10px !important',
                            'margin-right': '10px !important'
                        }
                    },*/
                    {
                        xtype: 'textfield',
                        dock: 'left',
                        //id: 'leaderInfoManageKeyWord',
                        fieldLabel : '',
         				emptyText: '搜索',
         				triggers: {
                            clear: {
                                cls: 'x-form-clear-trigger',
                                hidden: true,
                                scope: 'controller'
                            },
                            search: {
                                cls: 'x-form-search-trigger',
                                weight: 1,
                                scope: 'controller'
                            }
                        },
         				listeners : {
         					specialkey : 'onSearchSpecialkeyClick'
         				}
                    },
                    /*{
                        xtype: 'button',
                        dock: 'right',
                        itemId: 'keyWordQuery',
                        iconCls: 'x-fa fa-search',
                        //   text: '查询',
                        listeners: {
                            click: 'submitPartyOrgKeyWord'
                        }
                    },*/{
                        xtype: 'splitbutton',
                        dock: 'right',//和它并列的组件比，靠右
                        itemId: 'selectButton',
                        iconCls: 'x-fa fa-gear',//显示按钮图标
                        text: '查询',
                        menu: [{
                            text:'简单查询'
                        },{
                            text:'标签查询'
                        },{
                            text:'属性查询'
                        },{
                            text:'组合查询',
                            handler:'combineQueryForEmpA001' 
                        }]
                    },
                    {
                        xtype: 'splitbutton',
                        dock: 'right',//和它并列的组件比，靠右
                        itemId: 'settingButton',
                        iconCls: 'fa fa-bar-chart-o',//显示按钮图标
                        text: '统计分析',
                        menu: [{
                            text:'简单统计',
                            iconCls: 'fa fa-tasks',
                        },{
                            text:'综合统计',
                            iconCls: 'fa fa-tasks',
                        },{
                            text:'一维分析',
                            iconCls: 'fa fa-tasks',
                        },{
                            text:'二维分析',
                            iconCls: 'fa fa-tasks',
                        }]
                    },
                    {
                        xtype: 'splitbutton',
                        dock: 'right',
                        itemId: 'masterFormButton',
                        iconCls: 'fa fa-file-text',
                        text: '表单'
                    },
                    {
                        xtype: 'splitbutton',
                        dock: 'right',
                        itemId: 'masterRegisterButton',
                        iconCls: 'fa fa-file-text-o ',
                        text: '名册'
                    },
                    {
                        xtype: 'splitbutton',
                        dock: 'right',
                        itemId: 'exchangeButton',
                        iconCls: 'fa fa-map-marker',
                        text: '导入/导出',
                        menu: [{
                            text:'导出Excel',
                            iconCls: 'fa fa-arrow-left',
                        },{
                            text:'导出Word',  
                            iconCls: 'fa fa-arrow-left',
                        },{
                            text:'导出XML',
                            iconCls: 'fa fa-arrow-left',
                        },{
                            text:'导出采集表',
                            iconCls: 'fa fa-arrow-left',
                        },{
                            text:'导入Excel',
                            iconCls: 'fa fa-arrow-right',
                        },{
                            text:'导入Word',
                            iconCls: 'fa fa-arrow-right',
                        },{
                            text:'导入XML',
                            iconCls: 'fa fa-arrow-right',
                        },{
                            text:'导入采集表',
                            iconCls: 'fa fa-arrow-right',
                        }]
                    },{
                        xtype: 'splitbutton',
                        dock: 'right',
                        itemId: 'batchButton',
                        iconCls: 'x-fa fa-cutlery',
                        text: '批量处理',
                        menu: [{
                            text:'批量修改',
                            iconCls: 'fa fa-tasks',
                        },{
                            text:'批量删除',
                            iconCls: 'fa fa-tasks',
                        },{
                            text:'批量导入照片',
                            iconCls: 'fa fa-tasks',
                        },{
                            text:'批量删除照片',
                            iconCls: 'fa fa-tasks',
                        },{
                            text:'批量上传文件',
                            iconCls: 'fa fa-tasks',
                        },{
                            text:'批量清除文件',
                            iconCls: 'fa fa-tasks',
                        }]
                    },
                ],
                layout: 'column',
                reference: 'mastertbar',
            },
            bbar: {
                xtype: 'pagingtoolbar',
                reference: 'masterpagingbar',
                displayInfo: true,
                items: [
                    {
                    	iconCls : 'x-fa fa-plus',
     					tooltip: '新建',
     					handler : 'insertForm'
                    }, {
                    	iconCls : 'x-fa fa-edit',
     					tooltip: '修改',
     					handler : 'showForm'
                    },{
                    	iconCls : 'x-fa fa-trash',
     					tooltip: '删除',
     					handler : 'deleteMasterById'
                    },{
                    	iconCls : 'x-fa fa-star',
     					tooltip: '标签',
     					handler : ''
                    }, {
                    	iconCls : 'x-fa fa-arrow-up',
     					tooltip: '上移',
     					handler : ''
                    },{
                    	iconCls : 'x-fa fa-arrow-down',
     					tooltip: '下移',
     					handler : ''
                    }
                ]
            },
            listeners: {
                selectionchange: 'onMastergridSelectionChange',
                itemdblclick :'masterDoubleClick',
                itemclick:'clickAMethod'
            }
        });

        var masterpagingbar = controller.lookup("masterpagingbar");

        //创建主集store并绑定
        var masterstore = Ext.create('SinoSoft.store.BaseStore', {
            url: master.storeUrl,
            pageSize: 10,
            remoteSort: true,//设置属性进行请求后台排序  
            listeners: {
                beforeload: function (store, operation, eOpts) {
                    var extraparams = {};
                    extraparams['setId'] = master.setId;
                    if (showTree) {
                    	//alert(master.storeField);
                    	//alert(mastergrid.treevalue);
                        extraparams[master.storeField] = mastergrid.treevalue;
                    }
                    Ext.apply(extraparams,controller.masterConQuerys);
                    view.fireEvent('onmasterstoreload', store, extraparams);
                    console.log("结束");
                    console.log(extraparams);
                    store.proxy.extraParams = extraparams;
                }
            },
            callbackfun: function (store, records) {
            	controller.masterConQuerys={};
                if (records.length > 0) {
                    mastergrid.setSelection(records[0]);
                } else {
                    if (showSub) {
                        substore.removeAll();
                    }
                }
            },
        });
        mastergrid.setStore(masterstore);
        masterpagingbar.setStore(masterstore);


        if (showSub) {
            gridcontainer.add({
                xtype: 'splitterex',
                collapsible: true,
                ignoreHide: true
            });
            var subgrid = gridcontainer.add({
                xtype: 'grid',
                reference: 'subgrid',
                flex: 1,
                selType: 'checkboxmodel',
                multiColumnSort: true,
                hidden: true,
                collapsed: true,
                collapseDirection: 'bottom',
                flex: 1,
                tbar: {
                    xtype: 'toolbar',
                    defaults: {
                        margin: '3'
                    },
                    layout: 'column',
                    reference: 'subtbar',
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: '子 集',
                            labelAlign: 'left',
                           // labelWidth: 30,
                            editable: false,
                            reference: 'subcmb',
                            valueField: 'setId',//存的
                            displayField: 'title',//显示
                            queryMode: 'local',
                            emptyText: '选择子集...',
                            listeners: {
                                change: 'subSetSeletedChange',
                            }
                        },
                       /* {
                            xtype: 'button',
                            dock: 'right',
                            itemId: 'keyWordQuery',
                            iconCls: 'x-fa fa-search',
                            //   text: '查询',
                            listeners: {
                                click: 'submitPartyOrgKeyWord'
                            }
                        }*/
                        {
                            xtype: 'textfield',
                            dock: 'left',
                            //id: 'leaderInfoManageKeyWord',
                            fieldLabel : '',
             				emptyText: '搜索',
             				triggers: {
                                clear: {
                                    cls: 'x-form-clear-trigger',
                                    hidden: true,
                                    scope: 'controller'
                                },
                                search: {
                                    cls: 'x-form-search-trigger',
                                    weight: 1,
                                    scope: 'controller'
                                }
                            },
             				listeners : {
             					specialkey : 'onSearchSpecialkeyClick'
             				}
                        },
                        {
                            xtype: 'splitbutton',
                            dock: 'right',//和它并列的组件比，靠右
                            itemId: 'selectButton',
                            iconCls: 'x-fa fa-gear',//显示按钮图标
                            text: '查询',
                            menu: [{
                                text:'简单查询'
                            },{
                                text:'标签查询'
                            },{
                                text:'属性查询'
                            },{
                                text:'组合查询',
                                handler:'combineQueryForEmpA001' 
                            }]
                        },
                        {
                            xtype: 'splitbutton',
                            dock: 'right',//和它并列的组件比，靠右
                            itemId: 'settingButton',
                            iconCls: 'fa fa-bar-chart-o',//显示按钮图标
                            text: '统计分析',
                            menu: [{
                                text:'简单统计',
                                iconCls: 'fa fa-tasks',
                            },{
                                text:'综合统计',
                                iconCls: 'fa fa-tasks',
                            },{
                                text:'一维分析',
                                iconCls: 'fa fa-tasks',
                            },{
                                text:'二维分析',
                                iconCls: 'fa fa-tasks',
                            }]
                        },
                        {
                            xtype: 'splitbutton',
                            dock: 'right',
                            itemId: 'masterFormButton',
                            iconCls: 'fa fa-file-text',
                            text: '表单'
                        },
                        {
                            xtype: 'splitbutton',
                            dock: 'right',
                            itemId: 'masterRegisterButton',
                            iconCls: 'fa fa-file-text-o ',
                            text: '名册'
                        },
                        {
                            xtype: 'splitbutton',
                            dock: 'right',
                            itemId: 'exchangeButton',
                            iconCls: 'fa fa-map-marker',
                            text: '导入/导出',
                            menu: [{
                                text:'导出Excel',
                                iconCls: 'fa fa-arrow-left',
                            },{
                                text:'导出Word',  
                                iconCls: 'fa fa-arrow-left',
                            },{
                                text:'导出XML',
                                iconCls: 'fa fa-arrow-left',
                            },{
                                text:'导出采集表',
                                iconCls: 'fa fa-arrow-left',
                            },{
                                text:'导入Excel',
                                iconCls: 'fa fa-arrow-right',
                            },{
                                text:'导入Word',
                                iconCls: 'fa fa-arrow-right',
                            },{
                                text:'导入XML',
                                iconCls: 'fa fa-arrow-right',
                            },{
                                text:'导入采集表',
                                iconCls: 'fa fa-arrow-right',
                            }]
                        },{
                            xtype: 'splitbutton',
                            dock: 'right',
                            itemId: 'batchButton',
                            iconCls: 'x-fa fa-cutlery',
                            text: '批量处理',
                            menu: [{
                                text:'批量修改',
                                iconCls: 'fa fa-tasks',
                            },{
                                text:'批量删除',
                                iconCls: 'fa fa-tasks',
                            },{
                                text:'批量导入照片',
                                iconCls: 'fa fa-tasks',
                            },{
                                text:'批量删除照片',
                                iconCls: 'fa fa-tasks',
                            },{
                                text:'批量上传文件',
                                iconCls: 'fa fa-tasks',
                            },{
                                text:'批量清除文件',
                                iconCls: 'fa fa-tasks',
                            }]
                        }
                    ]
                },
                bbar: {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    reference: 'subpagingbar',
                    displayInfo: true,
                    items: [
                    	 {
                         	iconCls : 'x-fa fa-plus',
          					tooltip: '新建',
          					handler : ''
                         }, {
                         	iconCls : 'x-fa fa-edit',
          					tooltip: '修改',
          					handler : ''
                         },{
                         	iconCls : 'x-fa fa-trash',
          					tooltip: '删除',
          					handler : ''
                         },{
                         	iconCls : 'x-fa fa-star',
         					tooltip: '标签',
         					handler : ''
                        }, {
                        	iconCls : 'x-fa fa-arrow-up',
         					tooltip: '上移',
         					handler : ''
                        },{
                        	iconCls : 'x-fa fa-arrow-down',
         					tooltip: '下移',
         					handler : ''
                        }
                    ]
                }
            });

            var subpagingbar = controller.lookup("subpagingbar");
            var subcmb = controller.lookup("subcmb");

            //对子集中的子集下拉框进行初始化
            subcmb.setStore({
                data: sub.items
            });

            //创建子集store并绑定
            var substore = Ext.create('SinoSoft.store.BaseStore', {//创建子集列表store
                url: sub.defaults.storeUrl,
                remoteSort: true,//设置属性进行请求后台排序  
                pageSize: 5,
                listeners: {
                    beforeload: function () {
                        var params = {};
                        params[sub.defaults.columnParamName] = subcmb.value;
                        params[sub.defaults.storeParamName] = subgrid.masterId;

                        this.proxy.extraParams = params;
                    }
                },
                callbackfun: function (store, records) {
                    if (records.length > 0) {
                    } else {

                    }
                },
            });
            subgrid.setStore(substore);
            subpagingbar.setStore(substore);
        }

        //创建store    


        //查询主集列集合并绑定列到主集上
        AjaxEx.doAjax({
            method: 'POST',
            meg: '正在查询主集列集合...',
            params: { setId: master.setId },
            url: master.columnUrl,
            success: function (data) {
            	Ext.each(data,function(item){
             		/*if(item.dataIndex=='cid_266'){
             			Ext.apply(item,{
             				editor:{
             					xtype:'textfield'
             				},
             				renderer:function(value){
             					return '<a href="javascript:void(0)">'+value+'</a>';
             				}
             			});
             		}*/
            		switch(item.dataIndex){
            			case'cid_266'://干部基本信息管理：姓名id
            			case'cid_112':	//单位基本信息管理：单位名称id
            			case'cid_1647':	//党组织机构管理：党组织名称id
            			case'cid_1243':	//党员党组织信息管理：党员所在支部名称id
            				Ext.apply(item,{
                 				renderer:function(value){
                 					if(value==undefined){
                 						value="";
                 					}
                 					return '<a href="javascript:void(0)">'+value+'</a>';
                 				}
                 			});
            				break;
            			default:
            				break;
            		}
             	});
                mastergrid.reconfigure(data);
                //绑定完成后加载主集数据

                loadcount++;
                if (loadcount == maxloadcount) {
                    masterstore.load();
                }
            }
        });

    },
    subSetSeletedChange: function (combobox, newValue, oldValue, eOpts) {//单击子集下拉列表时，更新Grid
        var controller = this;
        var view = this.getView();
        var sub = view.getSub();
        var params = {};
        //子集获取列名时，传setName=表名，获取数据时是tableName=表名
        params["setName"] = newValue;
        var subgrid = controller.lookup("subgrid");
        var store = subgrid.getStore();

        var columnkey = "column_" + newValue;
        var columns = LocalData.getItem(columnkey);
        if (columns == undefined) {
            AjaxEx.doAjax({
                url: sub.defaults.columnUrl,
                meg: '正在查询子集列集合...',
                method: 'Post',
                params: params, // 子集的数据库表名
                success: function (data) {
                    LocalData.setItem(columnkey, data);
                    subgrid.reconfigure(data);
                    store.loadPage(1);
                },
                failure: function (info) {
                }
            });
        } else {
            subgrid.reconfigure(columns);
            store.loadPage(1);
        }
    },
    onMastergridSelectionChange: function (grid, selected, eOpts) {
        var controller = this,
        view = this.getView(),
        showSub = view.getShowSub(),
        sub = view.getSub();
        if (showSub) {
            var subgrid = controller.lookup("subgrid");
            var subcmb = controller.lookup("subcmb");
            if (selected.length > 0) {
                subgrid.masterId = selected[0].data[sub.defaults.masterParamName];
                if (subcmb.value != null) {
                    subgrid.getStore().loadPage(1);
                }
            } else {
                subgrid.getStore().removeAll();
            }
        }
    },
    onselectionchange: function (tree, selected, eOpts) {
        var controller = this,
            view = this.getView(),
            treemodel = view.getTree(),
            mastergrid = controller.lookup("mastergrid");
        if (selected.length>0) {
            mastergrid.treevalue = selected[0].data[treemodel.treeValueField];
            mastergrid.store.loadPage(1);
        }else {
            mastergrid.treevalue = null;
        }
    },
    //
    //组合查询
    combineQueryForEmpA001:function(){
    	var controller=this;
    	var view=this.lookup('mastergrid');
    	 var windo=Ext.create('SinoSoft.view.leaderInfoManage.query.combineQuery.combineQueryWindow');
    	 windo.on("close",function(){
    		 if(windo.results!=undefined&&windo.results.isDo){
    			 controller.masterConQuerys=windo.results.combineQueryPars ;
    			 view.store.loadPage(1);
    		 }
    	 });
    	 windo.show();
    },   
    //分页条点修改
    showForm: function () {
        var me = this.getView();
        var grid = me.lookup('mastergrid');
        //console.log(grid);
        var records = grid.getSelection();
        //console.log(records);
        if(records == null || records.length == 0) {
            Ext.Msg.alert('提示','请选择一行人员数据');
            return ;
        }
        //var records = {A0101:'1asf', A0102:'人员434', A0103:'人员33', A0104:'人员22', A0105:'人员11'};
        var empId = records[0].data.cid_284;
 
        Ext.create('SinoSoft.view.infomaintain.InfoSetDetailWindow',{
            title: "人员基本情况",  
            width:1200,
            setId: 14,
            dataIdentifier:{empId:empId}
            
        }).show(); 
    },
    //单击a标签进行修改
    clickAMethod:function(myself, record, item, index, e, eOpts ){
    	if(e.position.column.dataIndex=='cid_266'){//单击的列是a标签的列，则认为，单击的就是此a标签,EMP_A001是cid_266，其他DEP_B001得换成别的
    		this.showForm();
    	}else{
    		return
    	}
    },
    //双击grid时，进行修改信息
    masterDoubleClick:function(){
    	this.showForm();
    },
    //分页条，点增加
    insertForm :function(){
        Ext.create('SinoSoft.view.infomaintain.InfoSetDetailWindow',{
            title: "人员基本情况",  
            width:1200,
            setId: 14,
        }).show(); 
    },
    //分页条，点删除
    deleteMasterById:function(){
    	Ext.Msg.confirm('提示', '确定删除这条记录吗');
        var me = this.getView();
        var grid = me.lookup('mastergrid');
        var master = me.getMaster();
        var setId=master.setId;
      //  console.log(setId);//14
        var records = grid.getSelection();
        if(records == null || records.length == 0) {
            Ext.Msg.alert('提示','至少选择一行数据才能进行删除');
            return ;
        }
        var idField=master.idField;//主集id列   cid_284
        var  dbPkName=master.dbPkName;
        var empIds={};
        for(var i=0;i<records.length;i++){
        	empIds[i]=records[i].data[idField];
        }
      //  var empId = records[0].data[idField];//
      //  alert(dbPkName);
        //return;
        var  delPars={};
        var ids=Ext.encode(empIds);
        delPars[dbPkName] = ids;
        delPars["setId"] = setId;
       // return;
        Ext.Ajax.request({  
            method: 'POST',
            params:delPars, // 传递的参数  
            url:"infomaintain/deleteByIds",
            success: function (response, options) {
                var data = response.responseText;
                var status = response.status;
                var columnJsons=Ext.decode(data);//字符串转成json
             //   console.log(columnJsons.success);
             //   console.log(columnJsons.success==true);
                if(status==200&&columnJsons.success){
                	grid.store.loadPage(1);
                }else{
                	 Ext.Msg.alert('提示', '删除主集异常');
                }
            },
            failure: function (response, options) {
                Ext.Msg.alert('提示', '删除主集失败');
            }
        });
    }
});