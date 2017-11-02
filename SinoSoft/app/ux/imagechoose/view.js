Ext.define('SinoSoft.ux.imagechoose.view', {
    extend: 'Ext.form.FieldContainer',
    xtype: 'imagechooseview',
    requires: [
        'SinoSoft.ux.imagechoose.item'
    ],
    single: true,//只能添加一个
    layout:'column',
    //viewModel:'music',
    //未在config中定义字段，字段如下
    //imageWidth 图片宽度
    //imageHeight图片高度
    //readOnly   只读
    //single     单图片模式
    //value      值（要显示的图片路径）
    
    initComponent:function(){
        this.callParent();
        var me = this;
        me.imageWidth = me.imageWidth || 150;
        me.imageHeight = me.imageHeight || 150;
        me.readOnly = me.readOnly || false;
        me.deltpl = {
            xtype: 'imagechooseitem',
            width: me.imageWidth,
            height: me.imageHeight,
            border: 1,
            //style: {
            //    borderColor: 'black',
            //    borderStyle: 'solid',
            //},
            islast: true,
            isdelbtn: true,
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
        };
        me.setValue(me.value);
    },
    ready:false,
    setValue: function (value) {
        var me = this;
        value = [].concat(value || []);
        if (me.ready) {
            me.remove(me.addbtn, false);
            me.removeAll();
        } else {
            me.ready = true;
        }
        Ext.each(value, function (item) {
            me.last=me.add({
                xtype: 'imagechooseitem',
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
                } else {
                    value.push(item.src);
                }
            }
        });
        return value;
    },
});
