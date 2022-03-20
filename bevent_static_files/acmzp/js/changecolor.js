function customWayPoint(className, addClassName, customOffset) {
    var waypoints = $(className).waypoint({
        handler: function (direction) {
            if (direction == "down") {
                $(className).addClass(addClassName);
            } else {
                $(className).removeClass(addClassName);
            }
        },
        offset: customOffset
    });
}

var defaultOffset = '50%';

$(function () {
    for (var i = 0; i < 1e9; i++) {
        var className = '.timeline__item--' + i;
        if ($(className).length <= 0) break;
        customWayPoint(className, 'timeline__item-bg', defaultOffset);
    }
});