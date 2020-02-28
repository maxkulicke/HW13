$(function () {
  $(".devour").on("click", function (event) {

    const id = event.target.dataset.id;
    const devoured = event.target.dataset.newdevoured;
    const newDevouredState = {
      devoured: devoured
    };
    //PUT request
    $.ajax(`/api/burgers/${id}` , {
      type: "PUT",
      data: newDevouredState
    }).then(() => {
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
    //POST request
    $.ajax("api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      location.reload();
    }
    );
  });

  $(".delete").on("click", (event) => {
    const id = event.target.dataset.id;
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(
      function () {
        location.reload();
      }
    );
  });

});