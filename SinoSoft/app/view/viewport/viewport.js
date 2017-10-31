/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SinoSoft.view.viewport.viewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'SinoSoft.view.viewport.controller',
        'SinoSoft.view.viewport.viewmodel',
    ],
    config: {
        a:'',
    },
    controller: 'viewport',
    viewModel: 'viewport',
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    items: [
        {
            xtype: 'headerbar'
        },
        {
            xtype: 'container',
            cls:'Container-main',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch',

                // Tell the layout to animate the x/width of the child items.
                animate: true,
                animatePolicy: {
                    x: true,
                    width: true
                }
            },
            items: [
                {
                    xtype: 'container',
                    cls:'Container-nav',
                    width: 250,
                    reference: 'treelistContainer',
                    scrollable: { y: true, scrollbars: false },
                    style: {
                        'background-color':'rgb(44, 56, 69)'
                    },
                    items: [{
                        xtype: 'treelist',
                        reference: 'treelist',
                        ui: 'nav',
                        cls:'hh',
                        expanderFirst: false,
                        expanderOnly: false,
                        singleExpand: false,
                        listeners: {
                            selectionchange: 'onNavigationTreeSelectionChange'
                        },
                        // ----------------
                        bind: '{navItems}'
                        // --------------------
                    },
                    ]
                },
                {
                    xtype: 'container',
                    reference: 'mainCardPanel',
                    cls:'Container-section',
                    height:969,
                    maintainFlex: true,
                    flex: 1,
                    scrollable: { y: true, scrollbars: false },
                    layout: {
                        type: 'card',
                        anchor: '100%',
                    }
                }
            ]
        },
        
    ],
    listeners: {
        
    }
});
