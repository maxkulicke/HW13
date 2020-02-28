$(function () {
  $(".devour").on("click", function (event) {

    const id = event.target.dataset.id;
    const devoured = event.target.dataset.newdevoured;
    // var id = $(this).data("id");
    // var devoured = $(this).data("newdevoured");
    console.log(id);
    const newDevouredState = {
      devoured: devoured
    };
    console.log(newDevouredState);

    //PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState //data here
    }).then(() => {
      console.log("hello from inside devour ajax");
      location.reload();
    }
    )
  });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    }
    // console.log("create-form object: " + newBurger.name, newBurger.devoured);
    //POST request
    $.ajax("api/burgers", {
      type: "POST",
      data: newBurger //some data here
    }).then(() => {
      // console.log("made it into ajax.then")
      location.reload();
    }
    );
  });

  $(".delete").on("click", (event) => {
    console.log("delete click");
    // var id = $(this).data("id");
    const id = event.target.dataset.id;

    console.log(event.target.dataset.id);
    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});