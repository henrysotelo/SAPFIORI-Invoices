sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.base.Log} Log
     */
    function (Controller, Log) {
        "use strict";

        return Controller.extend("dev.invoices.controller.HelloPanel", {

            onInit: function () {

            },

            onBeforeRendering: function () {

                debugger;
                window.message = "Log message - onBeforeRendering";
                Log.error(window.message);
            },

            onAfterRendering: function () {

            },

            onShowHello: function () {
                alert('Hola mundo Fiori');
            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            }

        });
    });