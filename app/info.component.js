(function(app) {
    app.InfoComponent =
        ng.core.Component({
            selector: 'my-info',
            template: '<h1>InfoComponent</h1>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
