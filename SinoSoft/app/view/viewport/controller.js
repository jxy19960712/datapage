/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SinoSoft.view.viewport.controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.viewport',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            }
        },
        component: {
            'combotree': {
                '*': function (a, b, c, d) {
                    console.log(a);
                }
            }
        },
        global: {
            initviewport: 'onInitviewport'
        }
    },

    routes: {
        ":node": {
            before: 'beforeRouteChange',     
            action: 'onRouteChange'
        }
    },
    onInitviewport: function () {
        console.log("onInitviewport");
        var me = this,
            refs = me.getReferences(),
            treelist = refs.treelist;
        treelist.setBind('{navItems}');
        setTimeout(function () {
            waiting.close();
        }, 100);
    },
    beforeRouteChange: function (hashTag, action) {
        var me = this,
            refs = me.getReferences(),
            navigationList = refs.treelist,
            store = navigationList.getStore();
        switch (hashTag) {
            case "page404":
                this.redirectTo('page404');
                break;
            default:
                if (store) {
                    var node = store.findNode('routeId', hashTag) ||
                           store.findNode('viewType', hashTag);
                    if (node) {
                        action.resume();
                    } else {
                        //action.stop();
                        this.redirectTo('');
                    }
                } else {
                    //action.stop();
                    this.redirectTo('');
                }
                break;
        }
        
    },
    onRouteChange: function (id) {
        this.setCurrentView(id);
    },
    setCurrentView: function (hashTag) {
        hashTag = (hashTag || '').toLowerCase();

        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.treelist;
        var store = navigationList.getStore();
        var view = 'page404';
        if (store) {
            var node = store.findNode('routeId', hashTag) ||
                   store.findNode('viewType', hashTag);
            view = (node && node.get('viewType')) || 'page404';
        }
        var lastView = me.lastView;
        var existingItem = mainCard.child('component[routeId=' + hashTag + ']');
        var newView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = mainLayout.getActiveItem();
        if (existingItem) {
            var xtype = existingItem.xtype,
                routeId = existingItem.routeId;
            if (xtype != routeId) {
                existingItem.destroy();
                existingItem = undefined;
            }
        }
        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                routeId: hashTag,  // for existingItem search later
                hideMode: 'offsets'
            });
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }

        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }

        me.lastView = newView;
    },


    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.redirectTo(to);
        }
    },

});
