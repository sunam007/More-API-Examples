const searchFood = async () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  const { meals } = data;
  const searchResult = document.getElementById("search-result");

  // Clear outs the previous search result;

  searchResult.textContent = "";
  for (const meal of meals) {
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
};

const loadMealDetail = async (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const res = await fetch(url);
  const data = await res.json();
  const { meals } = data;
  displayDetail(meals[0]);
};
// Display search result of individual items when clicked on image;

const displayDetail = (meal) => {
  const mealDetail = document.getElementById("meal-details");
  mealDetail.textContent = "";
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
