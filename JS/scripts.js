$.ajax({
    url: "https://api.github.com/users/mylesb93/repos"
}).done(function(data) { 
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i].name);
        $('.js-repos').append(`<div class="card col">
                                    <div class="card-body">
                                        <h5 class="card-title">${data[i].name}</h5>
                                        <p class="card-text">${data[i].description}</p>
                                        <a href="${data[i].html_url}" target="_blank">View repository</a>
                                    </div>
                                </div>`);
    }
})
