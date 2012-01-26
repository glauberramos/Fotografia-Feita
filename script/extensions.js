/* Function */
Function.prototype.curry = function() {
	var command = this;
    var args = $.makeArray(arguments);

    return function() {
        command.apply(this, args.concat($.makeArray(arguments)));
    };
}
