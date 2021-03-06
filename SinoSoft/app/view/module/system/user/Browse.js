﻿Ext.define('SinoSoft.view.module.system.user.Browse', {
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
            xtyle: 'container',
            width: '17.6%',
            cls: 'Container-section-select',
            tbar: {
                height: 50,
                padding: 0,
                cls: 'Container-section-select2-titlebar',
                style: {
                    'border-bottom-width': '1px !important',
                    'border-color': '#dae1e7'
                },
                items: [
                    {
                        cls: 'Container-section-select3-titlebar-icon',
                        xtype: 'container',
                        height: 50,
                        width: 50,
                        html: '<i class="iconfont">&#xe62d;</i>',
                        style: {
                            'color': '#496278',
                            'line-height': '50px',
                            'text-align': 'center',
                        }
                    },
                    {
                        xtype: 'tbtext',
                        text: '单位列表',
                        height: 50,
                        style: {
                            'line-height': '50px',
                            'font-size': '16px',
                            'color': '#496278',
                            'text-indent': '-1em'
                        }
                    }
                ]
            },
            items: [
                {
                    xtype: 'ajaxtreeview',
                    isAjax: false,
                    showTbar: true,
                    store: 'files',
                    // width: '17.6%',
                    // cls: 'Container-section-select',
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: false,
                    listeners: {
                        //itemclick:'ontreenodeclick'
                    },
                    //bind: '{navItems}'

                },
            ]

        },
        {
            xtype: 'container',
            cls: 'Container-section-article',
            // padding: 10,
            flex: 1,
            style: {
                'padding': '0 10px 10px 10px'
            },
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
                    xtype: 'toolbar',
                    'padding': 0,
                    cls: 'Wrapper-headerbar',
                    // border:1,
                    items: [
                        {
                            cls: 'Wrapper-headerbar-titile-icon',
                            xtype: 'container',
                        },
                        {
                            cls: 'Wrapper-headerbar-titile',
                            xtype: 'label', text: '用户信息',
                            style: {
                                'font-weight': 'bold',
                                'font-size': '17px',
                                'font-weight': '400',
                                'color': '#4b6178',
                                'height': '50px',
                                'vertical-align': 'middle',
                                'line-height': '50px',
                            }
                        },
                        {
                            cls: 'Wrapper-headerbar-search',
                            width: 200,
                            xtype: 'searchfieldex',
                            paramName: 'text',
                            isAjax: true,
                        },
                        {
                            cls: 'Wrapper-headerbar-btn',
                            xtype: 'button',
                            reference: 'rich',
                            text: '查询',
                            style: {
                                'vertical-align': 'middle',
                                'line-height': '60px',
                            },
                        },
                    ]
                },
                {
                    xtype: 'container',
                    cls: 'Wrapper-operation-area',
                    height: 35,
                    width: '100%',
                    padding: 0,
                    style: {
                        // 'background-color':'#f1f1f1'

                    },
                    items: [
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-liulan displaymode',
                            text: '显示方式',
                        },
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-leixing category',
                            text: '干部分类',
                            style: {
                                // 'background-color':'#fff',
                                'border-color': '#d9e0e6',
                                'vertical-align': 'middle',
                                'margin-right': '10px'
                            }
                        },
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-query query',
                            text: '查询',
                            style: {
                                // 'background-color':'#fff',
                                'border-color': '#d9e0e6',
                                'vertical-align': 'middle',
                                'margin-right': '10px'
                            }
                        },
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-tongji statistics',
                            text: '统计分析',
                            style: {
                                // 'background-color':'#fff',
                                'border-color': '#d9e0e6',
                                'vertical-align': 'middle',
                                'margin-right': '10px'
                            }
                        },
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-biaodan form',
                            text: '表单',
                            style: {
                                // 'background-color':'#fff',
                                'border-color': '#d9e0e6',
                                'vertical-align': 'middle',
                                'margin-right': '10px'
                            }
                        },
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-huamingce roster',
                            text: '名册',
                            style: {
                                // 'background-color':'#fff',
                                'border-color': '#d9e0e6',
                                'vertical-align': 'middle',
                                'margin-right': '10px'
                            }
                        },
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-daochu export',
                            text: '导入/导出',
                            style: {
                                // 'background-color':'#fff',
                                'border-color': '#d9e0e6',
                                'vertical-align': 'middle',
                                'margin-right': '10px'
                            }
                        },
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-piliang batch',
                            text: '批量处理',
                            style: {
                                'border-color': '#d9e0e6',
                                'vertical-align': 'middle',
                                'margin-right': '10px'
                            }
                        },
                        {
                            cls: 'Wrapper-operation-area-button',
                            menu: [{
                                text: 'Menu Item 1'
                            }, {
                                text: 'Menu Item 2'
                            }, {
                                text: 'Menu Item 3'
                            }],
                            xtype: 'button',
                            iconCls: 'iconfont icon-xianshiqi displaycontrol',
                            text: '显示控制',
                            style: {
                                'border-color': '#d9e0e6',
                                'vertical-align': 'middle',
                                'margin-right': '10px'
                            }
                        },
                    ]
                },
                {
                    cls: 'Wrapper-grid',
                    xtype: 'grid',
                    width: '100%',
                    border: 1,

                    store: {
                        data: [
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'}
                        ]
                    },
                    flex: 1,
                    sortableColumns: false,
                    enableColumnHide: false,
                    enableColumnMove: false,
                    // dockedItems: [
                    //     {
                    //         xtype: 'toolbar',
                    //         //height: 60,
                    //         'padding': 0,
                    //         cls: 'aaaa',
                    //         items: [
                    //             {
                    //                 cls: 'Wrapper-section-titile-icon',
                    //                 xtype: 'container',
                    //             },
                    //             {
                    //                 cls: 'Wrapper-section-titile',
                    //                 xtype: 'label', text: '用户信息',
                    //                 style: {
                    //                     'font-weight': 'bold',
                    //                     'font-size': '17px',
                    //                     'font-weight': '400',
                    //                     'color': '#4b6178',
                    //                     'height': '60px',
                    //                     'vertical-align': 'middle',
                    //                     'line-height': '60px',
                    //                 }
                    //             },
                    //             {
                    //                 cls: 'Wrapper-titlebar-btn',
                    //                 xtype: 'button',
                    //                 text: '查询',
                    //                 style: {
                    //                     'vertical-align': 'middle',
                    //                     'line-height': '60px',
                    //                 }
                    //                 //handler: function (btn) {
                    //                 //    btn.ownerCt.ownerCt.down('hidetitlegrid').show();
                    //                 //    btn.ownerCt.ownerCt.down('hidetitlegrid').expand();
                    //                 //}
                    //             },
                    //             {
                    //                 cls: 'asas',
                    //                 xtype: 'container',
                    //                 // text: '查询',
                    //                 style: {
                    //                     'height': '100px',
                    //                     'width': '100%',
                    //                     'background-color': 'red',
                    //                     'position':'static!important'
                    //                 }
                    //                 //handler: function (btn) {
                    //                 //    btn.ownerCt.ownerCt.down('hidetitlegrid').show();
                    //                 //    btn.ownerCt.ownerCt.down('hidetitlegrid').expand();
                    //                 //}
                    //             },
                    //         ]
                    //     },
                    //
                    //
                    //
                    //
                    //     // {
                    //     //     xtype: 'pagingtoolbar',
                    //     //     dock: 'bottom',
                    //     //     displayInfo: true,
                    //     //     cls:'123123'
                    //     // },
                    // ],
                    columns: [
                        {text: '序号', xtype: 'rownumberer'},
                        {text: '姓名', dataIndex: 'Name', flex: 1, cls: 'fffffz'},
                        {text: '民族', dataIndex: 'Nation', width: 120,},
                        {text: '性别', dataIndex: 'Sex', width: 120,}
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
