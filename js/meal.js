const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const { meals } = data;
      for (const meal of meals) {
        // console.log(meal);
        const searchResult = document.getElementById("search-result");
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="card">
          <img onclick="loadMealDetail(${meal.idMeal})" src="${
          meal.strMealThumb
        }" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
            ${meal.strInstructions.slice(0, 200)}
            </p>
          </div>
        </div>
        `;
        searchResult.appendChild(div);
      }
    });
};

const loadMealDetail = (mealId) => {
  // console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const { meals } = data;
      displayDetail(meals[0]);
    });
};

const displayDetail = (meal) => {
  // console.log(meal);
  const mealDetail = document.getElementById("meal-details");
  const div = document.createElement("div");
  div.classList.add("row");
  div.classList.add("g-0");
  div.innerHTML = `
  <div class="col-md-4">
  <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="..." />
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">
      ${meal.strInstructions.slice(0, 140)}
    </p>
    <a href="${
      meal.strYoutube
    }" target="_blank" class="btn btn-primary">Video Instruction</a>
  </div>
</div
  `;
  mealDetail.appendChild(div);
};
