/**
 * 递归循环
 */
Ext.define('SinoSoft.common.RecursiveCycle', {
    alternateClassName: 'RecursiveCycle', 
    statics: {
    	cycle: function (items,field,callbackfun) {
    	    Ext.each(items, function (item) {
    	        RecursiveCycle.recursive(item, field, callbackfun);
    	    });
    	},
    	recursive: function (item, field, callbackfun) {
    	    if (Ext.isFunction(callbackfun)) {
    	        callbackfun(item);
    	    }
    	    var childs = item[field];
    	    if (childs && Ext.isArray(childs)) {
    	        Ext.each(childs, function (child) {
    	            RecursiveCycle.recursive(child, field, callbackfun);
    	        });
    	    }
    	}
    }
});