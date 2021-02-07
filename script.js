const searchMeal = ()=>{
  const searchText =  document.getElementById('search-field').value;
  document.getElementById('search-field').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data =>displayMeals(data.meals))

}

const displayMeals = meals =>{
  const mealsContainer = document.getElementById('meals-container');

  meals.forEach(meal => {
    const li = document.createElement('li');
    li.innerText = meal.strMeal;
    mealsContainer.appendChild(li);
  });
}
