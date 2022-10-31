async function getRecipes() {
    let responce = await fetch(`http://localhost:3030/jsonstore/cookbook/recipes`);
    let recipes = await responce.json();

    return Object.values(recipes);
}
async function getRecipeById(id) {
    let responce = await fetch(`http://localhost:3030/jsonstore/cookbook/details/${id}`);
    let recipe = await responce.json();

    return recipe;
}
function getRecipePreview(recipe) {
    let element = document.createElement("article");
    element.classList.add("preview");
    element.innerHTML = `
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>`
    element.addEventListener("click", () => {
        //element.querySelector("h2").textContent = "Loading...";
        togglePreview(recipe._id, element)
    })
    return element;
}
async function togglePreview(id, preview) {
    let recipe = await getRecipeById(id);
    let element = document.createElement("article");
    element.innerHTML = `
    <h2>${recipe.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="${recipe.img}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(i => `<li>${i}</li>`).join("\n")}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${recipe.steps.map(s => `<p>${s}</p>`).join("\n")}
            </div>`
    preview.replaceWith(element);
}

window.addEventListener("load", async () => {
    let main = document.querySelector("main");
    let recipes = await getRecipes();

    let cards = recipes.map(rec => getRecipePreview(rec));
    main.innerHTML = "";
    cards.forEach(card => main.appendChild(card));
})


