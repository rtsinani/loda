(function ($) {
	var Loda = function(element) {
		this._element = element;
		this._init();
	};

	Loda.prototype = {
		_init: function() {
			console.log(77);
		}
	};

	$.fn.loda = function() {
		
		return this.each(function() {
			new Loda(this);
		});

	};
}(jQuery));