(function(app) {
    app.GameComponent =
        ng.core.Component({
            selector: 'my-game',
            templateUrl: 'app/game.component.html'
        })
        .Class({
            constructor: function() {},
            onInputNumberChange: function(event) {
                debugger;
            }
        });
})(window.app || (window.app = {}));
