/**
 * LazyClass
 * addClass to a collection with delay on each element
 * @author Nopo Web Solutions
 * @version 1.0
 *
 * https://github.com/NopoWeb/lazyClass
 */
(function($){
    $.fn.lazyClass = function(options,callback){
        var settings = $.extend({
            delay: 1000,
            prefix: 'lazy_'
        }, options);        
        return this.each(function(i){            
            if (typeof callback == 'function') {                    
                callback.call($(this), (i + 1));
            }else{
                $(this).fadeIn('fast').delay(settings.delay * i).addClass(settings.prefix + (i + 1));
            }
        });
    };
})(jQuery);