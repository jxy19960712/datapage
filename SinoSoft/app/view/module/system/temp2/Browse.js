Ext.define('SinoSoft.view.module.system.temp2.Browse', {
    extend: 'SinoSoft.util.Browse',
    xtype: 'tempbrowse2',
    requires: [],
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
            {
                xtype: 'tbtext',
                text: '张翰时，男，大方县县委书记，常委',
                height: 45,
                style: {
                    'line-height': '45px',
                    'font-size': '18px',
                    'color': '#35baf5',
                }
            }
        ]
    },
    items: [
        {
            xtype: 'tabpanel',
            cls: 'Container-section-select3',
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
                cls: 'Container-section-select3-titlebar',
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
                    stlye:{
                        'font-size':'15px!important'
                    }
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
                    xtype: 'panel',
                    width: '100%',
                    cls: 'Wrapper-from',
                    padding: 10,
                    layout: 'column',
                    items: [
                        {
                            layout: 'form',
                            columnWidth: .3333,
                            border: false,
                            padding: 10,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '姓名',
                                    maxLength: 100,
                                    beforeLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
                                    ],
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '姓名拼音缩写',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'combo',
                                    store: 'files',
                                    fieldLabel: '性别',
                                    //queryMode: 'local',
                                    displayField: 'text',
                                    valueField: 'value',
                                    editable: false,
                                    store: Ext.create('Ext.data.Store', {
                                        data: [{text: 'male', value: 1}, {text: 'female', value: 2}]
                                    }),
                                    beforeLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
                                    ],
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'combo',
                                    store: 'files',
                                    fieldLabel: '民族',
                                    //queryMode: 'local',
                                    displayField: 'text',
                                    valueField: 'value',
                                    editable: false,
                                    store: Ext.create('Ext.data.Store', {
                                        data: [{text: '汉族', value: 1}, {text: '藏族', value: 2}]
                                    }),
                                    beforeLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
                                    ],
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textarea',
                                    fieldLabel: '个人基本情况备注',
                                    maxLength: 1000,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '是否具有基层工作经历',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '个人身份有效证件名称',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '离岗退养标识',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '离岗退养标识',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '参照公务员法管理标识',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '曾担任的最高职务',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'button',
                                    width: 100,
                                    text: '保存',
                                    style: {
                                        'margin-left': '107%'
                                    }
                                }
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
                                    fieldLabel: '出生年月',
                                    maxLength: 100,
                                    beforeLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
                                    ],
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '籍贯',
                                    maxLength: 100,
                                    beforeLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
                                    ],
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '出生地',
                                    maxLength: 100,
                                    beforeLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
                                    ],
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '婚姻状况',
                                    maxLength: 100,
                                    beforeLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
                                    ],
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '享受待遇级别',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '专长',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '基层工作经历时间',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '个人身份有效证件号码',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '健康状况',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '个人身份',
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
                                    xtype: 'imagechoosebydivview',
                                    // value: 'resources/images/user-profile/1.png',
                                    single:true,
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '爱好',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '个人关系所在单位性质类别',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '户籍所在地',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textarea',
                                    fieldLabel: '健康状况描述',
                                    maxLength: 1000,
                                    style: 'text-align:right'
                                },
                            ]
                        }
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
