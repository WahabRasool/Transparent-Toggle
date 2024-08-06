// Function to toggle dropdown menu display with animation
function tgl() {
    var dropdownMenu = document.getElementById("dm");
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.classList.remove("show-menu");
      dropdownMenu.classList.add("hide-menu");
      setTimeout(function() {
        dropdownMenu.style.display = "none";
      }, 300); // Adjust the duration to match your CSS animation
    } else {
      dropdownMenu.classList.remove("hide-menu");
      dropdownMenu.classList.add("show-menu");
      dropdownMenu.style.display = "block";
    }
  }
  
  // Function to set background color and close dropdown menu
  function sc(color) {
    var dropdownMenu = document.getElementById("dm");
    var titlemenu = document.querySelector(".tgg");
    document.body.style.backgroundColor = color;
    dropdownMenu.style.backgroundColor = color;
    titlemenu.style.backgroundColor = color;
    // Set color of dropdown text
    // Close the dropdown menu after selecting a color
    dropdownMenu.style.display = "none";
  }
  
  // Set background color based on the onclick attribute of the first .itm element
  window.onload = function() {
    var firstColorOption = document.querySelector(".itm");
    var onclickValue = firstColorOption.getAttribute("onclick");
    var color = onclickValue.match(/#(?:[0-9a-fA-F]{3}){1,2}/)[0]; // Extract color from onclick attribute
    sc(color);
  };