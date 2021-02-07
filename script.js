const searchMeal = ()=>{
  const searchText =  document.getElementById('search-field').value;
  document.getElementById('search-field').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

  fetch(url)
  .then(res => res.json())
  .then(data =>displayMeals(data.meals));

}

const displayMeals = meals =>{
  const mealsContainer = document.getElementById('meals-container');

  meals.forEach(meal => {
    console.log(meal)
    const mealsDiv = document.createElement('div');
    mealsDiv.innerHTML = ` 
      <div class="detail">
      <img src="${meal.strMealThumb}">
      <h3>${meal.strMeal}</h3>
      </div>

    `;
    mealsContainer.appendChild(mealsDiv);
  });
}
const singleMeal = (strMealThumb,strInstructions) =>{
  console.log(strMealThumb,strInstructions);
}