$(function() {



    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "General Manager",
            value: 2
        }, {
            label: "Senior Manager",
            value: 3
        }, {
            label: "Junior Manager",
            value: 2
        }, {
            label: "Senior Professional",
            value: 1
        },{
            label: "Young Professional",
            value: 2
        },{
            label: "Executive",
            value: 3
        }],
        resize: true
    });

});
