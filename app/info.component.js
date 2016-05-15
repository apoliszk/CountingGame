(function(app) {
    app.InfoComponent =
        ng.core.Component({
            selector: 'my-info',
            templateUrl: 'app/info.component.html'
        })
        .Class({
            constructor: function() {
                this.infoShown = false;
                this.toggleInfo();
            },

            toggleInfo: function() {
                this.infoShown = !this.infoShown;
                return false;
            }
        });
})(window.app || (window.app = {}));
