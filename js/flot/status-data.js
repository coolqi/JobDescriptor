$(function() {
    var data = [
        { label: "In progress", data: 1, color: "#F2923F" },
        { label: "Completed", data: 1, color: "#687074" },
    ];

    var placeholder = $('#pie-chart').css({ 'width': '70%', 'min-height': '150px' });
    $.plot(placeholder, data, {

        series: {
            pie: {
                show: true,
                // tilt: 0.8,
                highlight: {
                    opacity: 0.25
                },
                stroke: {
                    color: '#fff',
                    width: 2
                },
                startAngle: 2

            }
        },
        legend: {
            show: true,
            // position: "ne",
            float: "right",
            labelBoxBorderColor: null,
            margin: [-50, 10]
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        tooltip: true, //activate tooltip
        tooltipOpts: {
            content: "%s : %y.1",
            shifts: {
                x: -30,
                y: -50
            }
        }

    });


    var $tooltip = $("<div class='tooltip top in' style='display:none;'><div class='tooltip-inner'></div></div>").appendTo('body');
    placeholder.data('tooltip', $tooltip);
    var previousPoint = null;

    placeholder.on('plothover', function(event, pos, item) {
        if (item) {
            if (previousPoint != item.seriesIndex) {
                previousPoint = item.seriesIndex;
                var tip = item.series['label'] + " : " + item.series['percent'] + '%';
                $(this).data('tooltip').show().children(0).text(tip);
            }
            $(this).data('tooltip').css({ top: pos.pageY + 10, left: pos.pageX + 10 });
        } else {
            $(this).data('tooltip').hide();
            previousPoint = null;
        }

    });


    var d1 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.5) {
        d1.push([i, Math.sin(i)]);
    }

    var d2 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.5) {
        d2.push([i, Math.cos(i)]);
    }

    var d3 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.2) {
        d3.push([i, Math.tan(i)]);
    }

});
