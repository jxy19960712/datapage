Ext.define('SinoSoft.store.proxyfiles', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.proxyfiles',
    storeId: 'proxyfiles',
    proxy: {
        type: 'ajax',
        url: 'filedata.js'
    },
    root: {
        text: 'Ext JS',
        id: 'src',
        expanded: true
    },
    autoLoad: true,
    folderSort: true,
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]
});