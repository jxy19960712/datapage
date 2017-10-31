/**
 *
 */
Ext.define('SinoSoft.util.grid.Panel', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.hidetitlegrid',

    afterCollapse: function (animated) {
        var me = this;
        me.callParent(arguments);
        me.hide();
    },
});