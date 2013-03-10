(function(win, doc, undefined){
    var undefined = undefined;
    var Klass = function(_super) {
        var _klass = function() {
            if(this === window){
                console.error('not new');
            } else {
                this.init.apply(this, arguments);
            }
        }
        _klass.prototype.init = function(none) {};
        if (_super) {
            var F = function() {};
            F.prototype = _super.prototype;
            _klass.prototype = new F();
            _klass.prototype.constructor = _klass;
            _super.prototype.init();
        }
        _klass.include = function(o) {
            for (var key in o) {
                _klass.prototype[key] = o[key];
            }
        }
        return _klass;
    }
    var SuperKlass = Klass();
    SuperKlass.include({
        init: function() {
            console.log('superklass');
        }
    });
    var SubKlass = Klass(SuperKlass);
    SubKlass.include({
        init: function() {
            console.log('subklass');
        }
    });
    var subklass = new SubKlass();
})(window, window.document);

