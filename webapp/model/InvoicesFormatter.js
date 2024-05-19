sap.ui.define([],

    function () {
        'use strict';

        return {
            invoiceStatus: function (sStatus) {

                const resourceBundle1 = this.getView().getModel("i18n").getResourceBundle();
                const resourceBundle2 = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                //resourceBundle.getText("invoiceStatusB");
                //console.log(resourceBundle2.getText("invoicesListTitle"));

                switch (sStatus) {
                    case "A": return 'New';
                    case "B": return 'Progres';
                    case "c": return 'Done';
                    default: return 'sStatus';
                }
            }
        }
    });