Ext.define('SinoSoft.ux.multimodelist.View', {
    extend: 'Ext.panel.Panel',
    xtype: 'multimodelistview',
    requires: [
        'Ext.ux.BoxReorderer',
        'Ext.ux.DataView.Animated',
        'SinoSoft.ux.button.MultiSortButton',
        'SinoSoft.ux.multimodelist.Controller'
    ],
    layout: 'fit',
    controller: 'multimodelistcontroller',

    tbar: {
        itemId: 'boxreorderer',
        plugins: [{
            ptype: 'boxreorderer',
            listeners: {
                drop: 'updateStoreSorters'
            }
        }],

        defaults: {
            listeners: {
                changeDirection: 'updateStoreSorters'
            }
        },

        items: [{
            xtype: 'tbtext',
            text: 'Sort on these fields:',
            reorderable: false
        }]
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            {
                xtype: 'segmentedbutton',
                allowMultiple: false,
                items: [],
                listeners: {
                    change: 'changeMode'
                }
            }
        ]
    }],
    store: Ext.create("Ext.data.Store"),
    mode: 'big',//默认显示模式,mode必须为modes中子项的name，modes中子项的name不能使用组件属性否则会出问题
    modes: [
        {
            name: 'small',
            text: '小图标',
            iconCls: 'fa fa-address-book-o black16',
            isTpl: true,
            itemSelector: 'div.dataview-multisort-item',
            selectedItemCls: 'dataview-multisort-item-selected',
            content: [
               '<tpl for=".">',
                   '<div class="dataview-multisort-item">',
                       '<div class="title">',
                           '<img src="resources/images/touch-icons/{thumb}" />',
                           '<h3>{name}</h3>',
                       '</div>',
                   '</div>',
               '</tpl>'
            ]
        },
        {
            name: 'big',
            text: '大图标',
            iconCls: 'fa fa-address-card-o black16',
            isTpl: true,
            itemSelector: 'div.dataview-multisort-item',
            selectedItemCls: 'dataview-multisort-item-selected',
            content: [
               '<tpl for=".">',
                   '<div class="dataview-multisort-item">',
                       '<div class="title">',
                           '<img src="resources/images/touch-icons/{thumb}" />',
                           '<h3>{name}</h3>',
                       '</div>',
                       '<div class="content">',
                           '{Introduction}',
                       '</div>',
                   '</div>',
               '</tpl>'
            ]
        },
        {
            name: 'list',
            text: '列表',
            iconCls: 'fa fa-list-ol black16',
            isTpl: false,
            content: [
                { text: 'name', dataIndex: 'name' },
                { text: 'thumb', dataIndex: 'thumb' },
                { text: 'Introduction', dataIndex: 'Introduction' },
                { text: 'type', dataIndex: 'type' }
            ]
        }
    ],
    sorts: [
        {
            text: 'Type',
            dataIndex: 'type',
        },
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'thumb',
            dataIndex: 'thumb'
        }
    ],
    setStore: function (store) {
        var me = this;
        me.store = store;
        me[me.lastmode].setStore(me.store);
        me[me.lastmode].refresh();
    }
});
