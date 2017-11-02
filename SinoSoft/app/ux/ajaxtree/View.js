Ext.define('SinoSoft.ux.ajaxtree.View', {
    extend: 'Ext.tree.Panel',
    xtype: 'ajaxtreeview',
    requires: [
        'SinoSoft.common.RecursiveCycle',
    ],
    config: {
        url: null,
        rootText: null,
        isAjax:false,
        expandByAjax: false,
        ajaxParams: {},
        showTbar: false,
    },
    fields: [
        { name: 'id', mapping: 'id' },
        { name: 'text', mapping: 'text' },
        { name: 'leaf', mapping: 'leaf' },
        { name:'children',mapping:'children'},
        //{ name:'icon',mapping:'icon'},
        { name: 'expanded', mapping: 'expanded', efaultValue: false },
        //{ name:'checked',mapping:'checked',efaultValue: false},
    ],//现在只支持name mapping 2个属性的计算，
    mapping: function (data) {
        var childrenfieldname;
        var fields = this.fields;
        for (var i = 0; i < this.fields.length; i++) {
            if(this.fields[i].name=="children"){
                childrenfieldname=this.fields[i].mapping;
                break;
            }
        }
        RecursiveCycle.cycle(data, childrenfieldname, function (item) {
            var addf = {};
            Ext.each(fields, function (field) {
                addf[field.name] = item[field.mapping];
            });
            Ext.applyIf(item, addf);
        });
    },
    //事件ajaxload
    //参数当前组件
    //当首次ajax执行后触发
    tbar: {
        items: [
            {
                flex: 1,
                xtype: 'searchfieldex',
                paramName: 'text',
                isAjax: true,
                listeners: {
                    search: function (field, value) {
                        var me = field.ownerCt.ownerCt,
                        url = me.getUrl(),
                        ajaxParams = me.getAjaxParams(),
                        rootText = me.getRootText();
                        me.isdoajax = true;
                        AjaxEx.doAjax({
                            url: url,
                            quiet: true,
                            params: Ext.apply({},ajaxParams, { text: value }),
                            success: function (data) {
                                me.isdoajax = false;
                                me.mapping(data);
                                var store = Ext.create("Ext.data.TreeStore", {
                                    root: {
                                        //text: rootText,
                                        expanded: true,
                                        children: data
                                    }
                                });
                                me.setStore(store);
                                me.fireEvent("ajaxload", me);
                            },
                            failure: function () {
                                me.isdoajax = false;
                            }
                        });
                    }
                }
            }
        ]
    },
    //hideHeaders: true,
    scrollable:true,
    //forceFit:true,
    initComponent: function () {
        var me = this;
        me.callParent();
        var url = me.getUrl(),
        rootText = me.getRootText(),
        isAjax=me.getIsAjax(),
        expandByAjax = me.getExpandByAjax(),
        ajaxParams = me.getAjaxParams(),
        showTbar = me.getShowTbar(),
        //textField = me.getTextField(),
        tbar = me.down('toolbar');
        //me.reconfigure([
        //{
        //    xtype: 'treecolumn',
        //    text:'fadfa',
        //    dataIndex: textField,
        //}
        //]);
        if (!showTbar) {
            tbar.hide();
        }
        if (isAjax) {
            if (expandByAjax) {
                me.on("beforeitemexpand", function (node, eOpts) {
                    if ((!node.isLoaded()) && (!node.isLoading())) {
                        me.isdoajax = true;
                        AjaxEx.doAjax({
                            url: url,
                            quiet: true,
                            params: Ext.apply({}, ajaxParams, node.data),
                            success: function (data) {
                                me.isdoajax = false;
                                //Ext.suspendLayouts();
                                
                                me.mapping(data);
                                node.appendChild(data);
                                me.getView().refreshNode(node);

                                //Ext.resumeLayouts(true);
                            },
                            failure: function () {
                                me.isdoajax = false;
                            }
                        });
                    }
                    return true;
                });
            }
            me.isdoajax = true;
            AjaxEx.doAjax({
                url: url,
                quiet: true,
                params: ajaxParams,
                success: function (data) {
                    me.isdoajax = false;
                    me.mapping(data);
                    var store = Ext.create("Ext.data.TreeStore", {
                        root: {
                            text: rootText,
                            expanded: true,
                            children: data
                        }
                    });
                    me.setStore(store);
                    me.fireEvent("ajaxload", me);
                },
                failure: function () {
                    me.isdoajax = false;
                }
            });
        }
    },
    updateSelection: function (selection) {
        this.callParent(arguments);
        if (selection != null) {
            var path = [];
            if (!selection.isRoot()) {
                var p = selection.parentNode;

                while (true) {
                    path.push(p.id);
                    if (p.isRoot()) {
                        break;
                    }
                    p = p.parentNode;
                }
                path.reverse();
                this.expandPath(path.join('/'));
                this.view.scrollRowIntoView(selection);
            }
        }
    }
});
