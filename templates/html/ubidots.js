/*
var ubidots = new Ubidots();

// Token is BBAU-...
ubidots.on('receivedToken', function (data) {
});

// Will be called on static dashboards, data is null in that case.
ubidots.on('selectedDevice', function (data) {
});

data is an object {"start": ts, "end": ts} where ts are epoch timestamps.
ubidots.on('selectedDashboardDateRange', function (data) {
});
*/

class Ubidots {
    constructor() {
		var end = Date.now();
		var start = end - 7 * 24 * 60 * 60 * 1000;
		var dashboardDateRange = {"start": start, "end": end}
    }

    on(type, callback) {
        if (type == 'receivedToken') {
            console.log("Dummy Ubidots object token.")
            callback('...'); // Put an Ubidots token here.
        }

        // TODO: Consider programatically adding a div to the top of the page with
        // a date picker that can update this object's start and end timestamps.
        if (type == 'selectedDashboardDateRange') {
          console.log("Dummy Ubidots object date range.")
          var end = Date.now();
          var start = end - 7 * 24 * 60 * 60 * 1000;
          callback({"start": start, "end": end});
        }
    }
}
