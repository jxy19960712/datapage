/**
 * This class provides the modal Ext.Window support for all Authentication forms.
 * It's layout is structured to center any Authentication dialog within it's center,
 * and provides a backGround image during such operations.
 */
Ext.define('SinoSoft.util.WaitingWindow', {
    extend: 'Ext.window.Window',
    xtype: 'waitingWindow',

    requires: [
    ],
    closable: false,
    resizable: false,
    autoShow: true,
    cls:'wait-window',
    header: false,
    border: false,
    maximized: true,
    //width: 50,
    //height:50,
    modal: true,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'container',
            cls: 'wait-launching'            
        }
    ]
});
