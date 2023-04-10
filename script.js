// Array of names
var names = ["kishore" "Ginka", "Lanatov", "Jim"];

// Loop over each name
for (var i = 0; i < names.length; i++) {

  // Get the current name and convert to lowercase
  var name = names[i].toLowerCase();

  // Check if the name starts with "j"
  if (name.charAt(0) === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
