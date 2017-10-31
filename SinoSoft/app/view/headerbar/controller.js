/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SinoSoft.view.headerbar.controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.headerbar',

    onToggleNavigationSize: function (bar) {
        var treelist = bar.ownerCt.ownerCt.lookupReference('treelist'),
            collapsing = treelist.getMicro(),
            senchaLogo = this.getReferences().senchaLogo;

        var newwidth = collapsing ? 250 : 64;
        ct = treelist.ownerCt;
        senchaLogo.animate({dynamic: true, to: {width: newwidth}});
        ct.setWidth(newwidth);
        treelist.setMicro(!collapsing);
    },





});
