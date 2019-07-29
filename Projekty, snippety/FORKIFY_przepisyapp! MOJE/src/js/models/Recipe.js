import axios from "axios";
import {
    key
} from '../config'
import List from './List'
export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`)
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;

        } catch (error) {
            console.log(error);
            alert('pobieranie recp')
        }
    }
    calcTime() {
        const nuIng = this.ingredients.length;
        const periods = Math.ceil(nuIng / 3);
        this.time = periods * 15;

    }
    calcServ() {
        this.servings = 4;
    }
    parseIngredients() {
        const unitsLong = ["tablespoons", "tablespoon", "ounce", "ounces", "teaspoon", "teaspoons", "cups", "pounds"];
        const unitsShort = ["tbps", "tbsp", "oz", "oz", "tsp", "tsp", "cup", "pound"];
        const units = [...unitsShort, "kg", "gr"]
        const newIngredients = this.ingredients.map(e => {
            let ingredient = e.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient.replace(unit, unitsShort[i])
            })
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");
            const arrIng = ingredient.split(" ");
            const unitIndex = arrIng.findIndex(el => units.includes(el));
            let objIng;
            if (unitIndex > -1) {
                const arrCount = arrIng.slice(0, unitIndex);
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', "+"))
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }
                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(" ")
                }
            } else if (parseInt(arrIng[0], 10)) {
                // there is no unit,, nad first ele is number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: "",
                    ingredient: arrIng.slice(1).
                    join(" ")
                }
            } else if (unitIndex === -1) {
                objIng = {
                    count: 1,
                    unit: "",
                    ingredient
                }
            }
            return objIng;
        })
        this.ingredients = newIngredients;
    }
    updateServings(type) {
        //servings
        const newServings = type === "dec" ? this.servings - 1 : this.servings + 1;


        //ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings)
        })
        this.servings = newServings;
    }
}
