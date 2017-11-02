/**
 * Abstract filename encoder.
 */
Ext.define('SinoSoft.ux.upload.header.AbstractFilenameEncoder', {

    config : {},

    type : 'generic',

    encode : function(filename) {},

    getType : function() {
        return this.type;
    }
});
