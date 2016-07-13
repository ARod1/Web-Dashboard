
//Canvas elements for charts
var canvaOne = document.getElementById("trafficChart");
var canvaTwo = document.getElementById("dailyTrafficChart");
var canvaThree = document.getElementById("mobileUsersChart");


//Mobile menu overlay and items
var mobileNav = document.getElementById("navigation");
var cancelMenu = document.getElementById("remove-menu");
var mobileMenuIcon = document.getElementById("mobile-menu");


//Notication alerts orverlay and items
var noticationArea = document.getElementById("notification-area");
var cancelNotification = document.getElementById("remove-notification");
var notificationTrigger = document.getElementById("alert-icon");


//Alert display and clear items
var alert = document.getElementById("alert");
var cancelAlert = document.getElementById("exit-alert");
var greenDot = document.getElementById("green-dot");



cancelMenu.addEventListener("click", function() {
    mobileNav.style.display = "none";

});


mobileMenuIcon.addEventListener("click", function() {
    mobileNav.style.display = "block";

});



cancelNotification.addEventListener("click", function() {
    noticationArea.style.display = "none";

});



notificationTrigger.addEventListener("click", function() {
    noticationArea.style.display = "block";

});



cancelAlert.addEventListener("click", function() {
    alert.style.display = "none";
    greenDot.style.display = "none";

});












































//Global Settings
//Chart.defaults.global.legend.display = false;



var trafficData = {
        datasets: [{
            labels: "Traffic",
            backgroundColor: "#e2e3f6",
            borderColor: "#7377bf",
            borderWidth: 1,
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
                x: 1100,
                y: 2000
            }]
        }]
    };

var trafficOptions = {
        scales: {
            xAxes: [{
                type: 'time',
                position: 'bottom',
            }],
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 0,
                    stepSize: 500,
                }
            }]

        },
        legend: {
            display: false,
        }
    };

var data = {
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


var trafficChart = new Chart(canvaOne, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});



var dailyTrafficChart = new Chart(canvaTwo, {
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


var mobbileUsersChart = new Chart(canvaThree, {
    type: 'doughnut',
    data: data,
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