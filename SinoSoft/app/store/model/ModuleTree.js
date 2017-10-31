Ext.define('SinoSoft.model.ModuleTree', {
    extend: 'Ext.data.TreeModel',
    fields: [
        {
            name: 'text',

            mapping: 'Name'
        },
        {
            name: 'leaf',
            mapping: 'Leaf'
        },
        {
            name: 'children',
            mapping: 'Children'
        },
        {
            name: 'icon',
            mapping: 'Icon'
        },
        {
            name: 'expanded',
            defaultValue: false
        }
    ]
});