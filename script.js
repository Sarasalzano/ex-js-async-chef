async function getChefBirthday(id) {
 
    const responseRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await responseRecipe.json();
    
    const userId = recipe.userId;
    const responseUser = await fetch(`https://dummyjson.com/users/${userId}`);
    const infoUser = await responseUser.json();
    const birthday = infoUser.birthDate;
    return birthday;
}


