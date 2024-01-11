// Toggle the dropdown content when clicking the dropdown button
document.querySelector('.dropbtn').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});
