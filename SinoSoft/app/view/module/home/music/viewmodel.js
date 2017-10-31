/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('SinoSoft.view.module.home.music.viewmodel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.music',

    data: {
        user: null,
        color: '#0f0',
        date:'2017-01-02 00:00:00'
    },
    stores: {
        files: {
            type:'tree',
            proxy: {
                type: 'ajax',
                url: 'filedata.js',
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
        }
    }
});
