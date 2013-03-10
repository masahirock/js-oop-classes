(function(win, doc, undefined){
    var undefined = undefined;
    var SuperClassic = function(name){
        this.name = name || {};
    }
    SuperClassic.prototype.init = function(){};
    var SubClassic = function(name){
    }
    SubClassic.prototype = new SuperClassic;
    SubClassic.prototype.init = function(){};

    var sub = new SubClassic("sub");
})(window, window.document);
