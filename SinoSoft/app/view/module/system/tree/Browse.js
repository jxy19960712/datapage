Ext.define('SinoSoft.view.module.system.tree.Browse', {
    extend: 'SinoSoft.util.Browse',
    xtype: 'treebrowse',
    requires: [
        
    ],
    controller: 'treecontroller',
    //viewModel:'music',

    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    defaults: {
        frame: true,
        margin:'0 5 0 0',
    },
    items: [
        {
            xtype: 'treepanel',
            store: 'proxyfiles',
            width:250,
            expanderFirst: false,
            expanderOnly: false,
            singleExpand: false,
            listeners: {
                selectionchange: 'onselectionchange'
            },
            //bind: '{navItems}'
        },
        {
            xtype: 'container',
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

                {
                    xtype: "toolbar",
                    dock: 'top',
                    //border: false,
                    style:'border:0px',
                    layout: 'column',
                    items: [
                        {
                            xtype: 'button',
                            text: '保存',
                            handler:'onsave'
                        },
                        {
                            xtype: 'button',
                            text: '添加子节点',
                            handler: 'onadd'
                        },
                        {
                            xtype: 'button',
                            text: '删除节点',
                            handler: 'ondel'
                        },
                        {
                            width: 400,
                            fieldLabel: 'Search',
                            labelWidth: 50,
                            xtype: 'searchfieldex',
                            paramName:'text',
                            store: 'proxyfiles'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '节点名称',
                            labelCls:'labelshowborder',
                            name:'text'
                        },
                        {
                            xtype: 'checkbox',
                            fieldLabel: '是否是叶',
                            name: 'leaf',
                            inputValue: true,
                            uncheckedValue:false

                        },






                        {
                            xtype: 'tabpanel',
                            width: 300,
                            // cls:'Container-section-select',
                            collapsible: true,
                            collapseDirection: 'left',
                            tabPosition: 'left',
                            ui: 'navigation',
                            defaults: {
                                textAlign: 'left',
                                bodyPadding: 15
                            },
                            items: [
                                {
                                    title:'aaa',
                                    xtype: 'container',
                                    // store: 'files',
                                    expanderFirst: false,
                                    expanderOnly: false,
                                    singleExpand: false,
                                    width:200,
                                    height:200,
                                    text:'aaa',
                                    listeners: {
                                        //itemclick:'ontreenodeclick'
                                    }
                                    //bind: '{navItems}'
                                },
                                {
                                    title: 'bbb',
                                    xtype: 'container',
                                    // store: 'files',
                                    expanderFirst: false,
                                    expanderOnly: false,
                                    singleExpand: false,
                                    width:200,
                                    height:200,
                                    text:'aaa',
                                    listeners: {
                                        //itemclick:'ontreenodeclick'
                                    }
                                    //bind: '{navItems}'
                                },
                                {
                                    title: 'ccc',
                                    xtype: 'container',
                                    // store: 'files',
                                    expanderFirst: false,
                                    expanderOnly: false,
                                    singleExpand: false,
                                    width:200,
                                    height:200,
                                    text:'aaa',
                                    listeners: {
                                        //itemclick:'ontreenodeclick'
                                    }
                                    //bind: '{navItems}'
                                },
                            ]
                        },
                    ]
                }
            ]
        }
    ],
    listeners: {
        afterrender: function (view) {
            var me = view;
            
        }
    }
});
