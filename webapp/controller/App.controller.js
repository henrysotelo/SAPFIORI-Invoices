sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.Device} Device
     */
    function (Controller, Device) {
        "use strict";

        return Controller.extend("dev.invoices.controller.App", {
            onInit: function () {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            },

            onOpenDialogHeader: function () {
                this.getOwnerComponent().openHelloDialog();
            }
        });
    });
