sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/RatingIndicator",
    "sap/m/Label",
    "sap/m/Button"
],
    /**
     * 
     * @param {typeof sap.ui.core.Control} Control 
     * @param {typeof sap.m.RatingIndicator} RatingIndicator 
     * @param {typeof sap.m.Label} Label 
     * @param {typeof sap.m.Button} Button 
     */

    function (Control, RatingIndicator, Label, Button) {
        'use strict';

        return Control.extend("dev.invoices.control.ProductRating", {

            metadata: {
                properties: {
                    value: { type: "float", defaultValue: 0 }
                },

                aggregations: {
                    _rating: {
                        type: "sap.m.RatingIndicator",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _label: {
                        type: "sap.m.Label",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _button: {
                        type: "sap.m.Button",
                        multiple: false,
                        visibility: "hidden"
                    }
                },

                events: {
                    change: {
                        parameters: {
                            value: { type: "int" }
                        }
                    }
                }
            },

            init: function () {

                // @ts-ignore
                this.setAggregation("_rating", new RatingIndicator({
                    // @ts-ignore
                    value : this.getValue(),
                    iconSize: "2rem",
                    visualMode: "Half",
                    liveChange: this._onRate.bind(this)
                }));

                this.setAggregation("_label", new Label({
                    text: "{i18n>productRatingLabelInitial}"
                }).addStyleClass("sapUiSmallMargin"));

                this.setAggregation("_button", new Button({
                    text: "{i18n>productRatingButton}",
                    press: this._onSubmit.bind(this)
                }).addStyleClass("sapUiTinyMarginTopBottom"));
            },

            _onRate: function (oEvent) {
                // @ts-ignore
                const oResourceBundle = this.getModel("i18n").getResourceBundle();
                const fValue = oEvent.getParameter("value");

                this.setProperty("value", fValue, true);
                // @ts-ignore
                this.getAggregation("_label").setText(oResourceBundle.getText("productRatingIndicator", [fValue,oEvent.getSource().getMaxValue()]));
                // @ts-ignore
                this.getAggregation("_label").setDesign("Bold");
            },

            _onSubmit: function () {
                // @ts-ignore
                const oResourceBundle = this.getModel("i18n").getResourceBundle();

                // @ts-ignore
                this.getAggregation("_rating").setEnabled(false);
                // @ts-ignore
                this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
                // @ts-ignore
                this.getAggregation("_button").setEnabled(false);
                this.fireEvent("change", {
                    // @ts-ignore
                    value: this.getValue()
                });
            },

            reset: function () {
                // @ts-ignore
                const oResourceBundle = this.getModel("i18n").getResourceBundle();
                this.setValue(0);
                // @ts-ignore
                this.getAggregation("_rating").setEnabled(true);
                // @ts-ignore
                this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelInitial"));
                // @ts-ignore
                this.getAggregation("_label").setDesign("Standard");
                // @ts-ignore
                this.getAggregation("_button").setEnabled(true);
             },

            setValue: function (fValue) {
                this.setProperty("value", fValue, true);
                // @ts-ignore
                this.getAggregation("_rating").setValue(fValue);
            },

            renderer: function (oRm, oControl) {
                oRm.openStart("div", oControl);
                oRm.class("productRating");
                oRm.openEnd();
                oRm.renderControl(oControl.getAggregation("_rating"));
                oRm.renderControl(oControl.getAggregation("_label"));
                oRm.renderControl(oControl.getAggregation("_button"));
                oRm.close("div");
            }
        });
    });