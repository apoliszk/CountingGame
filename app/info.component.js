(function(app) {
    app.InfoComponent =
        ng.core.Component({
            selector: 'my-info',
            template: '<h1>TODO: Game Infomation will be displayed here.</h1>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
