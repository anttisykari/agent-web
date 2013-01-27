// Generated by CoffeeScript 1.4.0
(function() {

  $(function() {
    var primaries, secondaries;
    primaries = $('nav > ul > li');
    primaries.click(function() {
      var _this = this;
      console.log("primary click");
      return $(primaries).each(function(idx, it) {
        if (it === _this) {
          $(_this).addClass('current');
          return $(_this).find('li:first').addClass('current');
        } else {
          return $(it).removeClass('current');
        }
      });
    });
    secondaries = primaries.find('li');
    return secondaries.click(function(ev) {
      var _this = this;
      console.log("secondary click");
      $(secondaries).each(function(idx, it) {
        if (it === _this) {
          return $(_this).addClass('current');
        } else {
          return $(it).removeClass('current');
        }
      });
      return ev.stopPropagation();
    });
  });

}).call(this);
