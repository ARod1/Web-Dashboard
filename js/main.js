
//Canvas elements for charts
var canvaWeekly = document.getElementById("trafficChart-weekly");//Top main chart menu charts
var canvaHourly = document.getElementById("trafficChart-hourly");
var canvaDaily = document.getElementById("trafficChart-daily");
var canvaMonthly = document.getElementById("trafficChart-monthly");

var canvaDailyTraffic = document.getElementById("dailyTrafficChart"); //bar chart
var canvaMobileUsers = document.getElementById("mobileUsersChart"); //pir chart


//Chart Menu
var hourlyMenu = document.getElementById("hourly");
var dailyMenu = document.getElementById("daily");
var weeklyMenu = document.getElementById("weekly");
var monthlyMenu = document.getElementById("monthly");


//Mobile menu overlay and items
var mobileNav = document.getElementById("navigation");
var cancelMenu = document.getElementById("remove-menu");
var mobileMenuIcon = document.getElementById("mobile-menu");


//Alert display and clear items
var alert = document.getElementById("alert");
var cancelAlert = document.getElementById("exit-alert");
var greenDot = document.getElementById("green-dot");


//Message modal
var sendButton = document.getElementById("contact-member");
var mmsOverlay = document.getElementById("send-mms");
var mmsWrap = document.getElementById("mms-wrap");
var closeMms = document.getElementsByClassName("close")[0];
var searchInput = document.getElementById('user-search');
var userMms = document.getElementById('user-message');
var mmsText = document.getElementById("mms-text");




//MAIN TRAFFIC CHARTS DATA

//Main chart
var trafficDataWeekly = {
        datasets: [{
            label: "Traffic",
            backgroundColor: "rgba(133,133,133,0.3)",
            borderColor: "#7377bf",
            borderWidth: 2,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#7377bf",
            pointBackgroundColor: "#e2e3f6",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 10,
            data: [ {
                x: 0,
                y: 0
            },{
                x: 100,
                y: 500
            }, {
                x: 200,
                y: 1000
            }, {
                x: 250,
                y: 800
            },  {
                x: 350,
                y: 1200
            },  {
                x: 450,
                y: 1800
            }, {
                x: 550,
                y: 1200
            }, {
                x: 600,
                y: 1500
            }, {
                x: 700,
                y: 1000
            },  {
                x: 800,
                y: 1500
            }, {
                x: 900,
                y: 2000
            }, {
                x: 1000,
                y: 1500
            },  {
                x: 1200,
                y: 2000
            }]
        }]
    };

var trafficDataHourly = {
        datasets: [{
            label: "Traffic",
            backgroundColor: "rgba(229,119,39,0.3)",
            borderColor: "#7377bf",
            borderWidth: 2,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#7377bf",
            pointBackgroundColor: "#e2e3f6",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 10,
            data: [ {
                x: 0,
                y: 0
            },{
                x: 100,
                y: 300
            }, {
                x: 200,
                y: 700
            }, {
                x: 300,
                y: 900
            },  {
                x: 400,
                y: 1200
            },  {
                x: 500,
                y: 1300
            }, {
                x: 600,
                y: 1500
            }, {
                x: 700,
                y: 1900
            }, {
                x: 800,
                y: 1400
            },  {
                x: 900,
                y: 1100
            }, {
                x: 1000,
                y: 800
            }, {
                x: 1100,
                y: 600
            },  {
                x: 1200,
                y: 760
            }]
        }]
    };

var trafficDataDaily = {
        datasets: [{
            label: "Traffic",
            backgroundColor: "rgba(16,66,255,0.3)",
            borderColor: "#7377bf",
            borderWidth: 2,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#7377bf",
            pointBackgroundColor: "#e2e3f6",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 10,
            data: [ {
                x: 0,
                y: 0
            },{
                x: 100,
                y: 900
            }, {
                x: 200,
                y: 1100
            }, {
                x: 300,
                y: 1400
            },  {
                x: 400,
                y: 900
            },  {
                x: 500,
                y: 900
            }, {
                x: 600,
                y: 1200
            }, {
                x: 700,
                y: 1000
            }, {
                x: 750,
                y: 1200
            },  {
                x: 800,
                y: 1800
            }, {
                x: 900,
                y: 1400
            }, {
                x: 1000,
                y: 2000
            },  {
                x: 1200,
                y: 2500
            }]
        }]
    };

var trafficDataMonthly = {
        datasets: [{
            label: "Traffic",
            backgroundColor: "rgba(111,3,223,0.3)",
            borderColor: "#7377bf",
            borderWidth: 2,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#7377bf",
            pointBackgroundColor: "#e2e3f6",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 10,
            data: [ {
                x: 0,
                y: 300
            },{
                x: 100,
                y: 500
            }, {
                x: 200,
                y: 800
            }, {
                x: 300,
                y: 650
            },  {
                x: 400,
                y: 700
            },  {
                x: 500,
                y: 1200
            }, {
                x: 600,
                y: 800
            }, {
                x: 700,
                y: 1100
            }, {
                x: 800,
                y: 1000
            },  {
                x: 900,
                y: 1200
            }, {
                x: 1000,
                y: 1500
            }, {
                x: 1100,
                y: 1300
            },  {
                x: 1200,
                y: 1400
            }]
        }]
    };

//Data for pie chart
var pieChartData = {
    labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
    datasets: [
        {
            data: [200, 200, 1000],
            backgroundColor: [
                "#74b1bf",
                "#81c98f",
                "#7377bf"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

//Main options - being used by all four main traffic charts
var trafficOptions = {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                    max: 1200,
                    min: 0,
                    stepSize: 100,
                    callback: function(value, index, values) {
                        var arrLabels = ['', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '18-25', '35-22', '13-22',];
                        return arrLabels[index];
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 0,
                    stepSize: 500
                }
            }]
        },
        legend: {
            display: false,
        }
    };


//CHART INITIALAZATION

var trafficChartWeekly = new Chart(canvaWeekly, {
    type: 'line',
    data: trafficDataWeekly,
    options: trafficOptions
});

var trafficChartHourly = new Chart(canvaHourly, {
    type: 'line',
    data: trafficDataHourly,
    options: trafficOptions
});

var trafficChartDaily = new Chart(canvaDaily, {
    type: 'line',
    data: trafficDataDaily,
    options: trafficOptions
});

var trafficChartMonthly = new Chart(canvaMonthly, {
    type: 'line',
    data: trafficDataMonthly,
    options: trafficOptions
});

var dailyTrafficChart = new Chart(canvaDailyTraffic, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [50, 84, 150, 100, 200, 180, 80],
            backgroundColor: [
                "#7377bf",
                "#7377bf",
                "#7377bf",
                "#7377bf",
                "#7377bf",
                "#7377bf",
                "#7377bf"
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 250,
                    min: 0,
                    stepSize: 50,
                    
                }
            }]
        },
        legend: {
            display: false
        }
    }
});

var mobileUsersChart = new Chart(canvaMobileUsers, {
    type: 'doughnut',
    data: pieChartData,
    options: {
        scales: {
            yAxes: [{
                gridLines: { display: false },
                ticks: {
                    beginAtZero:true,
                    display: false
                }
            }]
        }
    }
});



//FUNCTIONS

function display(el, prop) {
    el.style.display = prop;
}

function active(add, removeOne, removeTwo, removeThree){
    add.setAttribute('class', 'active-chart');
    removeOne.classList.remove('active-chart');
    removeTwo.classList.remove('active-chart');
    removeThree.classList.remove('active-chart');
}

function displayTraffic(block, noneOne, noneTwo, noneThree) { 
    block.style.display = 'block';
    noneOne.style.display = 'none';
    noneTwo.style.display = 'none';
    noneThree.style.display = 'none';
}

//*****MAIN WORK GOES HERE *************


//Disable other charts in the main traffic section
canvaDaily.style.display = 'none';
canvaHourly.style.display = 'none';
canvaMonthly.style.display = 'none';






//EVENT LISTENERS

//Exit mobiel nav
cancelMenu.addEventListener("click", function() {
    display(mobileNav, 'none');
});

//View mobile nav
mobileMenuIcon.addEventListener("click", function() {
    display(mobileNav, 'block');
});


//Exit alert above the traffic chart
cancelAlert.addEventListener("click", function() {
    display(alert, 'none');
    display(greenDot, 'none');
});

//Trigger for mms window
sendButton.addEventListener('click', function(){
    mmsOverlay.style.display = 'block';
    
    if (searchInput.value && userMms.value) {
        mmsWrap.classList.remove('bad');
        mmsWrap.classList.add('good');
        mmsText.innerHTML = "Your message has been sent. Thank you";
        
    } else if (searchInput.value) {
        mmsWrap.classList.add('bad');
        mmsText.innerHTML = "Oops you seem to be missing the message";
        
    } else  if (userMms.value) {
        mmsWrap.classList.add('bad');
        mmsText.innerHTML = "Please select a valid user";
        
    } else {
        mmsWrap.classList.add('bad');
        mmsText.innerHTML = "Error: Need a user and a message, please try again.";
    }
    

});

//Close the success mms window
closeMms.addEventListener("click", function() {
    mmsOverlay.style.display = "none";
});



//TRAFFIC MENU EVENTS
hourlyMenu.addEventListener("click", function(){
    active(hourlyMenu, weeklyMenu, dailyMenu, monthlyMenu);
    displayTraffic(canvaHourly, canvaWeekly, canvaDaily, canvaMonthly);
});

dailyMenu.addEventListener("click", function(){
    active(dailyMenu, weeklyMenu, hourlyMenu, monthlyMenu);
    displayTraffic(canvaDaily, canvaWeekly, canvaHourly, canvaMonthly);
});

weeklyMenu.addEventListener("click", function(){
    active(weeklyMenu, hourlyMenu, dailyMenu, monthlyMenu);
    displayTraffic(canvaWeekly, canvaHourly, canvaDaily, canvaMonthly);
});

monthlyMenu.addEventListener("click", function(){
    active(monthlyMenu, weeklyMenu, dailyMenu, hourlyMenu);
    displayTraffic(canvaMonthly, canvaWeekly, canvaDaily, canvaHourly);
});




