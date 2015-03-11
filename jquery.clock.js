/* 
 * Jquery Required, see https://github.com/duckisaac/css-helpers/tree/master/transform for browser compatibility
 * Upgrade this to automatically calculate dimensions
 * @author     Kathy Tang 
 */
"use strict";

$.fn.clock = function(){
    var $this = $(this);
    var hour = $('<div class="j_hour"></div>');
    var minute = $('<div class="j_minute"></div>');
    var second = $('<div class="j_second"></div>');

    var draw = function(){
        var date = new Date();
        var _second = date.getSeconds() * 6 - 90;
        var _minute = date.getMinutes() * 6 + _second / 60 - 90;
        var _hour = (date.getHours() % 12) * 30 + _minute / 12 - 90;

        hour.css('transform', 'rotate(' + _hour + 'deg)');
        minute.css('transform', 'rotate(' + _minute + 'deg)');
        second.css('transform', 'rotate(' + _second + 'deg)');
        setTimeout(draw, 1000);
    }
    
    for(var i = 1; i <= 12; i++){
        $this.append($('<span class="j_clock_hour j_clock_hour_' + i + '"></span>'));
    }
    $this.append(hour, minute, second).addClass('j_clock');
    draw();
}



