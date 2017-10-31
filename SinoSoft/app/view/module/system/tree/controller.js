Ext.define('SinoSoft.view.module.system.tree.controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.treecontroller',

    onselectionchange: function (tree, selected) {
        var view = this.getView();
        var form = view.down('form');
        if (selected.length>0) {
            form.loadRecord(selected[0]);
        }
    },
    onsave: function (btn) {
        var view = this.getView();
        var form = view.down('form');
        var record = form.getForm().getValues();
        var tree = view.down('treepanel');
        var treerecords = tree.getSelection();
        Ext.apply(treerecords[0].data, record);
        treerecords[0].commit();
        //tree.getView().refreshNode(treerecords[0]);
    },
    onadd: function (btn) {
        var view = this.getView();
        var form = view.down('form');
        var record = form.getForm().getValues();
        var tree = view.down('treepanel');
        var treerecords = tree.getSelection();
        //if (treerecords[0].data.leaf) {
        //    treerecords[0].data.leaf = false;
        //}
        var store = tree.getStore();
        var node = store.getNodeById(treerecords[0].id);
        node.appendChild(record);
        //store.reload();
        //treerecords[0].data.children.push(record);
        //var node = tree.getView().getNode(treerecords[0]);
        
        //tree.getView().refresh();
        //tree.getView().refreshNode(treerecords[0]);
    },
    ondel: function (btn) {
        var view = this.getView();
        var tree = view.down('treepanel');
        var treerecords = tree.getSelection();
        //if (treerecords[0].data.leaf) {
        //    treerecords[0].data.leaf = false;
        //}
        var store = tree.getStore();
        var node = store.getNodeById(treerecords[0].id);
        node.remove();
        //store.reload();
        //treerecords[0].data.children.push(record);
        //var node = tree.getView().getNode(treerecords[0]);

        //tree.getView().refresh();
        //tree.getView().refreshNode(treerecords[0]);
    },
});