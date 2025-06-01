let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();        // (1) [object Object] - this = obj
(obj.go)();      // (2) [object Object] - this = obj (группировка не влияет)
(method = obj.go)(); // (3) undefined - this потерян при присваивании
(obj.go || obj.stop)(); // (4) undefined - this потерян при логической операции