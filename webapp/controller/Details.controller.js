sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * 
     * @param { typeof sap.ui.core.mvc.Controller } Controller 
     * @param { typeof sap.ui.core.routing.History } History 
     */

    function (Controller, History) {
        'use strict';

        return Controller.extend("dev.invoices.controller.Details", {

            _onObjectMatchy: function (oEvent) {
                debugger;

                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model: "northwind"
                });

            },

            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatchy, this);

            },

            onNavBack: function () {

                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1)
                } else {
                    const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteApp", {}, true);
                };
            }



        });
    });