document.addEventListener('DOMContentLoaded', function () {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    //... your code is here

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    // compile the template

    var userData = {
        users: [{
                username: "alan",
                firstName: "Alan",
                lastName: "Johnson",
                email: "alan@test.com"
            },
            {
                username: "allison",
                firstName: "Allison",
                lastName: "House",
                email: "allison@test.com"
            },
            {
                username: "ryan",
                firstName: "Ryan",
                lastName: "Carson",
                email: "ryan@test.com"
            }
        ]
    };
    var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;

});