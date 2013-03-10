(function(){
    var _toString = {}.toString.call;
    var _extend = function(_super, ctor){
        var parent, _klass, F;
        if(ctor === undefined){
            parent = {};
            ctor = _super;
        }else{
            parent = _super;
        }
        _klass= function(klass){
            if(_toString(_klass.__super__) === "[object Object]"){
                _klass.__super__.constructor.apply(this, arguments);
            }
            _klass.prototype.constructor.apply(this, arguments);
        }
        F = function(){};
        F.prototype = parent.prototype;
        _klass.prototype = new F();
        _klass.__super__ = parent.prototype;
        _klass.prototype.constructor = ctor;
        return _klass;
    }
    var SuperExtend = function(name){
        this.name = name || {};
    }

    SuperExtend = _extend(SuperExtend);
    SuperExtend.prototype.init = function(superInit){
    };

    var SubExtend = function(name){
    };
    SubExtend = _extend(SuperExtend, SubExtend);
    SubExtend.prototype.init = function(subInit){
    };

    var sub = new SubExtend("subEx");

})();
