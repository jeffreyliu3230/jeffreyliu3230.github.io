var chart = c3.generate({
	bindto: '#chart1',
    data: {
		columns: [
			['Sensitivity', .436, .546, .603]
        ],
        type: 'bar',		
    },
	axis: {
			x: {
				type: 'category',
				categories: ['Vital', 'Lab', 'All']
			}
		},
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
});

setTimeout(function () {
    chart.load({
        columns: [
			['Specificity', .899, .920, .932]
        ],
		unload: ['Sensitivity']
    });
}, 1000);

setTimeout(function () {
    chart.load({
        columns: [
            ['PPV', .447, .563, .624]
        ],
		unload: ['Specificity']
    });
}, 2000);

setTimeout(function () {
    chart.load({
        columns: [
			['NPV', .894, .915, .926]
        ],
		unload: ['PPV']
    });
}, 3000);

setTimeout(function () {
    chart.load({
        columns: [
			['Vital', .436, .447, .899, .894],
			['Lab', .546, .563, .920, .915],
			['All', .603, .624, .932, .926]
        ],
		unload: ['NPV'],
		categories: ['Sensitivity', 'PPV', 'Specificity', 'NPV'],
		colors: {Vital: '#5DA5DA', Lab: '#FAA43A', All: '#60BD68'},
    });
}, 4000);

/* 

var chart = c3.generate({
    data: {
		columns: [
            ['Sensitivity', .546, .436, .603],
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});



setTimeout(function () {
    chart.load({
        columns: [
            ['PPV', .563, .447, .624]
        ]
    });
}, 1000);

setTimeout(function () {
    chart.load({
        columns: [
			['Specificity', .920, .899, .932]
        ]
    });
}, 2000);

setTimeout(function () {
    chart.load({
        columns: [
			['NPV', .915, .894, .926]
        ]
    });
}, 3000);
 */