var logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    logged = "Max";
    console.log(logged);
}
sendAnalytics("the data");
