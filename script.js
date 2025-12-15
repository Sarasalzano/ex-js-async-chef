// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef
// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

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
