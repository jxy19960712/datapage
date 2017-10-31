Ext.define('SinoSoft.view.pages.ErrorBase', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Spacer'
    ],

    //autoShow: true,
    header:false,
    cls: 'error-page-container',
    //closable: false,
    //title: 'Sencha',
    //titleAlign: 'center',
    //maximized: true,
    //modal: true,

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }
});
