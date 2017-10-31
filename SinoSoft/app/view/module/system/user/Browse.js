Ext.define('SinoSoft.view.module.system.user.Browse', {
    extend: 'SinoSoft.util.Browse',
    xtype: 'userbrowse',
    requires: [],
    controller: 'usercontroller',
    //viewModel:'music',

    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    defaults: {
        frame: true,
        margin: '0 5 0 0',
    },
    items: [
        {
            xtype: 'treepanel',
            store: 'files',
            width: '17.6%',
            // width: 100,
            cls: 'Container-section-select',
            expanderFirst: false,
            expanderOnly: false,
            singleExpand: false,
            listeners: {
                //itemclick:'ontreenodeclick'
            },
            //bind: '{navItems}'
            items:[
                {
                    xtype:'container',
                    cls:'ffff'
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'Container-section-article',
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
                //
                {
                    cls:'Wrapper-titlebar',
                    xtype: "toolbar",
                    // dock: 'top',
                    // style:'border:0px',
                    // layout: 'column',
                    items: [
                        {
                            cls:'Wrapper-titlebar-btn',
                            xtype: 'button',
                            text: '查询',
                            //handler: function (btn) {
                            //    btn.ownerCt.ownerCt.down('hidetitlegrid').show();
                            //    btn.ownerCt.ownerCt.down('hidetitlegrid').expand();
                            //}
                        },
                    ]
                },
                {
                    cls: 'Wrapper-section',
                    xtype: 'grid',
                    //title: '用户信息',
                    //ui:'light',
                    flex: 1,
                    sortableColumns: false,
                    enableColumnHide: false,
                    enableColumnMove: false,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            height: 60,
                            'padding':0,
                            items: [
                                {
                                    xtype:'container',
                                    // style:{
                                        'height:':'20px',

                                        'width':'4px',
                                        'background-color':'#36baf5'
                                    // }
                                },
                                {
                                    cls: 'Wrapper-section-titile',
                                    xtype: 'label', text: '用户信息', style: {
                                    'font-weight': 'bold',
                                    'font-size': '17px',
                                    'font-weight': '400',
                                    'color': '#4b6178',
                                    'height':'60px',
                                    'vertical-align':'middle',
                                    'line-height':'60px',
                                }
                                },
                                {
                                    cls: 'Wrapper-titlebar-btn',
                                    xtype: 'button',
                                    text: '查询',
                                    //handler: function (btn) {
                                    //    btn.ownerCt.ownerCt.down('hidetitlegrid').show();
                                    //    btn.ownerCt.ownerCt.down('hidetitlegrid').expand();
                                    //}
                                },
                            ]
                        },
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            displayInfo: true,

                        },
                    ],
                    columns: [
                        {text: '序号', xtype: 'rownumberer'},
                        {text: '姓名', width: 120,}
                    ],
                },
                {
                    xtype: 'splitter',
                    collapsible: true,
                    ignoreHide: true
                },
                {
                    xtype: 'hidetitlegrid',
                    //title: '用户档案',
                    flex: 1,
                    hidden: true,
                    collapsed: true,
                    //collapsible: true,
                    collapseDirection: 'bottom',
                    sortableColumns: false,
                    enableColumnHide: false,
                    enableColumnMove: false,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            items: [
                                {xtype: 'label', text: '用户档案'}
                            ]
                        },
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            displayInfo: true
                        },
                    ],
                    columns: [
                        {text: '序号', xtype: 'rownumberer'},
                        {text: '姓名', width: 120,}
                    ],
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
