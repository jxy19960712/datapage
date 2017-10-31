Ext.define('SinoSoft.view.module.home.music.Browse', {
    extend: 'SinoSoft.util.Browse',
    xtype: 'music-browse',
    requires: [
        'SinoSoft.util.form.field.ComboBoxTree',
        'Ext.ux.colorpick.Selector'
    ],
    viewModel:'music',
    items: [
        {
            xtype: 'form',
            title: 'music',
            items: [
                {
                    xtype: 'combotree',
                    store: 'files',
                    editable: false,
                    displayField: 'text',
                    valueField: 'text',
                    fieldLabel: '使用静态数据',
                    name:'A',
                    bind:'{user.A}'
                },
                {
                    xtype: 'combotree',
                    //store: 'proxyfiles',
                    //store: {
                    //    type:'tree',
                    //    proxy: {
                    //        type: 'ajax',
                    //        url: 'filedata.js'
                    //    },
                    //    root: {
                    //        text: 'Ext JS',
                    //        id: 'src',
                    //        expanded: true
                    //    },
                    //    autoLoad: true,
                    //    folderSort: true,
                    //    sorters: [{
                    //        property: 'text',
                    //        direction: 'ASC'
                    //    }]
                    //},
                    editable: false,
                    displayField: 'text',
                    valueField: 'text',
                    fieldLabel: '使用动态数据',
                    name: 'B',
                    bind: {
                        value: '{user.B}',
                        store: '{files}'
                    },
                    //value: 'DragSource.js',
                    //listeners: {
                    //    afterrender: function (ctree) {
                    //        ctree.setValue('DragSource.js');
                    //    }
                    //}
                },
                {
                    xtype: 'combo',
                    store: 'files',
                    //queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    editable:false,
                    store: Ext.create('Ext.data.Store', {
                        data: [{ text: 'A', value: 1 }, { text: 'B', value: 2 }, { text: 'C', value: 3 }, { text: 'D', value: 4 }]
                    }),
                    fieldLabel: '下拉框'
                },
                {
                    xtype: 'colorfield',
                    bind: {
                        value: '{color}',
                    }
                },
                {
                xtype: 'textfield',
                name: 'Name',
                bind: {
                    value:'{color}',
                },
                listeners: {
                    focus: function () {
                        console.log("focus");
                    },
                    specialkey: function (field, e) {
                        // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                        // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                        console.log(e);
                    }
                }

            },
            {
                xtype: 'datefield',
                name:'Time',
                listeners: {
                    focus: function () {
                        console.log("focus");
                    }
                },
                format: 'y年m月d日',
                submitFormat:'Y-m-d',
                bind: {
                    value: '{date}',
                }

            }
            ],
            buttons: [{
                xtype: 'button',
                text: 'submit',
                handler: function (btn) {
                    var view = btn.ownerCt.ownerCt;
                    var values = view.getForm().getValues();
                    //var values = view.ownerCt.getViewModel().getData();
                    console.log(values);
                }
            },{
                xtype:'button',
                text: 'reset',
                handler: function (btn) {
                    var view = btn.ownerCt.ownerCt;
                    //var values = view.reset();
                    view.ownerCt.getViewModel().setData({
                        user: { A: 'DragSource.js', B: 'Element.form.js' }
                    });
                }
            }]

        }
    ],
    listeners: {
        afterrender: function (view) {
            var me = view;
            me.getViewModel().set("user",{ A: 'DragSource.js', B: 'DD.js' });
            //var form = view.down("form");
            //form.getForm().setValues({ A: 'DragSource.js', B: 'DragDropManager.js' });
            var text = me.down("textfield[name='Name']");
            text.el.on("click", function () {
                console.log("click");
            });
        }
    }
});
