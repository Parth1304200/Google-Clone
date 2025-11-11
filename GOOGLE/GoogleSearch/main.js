const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keydown", function(event){
    if(event.code == "Enter"){
        search();
    }

});

function search(){
    const input = searchInput.value;

    window.location.href="https://www.google.com/search?q=" + input  + "&oq=" + input + "&gs_lcrp=EgZjaHJvbWUqEAgAEAAY4wIYsQMYyQMYgAQyEAgAEAAY4wIYsQMYyQMYgAQyDQgBEC4YsQMYyQMYgAQyCggCEC4YsQMYgAQyCggDEAAYsQMYgAQyEAgEEC4YxwEYsQMY0QMYgAQyCggFEAAYsQMYgAQyCggGEAAYsQMYgAQyCggHEAAYsQMYgAQyCggIEAAYsQMYgAQyDQgJEAAYkgMYgAQYigXSAQgyNDIyajBqN6gCCLACAfEFGK5hp5Jm2YvxBRiuYaeSZtmL&sourceid=chrome&ie=UTF-8"
}

