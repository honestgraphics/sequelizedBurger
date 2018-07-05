$(document).ready(function () {
    $(".addBurgerForm").click(function (event) {
        event.preventDefault();
        var burgerName = $("#burgerName").val().trim();

        if (!burgerName) {
            return;
        }

        var burger = { burgerName: burgerName };

        $.ajax("/createBurger", {
            type: "POST",
            data: burger
          }).then(
            function() {
              location.reload();
            }
          );

    });

    $(".devour").click(function () {
        var id = $(this).data("id");

        $.ajax(`/${id}`, {
            type: "PUT",
            data: id
          }).then(
                function() {
              location.reload();
            }
          );
    });
});