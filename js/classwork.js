/*
  Create a function named showAll 
  Pass one parameter (data)

  Inside the function
  Iterate through data
    for each object, create elements:
      create parent div
        with the id '#entry' + object.id
      create a h1 
        append/add innerHTML object.title to h1
    Repeat for every value.
    append all elements + values to the parent div
*/

function showAll(data) {
  for (var i = 0; i < data.length; i++){
    if (typeof data[i] === "object"){
      var parentDiv = document.createElement("div")
      //parentDiv with id of "entry" + object.id
      parentDiv.id = "entry" + this.id;
      var h1 = document.createElement("h1");
    }
  }
}