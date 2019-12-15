$.ajax({
    url: "https://api.github.com/users/mylesb93/repos"
}).done(function(data) { 
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i].name);
        $('.js-repos').append(`<a href="${data[i].html_url}" target="_blank">${data[i].name}</a><br/>`);
    }
})
