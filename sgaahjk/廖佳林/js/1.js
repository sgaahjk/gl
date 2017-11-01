function greet() {
    var comment = document.getElementById("comment").value;
    if (comment == ''){
        var cm = " you don't enter your comment.";
    } else {
        var cm = ' ,your comment is ' + comment + ' .Thanks you.' ;
    }
    alert(' Hello, ' + document.getElementById("name").value + ' .your email is ' + document.getElementById("email") + ' your password is ' + document.getElementById("password") + cm)
}