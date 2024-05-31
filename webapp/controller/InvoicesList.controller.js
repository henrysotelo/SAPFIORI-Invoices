sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/InvoicesFormatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
     */
    function (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("dev.invoices.controller.InvoicesList", {

            formatter: InvoicesFormatter,

            onInit: function () {
                const oData = {
                    usd: "USD",
                    eur: "EUR",
                    cop: "COP"
                };

                var oViewModel = new JSONModel(oData);

                this.getView().setModel(oViewModel, "currency");
                console.log(oViewModel);
            },

            onFilterInvoices: function (oEvent) {
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    var aFilterNew = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, sQuery);
                    aFilter.push(aFilterNew);
                };
                const oList = this.getView().byId("_listID");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);

                console.log(sQuery);
            },

            navigateToDetails: function (oEvento) {
                
                const oItem = oEvento.getSource();
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.navTo("Details", { 
                    invoicePath: window.encodeURIComponent(oItem.getBindingContext("northwind").getPath().substr(1))
                });
                console.log(oRouter);

            }

        });
    });