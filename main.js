$.getJSON('data.json', function(data) {
    // Find the table in the DOM (the first table on the page)
    var table = $("table");
    // Loop through each top spot and add a row
    data.forEach(function(spot) {
        // Creates a Google Maps URL using the spot's latitude and longitude
        var mapsLink = "https://www.google.com/maps?q=" + spot.location[0] + "," + spot.location[1];
        var row = "<tr>" +
            // Displays the name of the spot with borders
            "<td class='border-2 border-black px-4 py-2 font-serif text-sm text-black '>" + spot.name + "</td>" +
            // Displays spot description with borders 
            "<td class='border-2 border-black px-4 py-2 font-serif text-sm  text-black '>" + spot.description + "</td>" +
            // The link to the area with borders
            "<td class='border-2 border-black px-4 py-2 text-blue-600 no-underline hover:underline hover:text-blue-600 focus:text-blue-600 font-serif text-sm font-bold'><a href='" + mapsLink + "' target='_blank'>Open in Google Maps</a></td>" +
            "</tr>";
        // Append the row to the table
        table.append(row);
    });
});