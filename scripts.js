// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let takeOffButton = document.getElementById("takeoff");
    let shuttleMi = document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.querySelector("#shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");

    takeOffButton.addEventListener("click", function (event) {
        let launch = window.confirm("Confirm that the shuttle is ready for takeoff");

        if(launch == true) {
            flightStatus.innerHTML = "Shuttle in flight";
           shuttleBackground.style.background = "blue";

           shuttleMi.innerHTML = "10,000";
        }
    });

    let landButton = document.getElementById("landing");

    landButton.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        shuttleBackground.style.background = "green";
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleMi.innerHTML = "0";
    });

    let abortButton = document.getElementById("missionAbort");

    abortButton.addEventListener("click", function(event) {

        let abort = window.confirm("Confirm that you want to abort the mission." );

        if(abort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            shuttleMi.innerHTML = "0";
        }
    });

    // let up = document.getElementById("up");
    // let down = document.getElementById("down");
    // let right = document.getElementById("right");
    // let left = document.getElementById("left");
    // let rocket = document.querySelector("#rocket");

    // up.addEventListener("click", function(event) {
    //     rocket.style.bottom += 10;
    // });

    // down.addEventListener("click", function(event) {
    //     rocket.style.top += 10;
    // });

    // right.addEventListener("click", function(event) {
    //     rocket.style.left += 10;
       
    // });

    // left.addEventListener("click", function(event) {
    //     rocket.style.right += 10;
    // });

}

function up () {
    let rocket = document.querySelector("#rocket");
    rocket.style.bottom += 10;

}

function down () {
    let rocket = document.querySelector("#rocket");
    rocket.style.top += 10;

}