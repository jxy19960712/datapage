Ext.define('SinoSoft.view.util.imagechoose.item', {
    extend: 'Ext.container.Container',
    xtype: 'imagechooseitem',
    requires: [

    ],
    emptyImgUrl: 'resources/images/add.png',
    layout: 'absolute',
    showdel: false,
    margin:'5',
    initComponent: function () {
        this.callParent(arguments);
        var me = this;
        me.img = me.add({
            xtype: 'image',
            x: 0,
            y: 0,
            width: me.width,
            height: me.height,
            border: me.border,
            style: me.style,
            src: me.src || me.emptyImgUrl
        });
        if (!(me.readOnly || me.disabled)) {
            me.filefield = me.add({
                xtype: 'filefield',
                buttonOnly: true,
                buttonConfig: {
                    x: -10,
                    y: 0,
                    width: me.width,
                    height: me.height,
                    text: '',
                    border:false,
                    margin: '0',
                    style: {
                        'backgroundColor': 'transparent',
                    }
                }
            });
            me.mon(me.filefield, "change", me.onfilechange, me);
            if (me.showdel) {
                me.delbtn = me.add({
                    xtype: 'button',
                    iconCls: 'fa fa-close delbtn',
                    x: me.width - 25,
                    y: 0,
                    width: 25,
                    height: 25,
                    border: false,
                    margin: '0',
                    style: {
                        //'backgroundColor': 'transparent',
                    },
                    handler: me.ondelete
                });
            }
        }
    },
    onfilechange: function (file, value, eOpts) {
        var me = this;
        var files = file.fileInputEl.dom.files;
        if (files.length > 0) {
            me.file = file.fileInputEl.dom.files[0];
            me.dirty = true;
            me.isdelbtn = false;
            var reader = new FileReader;
            reader.onload = function () {
                me.img.setSrc(reader.result)
            }
            reader.readAsDataURL(file.fileInputEl.dom.files[0]);
            if (!me.delbtn) {
                me.delbtn = me.add({
                    xtype:'button',
                    iconCls: 'fa fa-close delbtn',
                    x: me.width - 25,
                    y: 0,
                    width: 25,
                    height: 25,
                    border: false,
                    margin: '0',
                    style: {
                        //'backgroundColor': 'transparent',
                    },
                    handler: me.ondelete
                });
            }
            me.delbtn.show();
            me.afterchoosefile(me);
        }        
    },
    ondelete: function (btn) {
        var me = btn.ownerCt;
        //me.img.setSrc(me.emptyImgUrl);
        //me.file = undefined;
        //me.filefield.reset();
        //me.delbtn.hide();
        if (me.beforedelete(me)) {
            me.ownerCt.remove(me);
        }
        
    }

});
