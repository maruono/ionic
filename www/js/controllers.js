// Generated by CoffeeScript 1.12.7
var Add_radio, Add_title, Click_coffee, Cpm, Cpm_tom, Delete_button, Disp, Edit_memo, Select_memo_disp, Select_strage, TestCtrl;

Click_coffee = (function() {
  function Click_coffee(object) {
    this.object = object;
    alert(this.object);
    alert("start.rbで実行してるんやで");
  }

  Click_coffee.prototype.story1 = function() {
    return $(this.object).click((function(_this) {
      return function() {
        alert(_this.object);
        return alert(123);
      };
    })(this));
  };

  return Click_coffee;

})();


/*
aa = new TestCtrl ("#btn12")
aa.story1()
 */

TestCtrl = (function() {
  function TestCtrl() {}

  TestCtrl.prototype.story1 = function() {
    return alert("story1です");
  };

  TestCtrl.prototype.story2 = function() {

    /*
    document.addEventListener("deviceready", onDeviceReady, false)
    db = window.openDatabase("database", "1.0", "testdatabase", 1000000);
     */
    var db, description, name, size, version;
    name = 'localdb';
    version = '1.0';
    description = 'Web SQL Database';
    size = 2 * 1024 * 1024;
    db = openDatabase(name, version, description, size);
    return db.transaction(function(tx) {
      return tx.executeSql('insert into user (id, name) values (?, ?)', [1, '金田']);
    });
  };

  TestCtrl.prototype.story3 = function() {};

  return TestCtrl;

})();

Disp = (function() {
  function Disp(id) {
    this.id = id;
  }

  Disp.prototype.disp = function(str) {
    this.str = str;
    return document.getElementById(this.id).innerHTML = this.str;
  };

  Disp.prototype.add = function(str) {
    var my_div, newDiv;
    this.str = str;
    newDiv = document.createElement("div");
    newDiv.innerHTML = this.str;
    my_div = document.getElementById("org_div1");
    return document.getElementById(this.id).insertBefore(newDiv, my_div);
  };

  Disp.prototype["delete"] = function() {
    return document.getElementById(this.id).innerHTML = "";
  };

  return Disp;

})();

Cpm = (function() {
  function Cpm(id) {
    this.id = id;
  }

  Cpm.prototype.plus = function() {
    var getstr, num;
    getstr = localStorage.getItem(this.id);
    num = parseInt(getstr, 10);
    if (isNaN(num)) {
      return localStorage.setItem(this.id, 1);
    } else {
      return localStorage.setItem(this.id, num + 1);
    }
  };

  Cpm.prototype.minus = function() {
    var getstr, num;
    getstr = localStorage.getItem(this.id);
    num = parseInt(getstr, 10);
    if (isNaN(num)) {
      return localStorage.setItem(this.id, -1);
    } else {
      return localStorage.setItem(this.id, num - 1);
    }
  };

  return Cpm;

})();

Cpm_tom = (function() {
  function Cpm_tom() {
    var i, j, key, num, ref;
    this.strdisp = new Disp("str");
    this.converter = new showdown.Converter();
    this.cpm = new Cpm("memo_num");
    key = localStorage.getItem("memo_num");
    num = parseInt(key, 10);
    for (i = j = 0, ref = num; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      this.strdisp.add(localStorage.getItem(i));
    }
  }

  Cpm_tom.prototype.save = function(input) {
    var i, input_word, j, key, mark2html, num, ref, results;
    this.input = input;
    this.cpm.plus();
    input_word = document.getElementById(this.input).value;
    mark2html = this.converter.makeHtml(input_word);
    key = localStorage.getItem("memo_num");
    num = parseInt(key, 10);
    localStorage.setItem(num, mark2html);
    this.strdisp["delete"]();
    results = [];
    for (i = j = 0, ref = num; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      results.push(this.strdisp.add(localStorage.getItem(i)));
    }
    return results;
  };

  return Cpm_tom;

})();

Select_strage = (function() {
  function Select_strage(input_key, input_value) {
    this.input_key = input_key;
    this.input_value = input_value;
  }

  Select_strage.prototype.story1 = function(key1, value1) {
    this.key = key1;
    this.value = value1;
    document.getElementById(this.input_key).value;
    return localStorage.setItem(this.key, this.value);
  };

  Select_strage.prototype.story2 = function() {
    var key, value;
    key = document.getElementById(this.input_key).value;
    value = document.getElementById(this.input_value).value;
    return localStorage.setItem(key, value);
  };

  return Select_strage;

})();

Add_radio = (function() {
  function Add_radio(div, name1) {
    this.div = div;
    this.name = name1;
    this.strdisp = new Disp(this.div);
  }

  Add_radio.prototype.add = function(value1, disp_name) {
    this.value = value1;
    this.disp_name = disp_name;
    return this.strdisp.add("<label class=\"item item-radio ng-empty ng-valid\" name=\"" + this.name + "\" ng-model=\"choice\" ng-value=\"\'" + this.value + "\'\" value=\"" + this.value + "\" style=\"\"> <input type=\"radio\" name=\"" + this.name + "\" ng-value=\"\'" + this.value + "\'\" ng-model=\"choice\" class=\"ng-pristine ng-untouched ng-valid ng-empty\" value=\"" + this.value + "\" style=\"\"> <div class=\"radio-content\"> <div class=\"item-content disable-pointer-events\" ng-transclude=\"\"> <span>" + this.disp_name + "</span> </div> <i class=\"radio-icon disable-pointer-events icon ion-checkmark\"> </i> </div> </label>");
  };

  Add_radio.prototype["delete"] = function() {
    return this["delete"]();
  };

  Add_radio.prototype.story1 = function() {
    var i, j, key, num, ref, results;
    key = localStorage.getItem("memo_num");
    num = parseInt(key, 10);
    results = [];
    for (i = j = 1, ref = num; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      results.push(this.add(i, localStorage.getItem(i)));
    }
    return results;
  };

  Add_radio.prototype.story2 = function() {
    return $("#" + ("" + this.div)).click((function(_this) {
      return function() {
        var key, value;
        value = $('input[name=betu]:checked').val();
        key = "getradio";
        return localStorage.setItem(key, value);
      };
    })(this));
  };

  Add_radio.prototype.story3 = function() {
    var doAfter;
    console.log("input[name=" + this.name + "]");
    doAfter = function() {
      var radionum;
      radionum = localStorage.getItem("getradio");
      return $("input[name=betu]").val([radionum]);
    };
    return setTimeout(doAfter, 10);
  };

  return Add_radio;

})();

Select_memo_disp = (function() {
  function Select_memo_disp(div) {
    this.div = div;
    this.disp = new Disp(this.div);
    this.value = localStorage.getItem("getradio");
    this.value2 = localStorage.getItem(this.value);
    this.disp.disp(this.value2);
  }

  return Select_memo_disp;

})();

Add_title = (function() {
  function Add_title(input, add_button) {
    this.input = input;
    this.add_button = add_button;
    this.cpm = new Cpm("memo_num");
    $("#" + this.add_button).click((function(_this) {
      return function() {
        console.log("add title");
        _this["const"] = document.getElementById(_this.input).value;
        return console.log(_this["const"]);
      };
    })(this));
  }

  Add_title.prototype.story1 = function() {
    var addradio, key, num;
    this.cpm.plus();
    console.log("story1");
    key = localStorage.getItem("memo_num");
    console.log(num = parseInt(key, 10));
    this.title = document.getElementById(this.input).value;
    localStorage.setItem(num, this.title);
    new Disp("accountdisp")["delete"]();
    addradio = new Add_radio("accountdisp", "betu");
    addradio.story1();
    addradio.story2();
    return addradio.story3();
  };

  return Add_title;

})();

Delete_button = (function() {
  function Delete_button() {
    console.log("delete ok");
  }

  return Delete_button;

})();

Edit_memo = (function() {
  function Edit_memo() {
    console.log("constructor");
    this.test1 = document.getElementById("inputdesu").value;
    this.test2 = localStorage.getItem("getradio");
    this.test3 = localStorage.getItem(this.test2);
    document.getElementById("inputdesu").value = this.test3;
  }

  Edit_memo.prototype.save = function() {
    console.log("story1");
    this.test4 = document.getElementById("inputdesu").value;
    this.test5 = localStorage.getItem("getradio");
    return localStorage.setItem(this.test5, this.test4);
  };

  return Edit_memo;

})();

angular.module('starter.controllers', []).controller('DashCtrl', function($scope) {
  var cpm, doAfter, sele;
  cpm = new Cpm("memumu");
  sele = new Select_strage("key", "value");
  $scope.$on('$ionicView.enter', function(event, data) {
    return alert("入場時自動起動");
  });
  doAfter = function() {
    var radionum;
    radionum = localStorage.getItem("getradio");
    return $("input[name=hoge]").val([radionum]);
  };
  setTimeout(doAfter, 100);
  $scope.plus = (function(_this) {
    return function() {
      return cpm.plus();
    };
  })(this);
  $scope.minus = (function(_this) {
    return function() {
      return cpm.minus();
    };
  })(this);
  $scope.change = (function(_this) {
    return function() {
      return sele.story2();
    };
  })(this);
  return $scope.getradio = (function(_this) {
    return function() {
      _this.value = $('input[name=hoge]:checked').val();
      _this.key = "getradio";
      return localStorage.setItem(_this.key, _this.value);
    };
  })(this);
}).controller('TestCtrl', function($scope) {
  var cpm_tom, edit_memo;
  cpm_tom = new Cpm_tom();
  edit_memo = new Edit_memo();
  $scope.$on('$ionicView.enter', function(event, data) {
    return edit_memo = new Edit_memo();
  });
  return $scope.save = (function(_this) {
    return function() {
      return edit_memo.save();
    };
  })(this);
}).controller('ChatsCtrl', function($scope) {
  return $scope.$on('$ionicView.enter', function(event, data) {
    return new Select_memo_disp("str33");
  });
}).controller('AccountCtrl', function($scope) {
  $scope.$on('$ionicView.enter', function(event, data) {
    var addradio;
    new Disp("accountdisp")["delete"]();
    addradio = new Add_radio("accountdisp", "betu");
    addradio.story1();
    addradio.story2();
    return addradio.story3();
  });
  $("#add_title").click((function(_this) {
    return function() {
      var test111;
      test111 = new Add_title("input_title");
      return test111.story1();
    };
  })(this));
  return $("#delete").click((function(_this) {
    return function() {
      return new Delete_button();
    };
  })(this));
});
