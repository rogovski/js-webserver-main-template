

var _definer = {

  Public: {
    Const: function (obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: false,
        writable: false,
        value: val
      });        
    },
    Mutable: function (obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: false,
        writable: true,
        value: val
      });         
    }
  },

  Private: {
    Const: function (obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: val
      });        
    },
    Mutable: function (obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: false,
        writable: true,
        value: val
      });         
    }    
  }

};
module.exports = _definer;