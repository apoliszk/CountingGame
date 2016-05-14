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
                if (this.infoShown) {
                    this.icon = '[-]';
                } else {
                    this.icon = '[+]';
                }
            }
        });
})(window.app || (window.app = {}));
