Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
    	min: 0,
        max: 3,
        stepSize: 1

    }
});

let labels = ['Duhamel', 'Moore-Towers', 'Osmond', 'Virtue', 'Bobrova','Ilinykh', 'Lipnitskaia', 'Sotnikova', 'Stolbova', 'Volosozhar', 'Castelli', 'Davis', 'Gold', 'Wagner'];
let data = [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 1, 3, 1,1];
let colors = ['#343148', '#343148', '#343148', '#343148', '#CE5B78', '#CE5B78', '#CE5B78', '#CE5B78', '#CE5B78', '#CE5B78', '#577284', '#577284', '#577284', '#577284'];

let myChart = document.getElementById("myChart").getContext('2d');

let chart = new Chart(myChart, {
	type: 'horizontalBar', 
	data: {
		labels: labels,
		datasets: [ {
			data: data,
			backgroundColor: colors
		}]		
	},

	options: {
		legend: {
			display: false
	},
title: {
			text: "Women's Medals by Athlete. 2014",
			display: true

		}
			
	}}
);
//Updating chart for predictions
setTimeout(function () {
changeChartTitle(chart, 'Predictions for 2022');
}, 3000);

function removeData(chart) {
	chart.data.labels.pop();
	chart.data.datasets[0].data.pop();
	chart.update();
}
setTimeout(function () {
	removeData(chart);
}, 5000);

function changeAthleteNumber(chart,athlete,place){
places = chart.data.datasets[0].data;
skaters = chart.data.labels;
let skaterIndex = skaters.indexOf(athlete);
places[skaterIndex] = place;
chart.update();
}

function changeChartTitle(chart,txt){
chart.titleBlock.options.text = txt;
chart.update();
}

setTimeout(function () {
changeAthleteNumber(chart, 'Stolbova', 1);
}, 7000);

setTimeout(function () {
changeAthleteNumber(chart, 'Osmond', 3);
}, 9000);



let labels2 = ['Russia', 'USA'];
let data2 = [13, 2,];
let colors2 = ['#CE5B78', '#577284'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
	type: 'doughnut', 
	data: {
		labels: labels2,
		datasets: [ {
			data: data2,
			backgroundColor: colors2
		}]		
	},
	options: {
		title: {
			text: "Gold Medals on",
			display: true

		}
	}
});




let newChart = new Chart(myChart3, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Total medals',
            data: [2, 4, 6, 27],
            backgroundColor: "rgba(204, 204, 255), 0.2)",
			borderColor: "rgba(204, 204, 255, 1)", 
			borderWidth: 4,
			fill: true, 
            order: 1,
            // this dataset is drawn below
               },{
            label: 'Medals.Russia',
            data: [1, 4, 2, 10],
           	borderColor: "rgba(255, 102, 204, 1)", 
           	type: 'line',
            fill: false, 
            
            order: 2
             // this dataset is drawn on top
        }],
        labels: ['Individual', 'Pairs', 'Ice Dancing', 'Teams']
    },
   options: {
		
	animation: {
		duration: '3000',
		easing: 'easeInOutQuint',
					},
					legend: {
			display: true
},
	scales: {
		yAxes: [{
		ticks: {
			beginAtZero: true,
			min: 0,
			max: 27, 
			stepSize: 3
		}
	}
	]
	}

		}
	}
);


let labels4 = ['Gold', 'Silver', 'Bronze'];
let data4 = [13, 2, 2];
let colors4 = ['#D69C2F', '#9F9C99', '#755139'];

let myChart4 = document.getElementById("myChart4").getContext('2d');
chart4 = new Chart(myChart4, {
	type: 'pie', 
	data: {
		labels: labels4,
		datasets: [ {
			data: data4,
			backgroundColor: colors4
		}]		
	},
	options: {
		title: {
			text: "Medal Breakdown. Russia",
			display: true
		},
		legend: {
			display: true
		}
	}
})
let labels5 = ['Individual', 'Pairs', 'Ice Dancing', 'Team'];
let myChart5 = document.getElementById("myChart5").getContext('2d');

let chart5 = new Chart(myChart5, {
	type: 'polarArea', 
	data: {
		labels: labels5,
		datasets: [ 
		{
			label: 'Men',
			fill: true,
			backgroundColor: "rgba(204, 235, 255, 0.2)",
			borderColor: "rgba(0, 102, 255, 1)", 
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(204, 235, 255, 0.2)" ,
			data: [0, 2, 1, 5]
		},
		{
			label: 'Women',
			fill: true,
			backgroundColor: "rgba(255, 153, 255, 0.2)",
			borderColor: "rgba(255, 102, 204, 1)", 
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(255, 153, 255, 0.2)" ,
			data: [1, 2, 1, 5]
		}

		]		
	},
	options: {
		title: {
			text: "Medals By Event",
			display: true

		}
	}
	})



