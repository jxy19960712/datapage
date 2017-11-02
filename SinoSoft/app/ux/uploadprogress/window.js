/**
 * 等待窗口
 */
Ext.define('SinoSoft.ux.uploadprogress.window', {
    extend: 'Ext.window.Window',
    requires: [
    ],
    closable: false,
    resizable: false,
    autoShow: true,
    header: false,
    border: false,
    style:'border:0px',
    width: 600,
    height: 100,
    modal: true,
    layout: "column",
    items: [
       {
           xtype: 'displayfield',
           reference: 'usetime',
           width: 270,
           fieldLabel: '已用时',
           labelAlign: 'right',
           labelWidth:80,
           margin:'0 10 0 10'
       },
       {
           xtype: 'displayfield',
           reference: 'yutime',
           width: 270,
           fieldLabel: '剩余时间',
           labelAlign: 'right',
           labelWidth: 80,
           margin:'0 10 0 10'
       },
        {
            xtype: 'progressbar',
            reference: 'jindu',
            width: 580,
            margin: '0 10 0 10'
        },
       {
           xtype: 'displayfield',
           reference: 'speed',
           width: 580,
           fieldLabel: '速率',
           labelAlign: 'right',
           labelWidth: 80,
           margin:'0 10 0 10'
       },
    ],
    updatetext: function (usetime, yutime, jindu, speed) {
        this.down("[reference='usetime']").setValue(usetime);
        this.down("[reference='yutime']").setValue(yutime);
        this.down("[reference='jindu']").setValue(jindu);
        this.down("[reference='speed']").setValue(speed);
    }
});
