window.onload = function () {
    document.getElementById('button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        var name = document.getElementById('name').value;
        var year = document.getElementById('year').value;
        document.getElementById('url').textContent = "https://localhost:8080/?name=" + name + "&year=" + year;
    });
}