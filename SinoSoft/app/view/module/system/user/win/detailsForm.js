Ext.define('SinoSoft.view.module.system.user.detailsForm', {
    extend: 'Ext.window.Window',
    xtype: 'userdetailsForm',
    config: {
        note:null
    },
    requires: [
    ],
    layout: "fit",
    width: 600,
    height: 400,
    modal: true,
    items: [
        {
            xtype: 'grid',
            flex: 1,
            sortableColumns: false,
            enableColumnHide: false,
            enableColumnMove: false,
            columns: [
                { text: '序号', xtype: 'rownumberer' },
                { text: "说明", dataIndex: 'Remark', align: 'center', width: 120, flex: 1 },
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        { xtype: 'button', name: 'btnAdd', text: '新建', icon: 'resources/images/16/add.png', handler: 'Add' },
                        { xtype: 'button', name: 'btnEdit', text: '编辑', icon: 'resources/images/16/table_save.png', handler: 'Edit' },
                        { xtype: 'button', name: 'btnDelete', text: '删除', icon: 'resources/images/16/zuofei.png', handler: 'Delete' },
                        { xtype: 'button', name: 'btnLook', text: '查看图片', icon: 'resources/images/16/table_save.png', handler: 'LookPhoto' }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        }
    ],
    listeners: {
        afterrender: function (win, eOpts) {
            var me = win;
            var btnAdd = me.down("button[name='btnAdd']");
            var btnEdit = me.down("button[name='btnEdit']");
            var btnDelete = me.down("button[name='btnDelete']");
            var note = me.getNote();
            btnAdd.setVisible(note.State == 1);
            btnEdit.setVisible(note.State == 1);
            btnDelete.setVisible(note.State == 1);
            var grid = me.down("grid");
            //if (me.getIsDaoRu()) {
            //    btnAdd.setVisible(false);
            //    btnEdit.setVisible(false);
            //}
            var store = Ext.create('ServicePlatformWeb.store.BaseStore', {
                callbackfun: function (store, records) {
                    if (records.length > 0) {
                        grid.setSelection(records[0]);
                    } else {

                    }
                },
                pageSize: 5,
                listeners: {
                    beforeload: function () {
                        this.proxy.url = config.url + 'appid=1&method=298&token=' + BD.GuidCode;
                        this.proxy.extraParams = { cnid: note.CNId };
                    }
                }
            });
            grid.setStore(store);
            grid.down("pagingtoolbar").setStore(store);
            store.load();
        }
    }
});