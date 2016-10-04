(function($){
    /**
     * LazyClass
     * addClass to a collection with delay on each element
     * @author Juan Caser
     * @version 1.0
     */
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