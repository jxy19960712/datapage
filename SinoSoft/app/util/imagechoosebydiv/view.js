Ext.define('SinoSoft.view.util.imagechoosebydiv.view', {
    extend: 'Ext.form.FieldContainer',
    xtype: 'imagechoosebydivview',
    requires: [
        'SinoSoft.view.util.imagechoosebydiv.item'
    ],
    single: true,//只能添加一个
    layout:'column',
    //viewModel:'music',
    initComponent:function(){
        this.callParent();
        var me = this;
        me.imageWidth = me.imageWidth || 150;
        me.imageHeight = me.imageHeight || 150;
        me.readOnly = me.readOnly || false;
        me.deltpl = {
            xtype: 'imagechoosebydivitem',
            width: me.imageWidth,
            height: me.imageHeight,
            border: 1,
            //style: {
            //    borderColor: 'black',
            //    borderStyle: 'solid',
            //},
            islast: true,
            isdelbtn: true,
            readOnly:me.readOnly,
            afterchoosefile: function (iamgeitem) {
                if (iamgeitem.islast && !me.single) {
                    iamgeitem.islast = false;
                    me.addbtn = me.add(me.deltpl);
                }
            },
            beforedelete: function (iamgeitem) {
                if (iamgeitem.islast && me.single) {
                    iamgeitem.islast = false;
                    me.addbtn = me.add(me.deltpl);
                }
                return true;
            }
        };
        me.setValue(me.value);
    },
    ready:false,
    setValue: function (value) {
        var me = this;
        value = [].concat(value || []);
        console.log(value);
        if (me.ready) {
            me.remove(me.addbtn, false);
            me.removeAll();
        } else {
            me.ready = true;
        }
        Ext.each(value, function (item) {
            me.last=me.add({
                xtype: 'imagechoosebydivitem',
                width: me.imageWidth,
                height: me.imageHeight,
                border: 1,
                //style: {
                //    borderColor: 'black',
                //    borderStyle: 'solid',
                //},
                showdel:true,
                islast: false,
                src: item,
                readOnly: me.readOnly,
                afterchoosefile: function (iamgeitem) {
                    if (iamgeitem.islast && !me.single) {
                        iamgeitem.islast = false;
                        me.addbtn = me.add(me.deltpl);
                    }
                },
                beforedelete: function (iamgeitem) {
                    if (iamgeitem.islast && me.single) {
                        iamgeitem.islast = false;
                        me.addbtn = me.add(me.deltpl);
                    }
                    return true;
                }
            });
        });
        if (me.single && value.length > 0) {
            me.last.islast = true;
        } else {
            if (!me.readOnly) {
                if (me.addbtn) {
                    me.add(me.addbtn);
                } else {
                    me.addbtn = me.add(me.deltpl);
                }
            }
        }
        
    },
    getValue:function(){
        var me = this;
        var value = [];
        Ext.each(me.items.items, function (item) {
            if (!item.isdelbtn) {
                if (item.dirty) {
                    value.push(item.file);
                }
            }
        });
        return value;
    },
    listeners: {
        afterrender: function (view) {
            var me = view;
            console.log(me);
        }
    }
});
