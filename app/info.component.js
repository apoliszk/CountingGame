(function(app) {
    app.InfoComponent =
        ng.core.Component({
            selector: 'my-info',
            templateUrl: 'app/info.component.html'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
