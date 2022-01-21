function showMenu(){
    var searchbar = document.getElementById("searchbar");
    var lemenu = document.getElementById("lemenu");
    lemenu.classList.toggle("displayed");
    if(searchbar.classList.contains("displayed")){
        searchbar.classList.remove("displayed");
    }
}

function showSearchBar(){
    var lemenu = document.getElementById("lemenu");
    var searchbar = document.getElementById("searchbar");
    var searchoverlay = document.getElementById("searchoverlay");

    searchbar.classList.toggle("displayed");

    if(lemenu.classList.contains("displayed")){
        lemenu.classList.remove("displayed");
    }
}