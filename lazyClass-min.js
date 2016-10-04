/**
 * LazyClass
 * addClass to a collection with delay on each element
 * @author Nopo Web Solutions
 * @version 1.0
 *
 * https://github.com/NopoWeb/lazyClass
 */
!function(a){a.fn.lazyClass=function(e,n){var t=a.extend({delay:1e3,prefix:"lazy_"},e);return this.each(function(e){"function"==typeof n?n.call(a(this),e+1):a(this).fadeIn("fast").delay(t.delay*e).addClass(t.prefix+(e+1))})}}(jQuery);