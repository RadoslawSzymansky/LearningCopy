import Search from "./models/Search"
import * as searchView from "./views/searchView"
import * as recipeView from "./views/recipeView"
import * as listView from "./views/listVIew"
import * as likesView from "./views/likeView"
import {
    elements,
    renderLoader,
    clearLoader
} from "./views/base"
import Recipe from "../js/models/Recipe"
import List from "./models/List";
import Likes from "./models/Likes";
// *fglobal state of the app

const state = {}
const controlSearch = async () => {
    const query = searchView.getInput();
    if (query) {
        state.search = new Search(query)
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes)
        try {
            await state.search.getResults()
            // 5
            clearLoader();
            searchView.renderResults(state.search.result)
        } catch (error) {
            console.log(error)
        }
    }
}
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
})
const search = new Search('pizza')
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage)
    }
})

// restore liked recp from cookies
window.addEventListener("load", function () {
    console.log("A")
    state.likes = new Likes();
    state.likes.readStorage();
    console.log(localStorage, state.likes.likes)

    likesView.toggleLikeMenu(state.likes.getNumLikes())
    state.likes.likes.forEach(like => likesView.renderLike(like))
})
/// recipe controller

const controlRecipe = async () => {
    const id = window.location.hash.replace("#", "");
    if (id) {
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        if (state.search) searchView.highlightedSelected(id)
        try {
            state.recipe = new Recipe(id);
            await state.recipe.getRecipe()
            state.recipe.calcTime();
            state.recipe.calcServ();
            await state.recipe.parseIngredients()
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id))
            clearLoader(elements.recipe)
        } catch (error) {
            console.log(error)
        }
    }
};
['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipe));

const controlList = () => {
    if (!state.list) state.list = new List()
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item)
    })
}
// testing

//
const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currendID = state.recipe.id;
    // user hanst like it yet
    if (!state.likes.isLiked(currendID)) {
        const newLike = state.likes.addLike(currendID, state.recipe.title, state.recipe.author, state.recipe.img)
        // user has like it yet
        likesView.toggleLikeBtn(state.likes.likes.length)
        likesView.renderLike(newLike)
    } else {
        likesView.toggleLikeBtn(state.likes.likes.length)
        likesView.deleteLike(currendID)
        state.likes.deleteLike(currendID)

    }
    likesView.toggleLikeMenu(state.likes.getNumLikes())
}
// handle delete and update lust item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid
    // handle the delete btn
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        //delete from user nterface
        listView.deleteItem(id)
        state.list.deleteItem(id)
    } else if (e.target.matches('.shopping__count-value, .shopping__count-value *')) {
        const val = parseFloat(e.target.value)
        state.list.updateCount(id, val)
    }
})
//like controller 


/// handing recipe butn clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateSeringsIngredients(state.recipe)
        }
    } else if (e.target.matches(' .btn-increase, .btn-increase *')) {
        state.recipe.updateServings('inc');
        recipeView.updateSeringsIngredients(state.recipe)

    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        /// add ingreditnt
        controlList()
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        controlLike()
    }
})