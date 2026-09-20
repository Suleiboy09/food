
const searchInput = document.getElementById("searchInput");

const restaurants = document.querySelectorAll(".restaurant-card");


searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    restaurants.forEach(function (restaurant) {

        const name = restaurant
            .querySelector("h2")
            .textContent
            .toLowerCase();


        if (name.includes(searchText)) {

            restaurant.style.display = "flex";

        } else {

            restaurant.style.display = "none";

        }

    });

});

// SEARCH BUTTON

searchBtn.addEventListener("click", searchRestaurant);


// SEARCH WHILE TYPING

searchInput.addEventListener("keyup", searchRestaurant);



// BACK TO TOP BUTTON

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});