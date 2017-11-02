Ext.define('SinoSoft.ux.multimodelist.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.multimodelistcontroller',
    requires: [
        
    ],
    ready: false,

    afterRender: function () {
        this.ready = true; // skips updateSorters from button initialization
        var me = this.getView(),
                modes = me.modes,
                sorts = me.sorts,
                mode = me.mode,
                sb = me.down("segmentedbutton"),
                boxreorderer = me.down("toolbar[itemId='boxreorderer']");
        me.store = me.store;
        me.modes = {};
        Ext.each(modes, function (item) {
            me.modes[item.name] = item;
            sb.add({
                iconCls: item.iconCls,
                tooltip: item.text,
                value: item.name,
            });
        });
        Ext.each(sorts, function (item) {
            boxreorderer.add(Ext.apply({
                xtype: 'multisortbutton'
            }, item));
        });
        sb.setValue([mode]);
        this.updateStoreSorters();

    },
    changeMode: function (btn, newValue, oldValue, eOpts) {
        var me = this.getView(),
                    mode = me.mode;
        if (me.lastmode) {
            me.remove(me[me.lastmode], false);
        }
        if (newValue != null) {
            mode = newValue;
            if (!me[mode]) {
                if (me.modes[mode]) {
                    if (me.modes[mode].isTpl) {
                        me[mode] = me.add({
                            xtype: 'dataview',
                            reference: 'dataview',
                            plugins: [{
                                ptype: 'ux-animated-dataview'
                            }],
                            selectionModel: {
                                type: 'dataviewmodel',
                                mode: 'MULTI',
                            },
                            scrollable: true,
                            store: me.store,
                            itemSelector: me.modes[mode].itemSelector,
                            selectedItemCls: me.modes[mode].selectedItemCls,
                            tpl: me.modes[mode].content,
                        });
                    } else {
                        me[mode] = me.add({
                            xtype: 'grid',
                            store: me.store,
                            columns: me.modes[mode].content,
                            sortableColumns: false
                        });
                    }
                }
            } else {
                me.add(me[mode]);
            }
            me.lastmode = mode;
        }

    },
    /**
     * Returns the array of Ext.util.Sorters defined by the current toolbar button order
     * @return {Array} The sorters
     */
    getSorters: function () {
        var view = this.getView(),
            buttons = view.query('multisortbutton'),
            sorters = [];

        Ext.each(buttons, function (button) {
            sorters.push({
                property: button.getDataIndex(),
                direction: button.getDirection()
            });
        });

        return sorters;
    },

    /**
     * @private
     * Updates the DataView's Store's sorters based on the current Toolbar button configuration
     */
    updateStoreSorters: function () {
        var view = this.getView();
        if (this.ready) {
            var sorters = this.getSorters();
            view.store.sort(sorters);
        }
    }

});