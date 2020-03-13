// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function (event) {
        let launch = window.confirm("Confirm that the shuttle is ready for takeoff");
        let flightStatus = document.getElementById("flightStatus");
        if(launch == true) {
            flightStatus.innerHTML = "Shuttle in flight";
           let shuttleBackground = document.querySelector("#shuttleBackground");
           shuttleBackground.style.background = "blue";
        }
        
    });


}