sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dev.invoices.controller.HelloPanel", {

            onInit: function () {

            },

            onShowHello: function () {
                alert('Hola mundo Fiori');
            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            }

        });
    });