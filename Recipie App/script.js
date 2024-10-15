document.addEventListener("DOMContentLoaded", () => {


    let searchBox = document.querySelector("#search-box")
    let searchBtn = document.querySelector("#btn1")
    let recepieContainer = document.querySelector(".recepieContainer")
    const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
    const message = document.querySelector("#para")
    const recepiName = async (name) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            recepieContainer.innerHTML="<h2>Fetching Recepies...</h2>";

            if (!response.ok) {
                throw new Error("Recepie not Found");
            }
            const data = await response.json();
          
            recepieContainer.innerHTML="";
            data.meals.forEach(meal => {
                console.log(meal)
                let recepiediv = document.createElement("div")
                recepiediv.classList.add("recepi");
                recepiediv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h2>${meal.strMeal}</h2>
                <p>${meal.strArea}</p>
                <p>${meal.strCategory}</p>
                `
                recepieContainer.appendChild(recepiediv)
                // console.log(recepieContainer)
            })
            


        } 
        catch (error) {
            message.innerHTML = `<h2 style="color: red;">${error.message}</h2>`
        }
    }


    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let searchVal = searchBox.value.trim();

        searchVal.length == 0 ? message.innerHTML = `<h2 style="color: red;">There is no Recipie in search box.</h2>` : recepiName(searchVal);

    })
})


