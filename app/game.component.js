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
                    this.inputNumberError = false;
                    this.number = value;
                } else {
                    this.inputNumberError = true;
                }
                if (!this.inputTotalError && !this.inputNumberError)
                    this.generateTable();
            },

            onTotalChange: function(value) {
                if (/^\d+$/.test(value)) {
                    this.inputTotalError = false;
                    this.tableElementsCount = value;
                } else {
                    this.inputTotalError = true;
                }
                if (!this.inputTotalError && !this.inputNumberError)
                    this.generateTable();
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
