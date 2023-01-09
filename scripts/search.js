document.getElementById("form2").onkeypress = function (e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
        e.preventDefault();
        var query = document.getElementById('search').value;
        window.find(query);
        return true;
    }
}

document.getElementById("submit_form").onclick = function (e) {
    var query = document.getElementById('search').value;
    window.find(query);
    return true;
}