$(function() {
    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
  
      var beenDevoured = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: beenDevoured
      }).then(
        function() {
          console.log("This Burger has been eaten", beenDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
     //This will create the post  
    $(".build-burgers").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#create-burger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
});
  