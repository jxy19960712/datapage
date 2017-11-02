Ext.define('SinoSoft.ux.form.field.Date', {
    extend: 'Ext.form.field.Date',
    alias: 'widget.datefieldex',
    submitFormat: 'Y-m-d',
    formats: ['Y-m-d H:i:s.u', 'Y-m-d H:i:s', 'Y-m-d', 'Y-m-d H:i'],
    getValueByFormats: function (value) {
        for (var i = 0; i < this.formats.length; i++) {
            var a = Ext.Date.parse(value, this.formats[i]);
            if (a != null) {
                return a;
            }
        }
        return null;
    },
    parseDate: function (value) {
        var me = this,
            val = value,
            altFormats = me.altFormats,
            altFormatsArray = me.altFormatsArray,
            i = 0,
            len;
        if (!Ext.isDate(val) && !Ext.isObject(val)) {
            if (val == null) {
                val = "";
            } else {
                if (val.indexOf("/Date") != -1) {
                    val = val.replace("/Date(", "").replace(")/", "");
                    val = new Date(val * 1);
                } else if (val.indexOf("T") != -1) {
                    if (val == "0001-01-01T00:00:00") {
                        val = null;
                    } else {
                        val = val.replace("T", " ");
                        var jindex = val.indexOf("+");
                        if (jindex != -1) {
                            val = val.substr(0, jindex);
                        }
                        val = me.getValueByFormats(val);
                    }
                } else {
                    val = me.getValueByFormats(val);
                    if (val == null) {
                        val = value;
                        val = me.safeParse(val, me.format);
                        if (!val && altFormats) {
                            val = value;
                            altFormatsArray = altFormatsArray || altFormats.split('|');
                            len = altFormatsArray.length;
                            for (; i < len && !val; ++i) {
                                val = me.safeParse(val, altFormatsArray[i]);
                            }
                        }
                    }
                }
            }
        }
        return val;
    }
});