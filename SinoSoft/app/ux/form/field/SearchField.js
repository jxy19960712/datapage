
Ext.define('SinoSoft.ux.form.field.SearchField', {
    extend: 'Ext.form.field.Text',

    alias: 'widget.searchfieldex',
    config: {
        isAjax: false,
    },
    triggers: {
        clear: {
            weight: 0,
            cls: Ext.baseCSSPrefix + 'form-clear-trigger',
            hidden: true,
            handler: 'onClearClick',
            scope: 'this'
        },
        search: {
            weight: 1,
            cls: Ext.baseCSSPrefix + 'form-search-trigger',
            handler: 'onSearchClick',
            scope: 'this'
        }
    },
    isRemote:false,
    hasSearch: false,
    paramName: 'query',
    initComponent: function () {
        var me = this,
            store = me.store,
            isAjax = me.getIsAjax(),
            proxy;

        me.callParent(arguments);
        me.on('specialkey', function (f, e) {
            if (e.getKey() == e.ENTER) {
                me.onSearchClick();
            }
        });
        if (!isAjax) {
            if (!store || !store.isStore) {
                store = me.store = Ext.data.StoreManager.lookup(store);
            }
            proxy = me.store.getProxy();
            if (proxy.type == "memory") {
                store.setRemoteFilter(false);
            } else {
                me.isRemote = true;
                store.setRemoteFilter(true);
                proxy.setFilterParam(me.paramName);
                proxy.encodeFilters = function (filters) {
                    return filters[0].getValue();
                }
            }
        }        
        // We're going to use filtering

        

        // Set up the proxy to encode the filter in the simplest way as a name/value pair


    },

    onClearClick: function () {
        var me = this,
            activeFilter = me.activeFilter,
            isAjax = me.getIsAjax();
        me.setValue('');
        if (!isAjax) {
            if (activeFilter) {
                if (me.store.root) {
                    me.store.getFilters().removeAll();
                } else {
                    me.store.getFilters().remove(activeFilter);
                }
                me.activeFilter = null;
            }
        }
        me.getTrigger('clear').hide();
        me.updateLayout();
    },

    onSearchClick: function () {
        var me = this,
            value = me.getValue(),
            isAjax = me.getIsAjax();

        if (!isAjax) {
            if (value.length > 0) {

                me.store.getFilters().removeAll();
                me.activeFilter = new Ext.util.Filter({
                    property: me.paramName,
                    value: value
                });
                // Param name is ignored here since we use custom encoding in the proxy.
                // id is used by the Store to replace any previous filter
                if (me.isRemote) {
                    me.store.getFilters().add(me.activeFilter);
                } else {
                    if (me.store.root) {
                        me.store.filterBy(function (record) {
                            var ishas = 0;
                            record.cascade(function (node) {
                                if (node.get(me.paramName).toLowerCase().indexOf(value.toLowerCase()) != -1) {
                                    ishas++;
                                }
                            });
                            return ishas > 0;
                        });
                    } else {
                        me.store.getFilters().add(me.activeFilter);
                    }
                }
                me.getTrigger('clear').show();
                me.updateLayout();
            }
        } else {
            me.getTrigger('clear').show();
            me.updateLayout();
            me.fireEvent("search",me,value);
        }
    }
});