(function(win, doc, undefined){
    var undefined = undefined;
    var _extend = function(child, parent) {
        var F;
        parent = parent || {};
        child = child || {};
        F = function() {
            this.constructor = child;
        };
        F.prototype = parent.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child.__super__ = parent.prototype;
        return child;
    };

    var SuperKlass = (function(){
        function SuperKlass(name){
            this.name = name || {};
        };
        SuperKlass.prototype.init = function(){
        };
        return SuperKlass;
    })();
    var SubKlass = (function(_super){
        _extend(SubKlass, _super);
        function SubKlass(){
            SubKlass.__super__.constructor.apply(this, arguments);
        };
        SubKlass.prototype.init = function(){
        };
        return SubKlass;
    })(SuperKlass);
    var subklass = new SubKlass("progeny");
})(window, window.document);
