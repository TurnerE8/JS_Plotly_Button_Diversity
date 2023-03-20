//1.  creating a bar chart 
var trace = {
    x:["burrito", "pizza", "chicken"], 
    y:[10, 18, 5],
    type: "bar"
}; 

// to display and/or test, run the following afterwards: Plotly.newPlot("plotArea", [trace]); 

//now, choose layout options 
var layout = {
    title: "Luncheon Survey"
};

// to display and/or test, run the following afterwards: PLotly.newPlot("plotArea", [trace], layout);

//now, add labels to the x and y axis
var layout = {
    title: "Luncheon Survey"
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
}; 

// to display and/or test, run the following afterwards: PLotly.newPlot("plotArea", [trace], layout);

// NEW CHART FOR SILL DRILL 

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

   // 2. Create a Pie Chart 

   var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

   //3. Using the map() function 

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// 4. Using the filter() function

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// 5. Using the slice() function 

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander']; 
words.slice(3, ); 

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
