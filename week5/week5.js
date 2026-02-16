function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";

}

function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";

}

function filterArticles() {
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("#articleList article");

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];

        if (article.classList.contains("opinion")) {

            if (showOpinion == true) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        }
        if (article.classList.contains("recipe")) {

            if (showRecipe == true) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        }
        if (article.classList.contains("update")) {

            if (showUpdate == true) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        }
    }
}

function addNewArticle() {

    let title = document.getElementById("inputHeader").value;
    let articleText = document.getElementById("inputArticle").value;

    let opinionButton = document.getElementById("opinionRadio");
    let recipeButton = document.getElementById("recipeRadio");
    let lifeUpdateButton = document.getElementById("lifeRadio");

    let type = "";

    if (opinionButton.checked) {
        type = "opinion";
    } else if (recipeButton.checked) {
        type = "recipe";
    } else if (lifeUpdateButton.checked) {
        type = "update";
    }

    if (title == "" || articleText == "" || type == "") {
        alert("You must fill out all fields!!");
        return;
    }

    let article = document.createElement("article");
    article.classList.add(type);

    let marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = type;

    if (type === "opinion") {
    marker.textContent = "Opinion";
    }
    
    if (type === "recipe") {
    marker.textContent = "Recipe";
    }

    if (type === "update") {
    marker.textContent = "Update";
    }
    
    let h2 = document.createElement("h2");
    h2.textContent = title;

    let p = document.createElement("p");
    p.textContent = articleText;

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);

    document.getElementById("articleList").appendChild(article);
    document.getElementById("newContent").reset();
}
