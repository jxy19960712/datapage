Ext.define('SinoSoft.resizer.Splitter', {
    override: 'Ext.resizer.Splitter',
    ignoreHide:false,
    toggleTargetCmp: function (e, t) {
        var cmp = this.getCollapseTarget(),
            ignoreHide = this.ignoreHide,
            placeholder = cmp.placeholder,
            toggle;
        // We can only toggle the target if it offers the expand/collapse API
        if (Ext.isFunction(cmp.expand) && Ext.isFunction(cmp.collapse)) {
            if (placeholder && !placeholder.hidden) {
                toggle = true;
            } else {
                toggle = ignoreHide ? true : !cmp.hidden;
            }
            if (toggle) {
                if (cmp.collapsed || cmp.floatedFromCollapse) {
                    if (ignoreHide) {
                        cmp.show();
                    }
                    cmp.expand();
                } else if (cmp.collapseDirection) {
                    cmp.collapse();
                    if (ignoreHide) {
                        cmp.hide();
                    }
                } else {
                    cmp.collapse(this.renderData.collapseDir);
                    if (ignoreHide) {
                        cmp.hide();
                    }
                }
            }
        }
    },
});