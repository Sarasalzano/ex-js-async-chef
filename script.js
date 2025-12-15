async function getChefBirthday(id) {
  try {
    const responseRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await responseRecipe.json();
    const userId = recipe.userId;

    const responseUser = await fetch(`https://dummyjson.com/users/${userId}`);
    const infoUser = await responseUser.json();
    const birthday = infoUser.birthDate;
    return birthday;
  } catch (errore) {
    console.error("Errore", errore.message);
  }
}

getChefBirthday(1)
  .then((birthday) => console.log("Data di nascita dello chef:", birthday))
  .catch((error) => console.error("Errore:", error.message));
