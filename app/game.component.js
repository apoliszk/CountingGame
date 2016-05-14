(function(app) {
    app.GameComponent =
        ng.core.Component({
            selector: 'my-game',
            templateUrl: 'app/game.component.html'
        })
        .Class({
            constructor: function() {
                this.tableElements = [];
                this.number = 7;
                this.tableElementsCount = 200;
                this.onNumberChange(this.number);
            },

            onNumberChange: function(value) {
                if (/^\d+$/.test(value)) {
                    this.inputError = false;
                    this.number = value;
                    this.generateTable();
                } else {
                    this.inputError = true;
                }
            },
            generateTable: function() {
                var arr = [];
                for (var i = 1; i <= this.tableElementsCount; i++) {
                    arr.push({
                        number: i,
                        skip: i % this.number == 0 || (i + '').indexOf(this.number + '') >= 0
                    });
                }
                this.tableElements = arr;
            }
        });
})(window.app || (window.app = {}));
