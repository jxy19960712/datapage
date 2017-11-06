/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('SinoSoft.view.viewport.viewmodel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.viewport',

    formulas: {
        selectionText: function(get) {
            var selection = get('treelist.selection'),
                path;
            if (selection) {
                path = selection.getPath('text');
                path = path.replace(/^\/Root/, '');
                return 'Selected: ' + path;
            } else {
                return 'No node selected';
            }
        }
    },
    data: {
    },
    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                    text: 'Home',
                    iconCls: 'x-fa fa-home',                    
                    children: [{
                        text: 'Messages',
                        iconCls: 'x-fa fa-inbox',
                        viewType:'messages-browse',
                        leaf: true
                    },{
                        text: 'Archive',
                        iconCls: 'x-fa fa-database',
                        children: [{
                            text: 'First',
                            iconCls: 'x-fa fa-sliders',
                            leaf: true
                        },{
                            text: 'No Icon',
                            iconCls: null,
                            leaf: true
                        }]
                    },{
                        text: 'Music',
                        iconCls: 'x-fa fa-music',
                        viewType:'music-browse',
                        leaf: true
                    },{
                        text: 'Video',
                        iconCls: 'x-fa fa-film',
                        leaf: true
                    }]
                },{
                    text: 'Users',
                    iconCls: 'x-fa fa-user',
                    children: [{
                        text: '用户管理',
                        iconCls: 'x-fa fa-tag',
                        viewType:'userbrowse',
                        leaf: true
                    },{
                        text: '用户管理2',
                        iconCls: 'x-fa fa-tag',
                        viewType:'tempbrowse',
                        leaf: true
                    },{
                        text: '用户管理3',
                        iconCls: 'x-fa fa-tag',
                        viewType:'tempbrowse2',
                        leaf: true
                    },{
                        text: '用户管理4',
                        iconCls: 'x-fa fa-tag',
                        viewType:'tempbrowse3',
                        leaf: true
                    },{
                        text: '用户管理5',
                        iconCls: 'x-fa fa-tag',
                        viewType:'tempbrowse4',
                        leaf: true
                    }, {
                        text: '树的使用',
                        iconCls: 'x-fa fa-trash',
                        viewType: 'treebrowse',
                        leaf: true
                    }, {
                        text: '资源管理器',
                        iconCls: 'x-fa fa-trash',
                        viewType: 'listbrowse',
                        leaf: true
                    }]
                },{
                    text: 'Groups',
                    iconCls: 'x-fa fa-group',
                    leaf: true
                },{
                    text: 'Settings',
                    iconCls: 'x-fa fa-wrench',
                    children: [{
                        text: 'Sharing',
                        iconCls: 'x-fa fa-share-alt',
                        leaf: true
                    },{
                        text: 'Notifications',
                        iconCls: 'x-fa fa-flag',
                        leaf: true
                    },{
                        text: 'Network',
                        iconCls: 'x-fa fa-signal',
                        leaf: true
                    }]
                }]
            }
        }
    }
});
