// from data.js
var tableData = data;

// INSTRUCTIONS: Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Get reference to table body
var tbody = d3.select("tbody");

// Create function that renders table on HTML
function renderTable(tableData){
    
    // Loop through tableData and append to table
    tableData.forEach((sighting) => {
        
        // Use D3 to append one table row for each sighting object
        var row = tbody.append('tr');
        
        // Use d3 to update each cell's text with sighting values
        Object.entries(sighting).forEach(([key, value])=>{
            
            // For each value, append a cell to the row
            var cell = tbody.append("td");
            
            // Display value in table cell
            cell.text(value);
        });
    });
};

// Print UFO sightings table on webpage
renderTable(tableData);


// INSTRUCTIONS: Use a date form in your HTML document and write JavaScript code that will listen for events and 
// search through the `date/time` column to find rows that match user input.

// Select the filter table button
var filterTableButton = d3.select("#filter-btn");

// Setup event handler for clicks
filterTableButton.on("click", function() {
   
    // Prevent the page from refreshing
    d3.event.preventDefault();   

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element    
    var dateInput = inputElement.property("value");
       
    var filteredData = tableData.filter(sighting => sighting.datetime === dateInput)

    // Clear all data cells from UFO table / On HTML file import script for jquery library
    $("#ufo-table").find("td").empty();

    // Display 
    renderTable(filteredData);
});