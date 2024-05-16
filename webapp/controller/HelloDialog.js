sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],

    /**
     * 
     * @param {sap.ui.base.ManagedObject} ManagedObject 
     * @param {sap.ui.core.Fragment} Fragment 
     */

    function (ManagedObject, Fragment) {
        "use strict"

        return ManagedObject.extend("dev.invoices.controller.HelloDialog", {

            constructor: function (oView) {
                this._oView = oView;
            },

            exit: function () {
                delete this._oView;
            },

            open: function () {

                const oView = this._oView;
                // Create dialog
                if (!oView.byId("_helloDialog")) {

                    let oFragmentController = {
                        onCloseDialog : function () {
                            oView.byId("_helloDialog").close();
                        }
                    };

                    // load 
                    Fragment.load({
                        id: oView.getId(),
                        name: "dev.invoices.fragment.HelloDialog",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                            oView.addDependent(oDialog);
                            oDialog.open();
                        });
                }
                else {
                    oView.byId("_helloDialog").open();
                }
            }

        });
    });