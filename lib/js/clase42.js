var blog = "urlgold.tumblr.com",
    post = $('#post'),
    api = "http://" + blog + "/api/read/json?callback=?";

$.getJSON(api, function(r) {
    console.log("Titulo: " + r.tumblelog.title);
    console.log("Description: " + r.tumblelog.description);
    if (r.posts[0]['photo-url-250']) {
        post.append('<img src="' + r.posts[0]['photo-url-250'] + '">');
    }
});