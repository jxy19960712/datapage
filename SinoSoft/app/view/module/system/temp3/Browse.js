Ext.define('SinoSoft.view.module.system.temp3.Browse', {
    extend: 'SinoSoft.util.Browse',
    xtype: 'tempbrowse3',
    requires: [],
    controller: 'tempcontroller',

    // controller: 'usercontroller',
    //viewModel:'music',

    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    defaults: {
        frame: true,
        margin: '0 5 0 0',
    },
    tbar: {
        cls: 'Container-section-topbar',
        width: '100%',
        padding: 0,
        height: 45,
        items: [
            {
                cls: 'Container-section-topbar-avatar',
                xtype: 'container',
                height: 45,
                width: 40,
                html: '<i class="iconfont">&#xe600;</i>',
                style: {
                    'color': '#35baf5'
                }
            },
            // {
            //     cls: 'Container-section-topbar-title',
            //     height: 60,
            //     xtype: 'displayfield',
            //     value: '张翰时,男,大方县县委书记,常委',
            // }

            {
                xtype: 'tbtext',
                text: '张翰时,男,大方县县委书记,常委',
                height: 45,
                style: {
                    'line-height': '45px',
                    'font-size': '18px',
                    'color': '#35baf5',
                }
            },
            {
                xtype: 'tbtext',
                text: '信息完成度',
                style: {
                    'margin-left': '50px',
                }
            },
            {
                xtype: 'progressbar',
                width: 200,
                value:0.7,
                style:{
                    'border-radius':'200px'
                }
            },
            {
                cls: 'Wrapper-headerbar-btn selectleader',
                xtype: 'button',
                menu: [{
                    text: 'Menu Item 1'
                }, {
                    text: 'Menu Item 2'
                }, {
                    text: 'Menu Item 3'
                }],
                text: '张翰时'
            },
            {
                xtype: 'button',
                cls: 'Wrapper-headerbar-btn',
                text: '切换到任免表'
            },

        ]
    },
    items: [
        {
            xtype: 'tabpanel',
            cls: 'Container-section-select2',
            width: '20.6%',
            collapsible: false,
            tabPosition: 'left',
            tabRotation: 0,
            ui: 'navigation',
            defaults: {
                textAlign: 'left',
                bodyPadding: 15
            },
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
                        html: '<i class="iconfont">&#xe7fb;</i>',
                        style: {
                            'color': '#496278',
                            'line-height': '50px',
                            'text-align': 'center',
                        }
                    },
                    {
                        xtype: 'tbtext',
                        text: '信息集',
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
                    iconCls:'iconfont icon-plane treebtn-icon',
                    title: '全部',
                    xtype: 'ajaxtreeview',
                    store: 'files',
                    isAjax:false,
                    showTbar:true,
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: false,
                    listeners: {
                        //itemclick:'ontreenodeclick'
                    },
                    //bind: '{navItems}'
                },
                {
                    iconCls:'iconfont icon-fenlei treebtn-icon',
                    title: '分类',
                    xtype: 'ajaxtreeview',
                    store: 'files',
                    isAjax:false,
                    showTbar:true,
                    // cls: 'Container-section-select',
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: false,
                    listeners: {
                        //itemclick:'ontreenodeclick'
                    }
                    //bind: '{navItems}'
                },
                {
                    iconCls:'iconfont icon-star-copy treebtn-icon',
                    title: '收藏',
                    xtype: 'ajaxtreeview',
                    store: 'files',
                    isAjax:false,
                    showTbar:true,
                    // cls: 'Container-section-select',
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: false,
                    listeners: {
                        //itemclick:'ontreenodeclick'
                    }
                    //bind: '{navItems}'
                },
                {
                    iconCls:'iconfont treebtn-icon icon-liulan',
                    title: '浏览',
                    xtype: 'ajaxtreeview',
                    store: 'files',
                    isAjax:false,
                    showTbar:true,
                    // cls: 'Container-section-select',
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: false,
                    listeners: {
                        //itemclick:'ontreenodeclick'
                    }
                    //bind: '{navItems}'
                },
            ]
        },


        // {
        //     xtype: 'splitter',
        //     collapseTarget: 'prev',
        // },


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
                {
                    xtype: 'toolbar',
                    'padding': 0,
                    cls: 'Wrapper-headerbar',
                    items: [
                        {
                            cls: 'Wrapper-headerbar-titile-icon',
                            xtype: 'container',
                        },
                        {
                            cls: 'Wrapper-headerbar-titile',
                            xtype: 'label', text: '学位信息集',
                            style: {
                                'font-weight': 'bold',
                                'font-size': '17px',
                                'font-weight': '400',
                                'color': '#4b6178',
                                'height': '60px',
                                'vertical-align': 'middle',
                                'line-height': '60px',
                            }
                        },
                        {
                            cls: 'Wrapper-headerbar-btn',
                            xtype: 'button',
                            text: '查询',
                            style: {
                                'vertical-align': 'middle',
                                'line-height': '60px',
                            }
                        },
                    ]
                },
                {
                    xtype: 'container',
                    cls: 'Wrapper-section',
                    style: {
                        'border-top': 'none'
                    },
                    flex: 5,
                    width: '100%',
                    padding: 10,
                    items: [
                        {
                            xtype: 'container',
                            height: 45,
                            width: '100%',
                            padding: 0,
                            style: {
                                'background-color': '#35baf5',
                            },
                            items: [
                                {
                                    xtype: 'tbtext',
                                    text: '学位信息列表',
                                    height: 45,
                                    style: {
                                        'line-height': '45px',
                                        'font-size': '16px',
                                        'color': '#fff',
                                        'text-indent': '1em'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            cls: 'Wrapper-operation-area',
                            height: 50,
                            width: '100%',
                            style: {
                                'border': '1px solid #35baf5',
                                'border-bottom': '1px solid #d1d1d1',
                                'padding': '0 10px 0 10px'
                            },
                            items: [
                                {
                                    cls: 'Wrapper-operation-area-button',
                                    xtype: 'button',
                                    iconCls: 'iconfont icon-zengjia add',
                                    text: '新增',
                                },
                                {
                                    cls: 'Wrapper-operation-area-button',
                                    xtype: 'button',
                                    iconCls: 'iconfont icon-xiugai revamp',
                                    text: '修改',
                                    style: {
                                        // 'background-color':'#fff',
                                        'border-color': '#d9e0e6',
                                        'vertical-align': 'middle',
                                        'margin-right': '10px'
                                    }
                                },
                                {
                                    cls: 'Wrapper-operation-area-button',
                                    xtype: 'button',
                                    iconCls: 'iconfont icon-delete delete',
                                    text: '删除',
                                    style: {
                                        // 'background-color':'#fff',
                                        'border-color': '#d9e0e6',
                                        'vertical-align': 'middle',
                                        'margin-right': '10px'
                                    }
                                },
                                {
                                    reference: 'hideOnMaskClick',
                                    cls: 'Wrapper-operation-area-button',
                                    xtype: 'button',
                                    iconCls: 'iconfont icon-star-copy collect',
                                    text: '收藏',
                                    style: {
                                        // 'background-color':'#fff',
                                        'border-color': '#d9e0e6',
                                        'vertical-align': 'middle',
                                        'margin-right': '10px'
                                    },
                                    handler: 'onPromptClick',
                                }
                            ]
                        },
                        {
                            xtype: 'grid',
                            // title: '用户信息',
                            // ui:'light',
                            style: {
                                'border': '1px solid #35baf5',
                                'border-top': 'none'
                            },
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
                                    {Name: 'aaaaaa', Nation: '汉族', Sex: '男'}
                                ]
                            },
                            sortableColumns: false,
                            enableColumnHide: false,
                            enableColumnMove: false,
                            columns: [
                                {text: '序号', xtype: 'rownumberer'},
                                {text: '姓名', dataIndex: 'Name', flex: 1, cls: 'fffffz'},
                                {text: '民族', dataIndex: 'Nation', width: 120,},
                                {text: '性别', dataIndex: 'Sex', width: 120,}
                            ],
                        },
                        {
                            flex: 5,
                            xtype: 'container',
                            width: '100%',
                            // title: '学位基本信息',
                            padding: '10px 0 0 0 ',
                            items: [
                                {
                                    xtype: 'container',
                                    height: 45,
                                    width: '100%',
                                    padding: 0,
                                    style: {
                                        'background-color': '#35baf5',
                                    },
                                    items: [
                                        {
                                            xtype: 'tbtext',
                                            text: '学位基本信息',
                                            height: 45,
                                            style: {
                                                'line-height': '45px',
                                                'font-size': '16px',
                                                'color': '#fff',
                                                'text-indent': '1em'
                                            }
                                        }
                                    ]
                                }, {
                                    style: {
                                        'border': '1px solid #35baf5',
                                        'border-top': 'none'
                                    },
                                    xtype: 'container',
                                    layout: 'column',
                                    width: '100%',
                                    items: [
                                        {
                                            layout: 'form',
                                            columnWidth: .3333,
                                            border: false,
                                            padding: 10,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '学位证书编号',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '学位授予国家（地区）',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '学位授予时间',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '学位授予单位',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                            ]
                                        },
                                        {
                                            layout: 'form',
                                            columnWidth: .3333,
                                            border: false,
                                            padding: 10,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '学位授予单位所在行政区划',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '最高学位标识',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '学位代码',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                            ]
                                        },
                                        {
                                            layout: 'form',
                                            columnWidth: .3333,
                                            border: false,
                                            padding: 10,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '第二学位',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '教育类别',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '学位名称',
                                                    maxLength: 100,
                                                    style: 'text-align:right'
                                                },
                                                {
                                                    xtype: 'button',
                                                    width: 100,
                                                    text: '保存',
                                                    style: {
                                                        'margin':'20px 0 0 290%',
                                                        'border-radius':'5px'
                                                    }
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
            ]
        }
    ],
    listeners: {
        afterrender: function (view) {
            var me = view;

        }
    }
});
