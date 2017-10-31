/**
 * This class provides the modal Ext.Window support for all Authentication forms.
 * It's layout is structured to center any Authentication dialog within it's center,
 * and provides a backGround image during such operations.
 */
Ext.define('SinoSoft.util.LockingWindow', {
    extend: 'Ext.window.Window',
    xtype: 'lockingwindow',

    requires: [
        //'App.view.authentication.AuthenticationController',
        'Ext.layout.container.VBox'
    ],

    cls: 'auth-locked-window',
    closable: false,
    resizable: false,
    autoShow: true,
    header: false,
    border: false,
    titleAlign: 'center',
    maximized: true,
    modal: true,
    
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    //controller: 'authentication'
});
