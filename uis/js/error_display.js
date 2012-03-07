org.systemsbiology.hukilau.components.queries.ErrorDisplay = Ext.extend(Ext.Panel, {
    constructor: function() {
        Ext.apply(this, arguments, {
            closable: true
        });

        this.html = '<div class="query_error">' + this.message + '</div>';
        org.systemsbiology.hukilau.components.queries.ErrorDisplay.superclass.constructor.apply(this, arguments);
    },

    initComponent: function() {
        org.systemsbiology.hukilau.components.queries.ErrorDisplay.superclass.initComponent.call(this);
    }
});