(function(app) {
    app.GameComponent =
        ng.core.Component({
            selector: 'my-game',
            template: '<h1>GameComponent</h1>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
