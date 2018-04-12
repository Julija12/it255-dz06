$(document).ready(function() {
    $.getJSON("https://jsonplaceholder.typicode.com/posts", function(data) {
        var posts = "";
        $.each(data, function(key, value) {
            posts += "<tr>";
            posts += "<td>" + value.userId + "</td>";
            posts += "<td>" + value.id + "</td>";
            posts += "<td>" + value.title + "</td>";
            posts += "<td>" + value.body + "</td>";

            posts += "<tr>";
        });
        $("#posts").append(posts);
    });
});