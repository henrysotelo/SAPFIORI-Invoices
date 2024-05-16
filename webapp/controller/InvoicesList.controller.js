sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("dev.invoices.controller.InvoicesList", {

           onInit: function () {
                const oData = {
                    usd: "USD",
                    eur: "EUR",
                    cop: "COP"
                };

                var oViewModel = new JSONModel(oData);

                this.getView().setModel(oViewModel, "currency");
                console.log(oViewModel);
            }

        });
    });