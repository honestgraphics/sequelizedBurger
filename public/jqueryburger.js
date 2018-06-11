$(document).ready(function () {
    console.log("js file loaded");


    $("#submitBtn").click(function (event) {
        event.preventDefault();
        var burgerName = $("#burgerName").val().trim();
        console.log("Handler for .click() called.", burgerName);

        var updatePage = function() {
            // $('#burgerz').append(`
            //     <tr>
            //         <td></td>
            //         <td>${burgerName}</td>
            //         <td><button class="devour">Devour it</button></td>
            //     </tr>
            // `);
            $("#burgerName").val("");
            location.reload();
        };

        var burger = { burgerName: burgerName };

        var ajaxTasks = {
            method: "POST",
            url: "/createBurger",
            data: burger,
            dataType: "html",
            success: updatePage,
            error: function(err) {
                console.log(err);
            }
        }

        $.ajax(ajaxTasks);

        // $.ajax({
        //     method: "POST",
        //     url: "/createBurger",
        //     data: burger,
        //     success: updatePage
        // }).then(function(responseFromBackEnd) {
        //     console.log('response in the home.js!!', responseFromBackEnd)
        // });

    });

    $(".devour").click(function () {
        var selectedBurger = $(this);
        var id = selectedBurger.closest("tr").find("td").eq(0).text();

        $.ajax({
            method: "PUT",
            url: "/updateBurger",
            data: { devoured: 1, id: +id },
            success: function() {
                location.reload();
            }
        })
    });
});