// Sample recipe data
const recipes = [
    {
      name: "Chocolate Chip Cookies",
      ingredients: [
        "1 cup butter",
        "1 cup sugar",
        "2 cups flour",
        "1 tsp vanilla extract",
        "1 cup chocolate chips"
      ],
      instructions: "1. Preheat oven to 350°F. 2. Cream butter and sugar. 3. Add flour and vanilla. 4. Stir in chocolate chips. 5. Drop rounded spoonfuls onto baking sheet. 6. Bake for 10-12 minutes.",
      tags: ["Dessert", "Baking"]
    },
    {
        name: "Hummus",
        ingredients: [
            "1 can chickpeas",
            "3 tbsp tahini",
            "3 tbsp lemon juice",
            "2 cloves garlic",
            "2 tbsp olive oil",
            "1/2 tsp salt"
        ],
        instructions: "1. Rinse and drain chickpeas. 2. Blend chickpeas, tahini, lemon juice, garlic, and salt in a food processor. 3. Drizzle with olive oil before serving.",
        tags: ["Appetizer", "Vegan"]
    },
    {
        name: "Baba Ganoush",
        ingredients: [
            "2 large eggplants",
            "3 tbsp tahini",
            "2 cloves garlic",
            "3 tbsp lemon juice",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "Chopped fresh parsley for garnish"
        ],
        instructions: "1. Roast eggplants until skin is charred. 2. Scoop out the flesh and blend with tahini, garlic, lemon juice, olive oil, salt, and pepper. 3. Garnish with parsley.",
        tags: ["Appetizer", "Vegetarian"]
    },
    {
        name: "Koshari",
        ingredients: [
            "1 cup lentils",
            "1 cup rice",
            "1 cup elbow macaroni",
            "1 cup chickpeas",
            "1/4 cup vegetable oil",
            "1 large onion, thinly sliced",
            "2 cloves garlic, minced",
            "2 cups tomato sauce",
            "1 tsp ground cumin",
            "Salt and pepper to taste"
        ],
        instructions: "1. Cook lentils, rice, macaroni, and chickpeas separately. 2. In a pan, sauté onions until caramelized. 3. Mix cooked ingredients, sautéed onions, garlic, tomato sauce, cumin, salt, and pepper.",
        tags: ["Main Dish", "Vegetarian"]
    },
    {
        name: "Mahshi",
        ingredients: [
            "6 zucchinis",
            "1 cup rice",
            "1/2 lb ground beef or lamb",
            "1 large onion, finely chopped",
            "2 tomatoes, diced",
            "2 cloves garlic, minced",
            "1/4 cup chopped fresh parsley",
            "1/4 cup chopped fresh dill",
            "1/4 cup tomato paste",
            "Salt and pepper to taste"
        ],
        instructions: "1. Hollow out zucchinis. 2. Mix rice, ground meat, onion, tomatoes, garlic, parsley, dill, tomato paste, salt, and pepper. 3. Stuff zucchinis with the mixture. 4. Arrange in a pot, add water, and cook until zucchinis are tender.",
        tags: ["Main Dish"]
    },
    {
        name: "Ful Medames",
        ingredients: [
            "2 cups dried fava beans",
            "2 cloves garlic, minced",
            "1/4 cup olive oil",
            "1 tsp cumin",
            "Salt and pepper to taste",
            "Chopped fresh parsley for garnish"
        ],
        instructions: "1. Soak and cook fava beans until soft. 2. Mash beans with garlic, olive oil, cumin, salt, and pepper. 3. Garnish with parsley.",
        tags: ["Appetizer", "Vegetarian"]
    },
    {
        name: "Roz Bel Laban",
        ingredients: [
            "1 cup rice",
            "4 cups milk",
            "1/2 cup sugar",
            "1/4 cup condensed milk",
            "1/4 cup heavy cream",
            "1 tsp vanilla extract",
            "Ground cinnamon for garnish"
        ],
        instructions: "1. Cook rice until soft. 2. Blend rice with milk, sugar, condensed milk, heavy cream, and vanilla extract. 3. Chill and serve with a sprinkle of ground cinnamon.",
        tags: ["Dessert"]
    },
    {
        name: "Hawawshi",
        ingredients: [
            "1 lb ground beef",
            "1 large onion, finely chopped",
            "2 tomatoes, diced",
            "2 cloves garlic, minced",
            "1/4 cup chopped fresh parsley",
            "1 tsp ground cumin",
            "Salt and pepper to taste",
            "Pita bread for stuffing"
        ],
        instructions: "1. Mix ground beef, onion, tomatoes, garlic, parsley, cumin, salt, and pepper. 2. Stuff the mixture into pita bread. 3. Grill or bake until meat is cooked and bread is crispy.",
        tags: ["Main Dish"]
    },
    {
        name: "Falafel",
        ingredients: [
            "1 cup dried chickpeas",
            "1/2 large onion, roughly chopped",
            "2 cloves garlic",
            "1/4 cup fresh parsley",
            "1 tsp ground cumin",
            "1 tsp ground coriander",
            "1/4 tsp cayenne pepper",
            "Salt and pepper to taste",
            "1 tbsp all-purpose flour",
            "1 tsp baking powder",
            "Vegetable oil for frying"
        ],
        instructions: "1. Soak chickpeas in water overnight. 2. Combine all ingredients in a food processor. 3. Form mixture into balls and deep-fry until golden brown.",
        tags: ["Appetizer", "Vegetarian"]
    },
    // Add more recipes here
    {
      name: "Spaghetti Bolognese",
      ingredients: [
        "1 lb ground beef",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 can crushed tomatoes",
        "1/4 cup tomato paste",
        "1 tsp dried basil",
        "1 tsp dried oregano",
        "Salt and pepper to taste",
        "1 lb spaghetti"
      ],
      instructions: "1. In a large pan, brown ground beef, onion, and garlic. 2. Add crushed tomatoes and tomato paste. 3. Stir in dried basil, dried oregano, salt, and pepper. 4. Simmer for 20 minutes. 5. Cook spaghetti according to package instructions. 6. Serve sauce over cooked spaghetti.",
      tags: ["Main Dish", "Italian"]
    },
    {
      name: "Caesar Salad",
      ingredients: [
        "1 head romaine lettuce",
        "1/2 cup grated Parmesan cheese",
        "1/2 cup croutons",
        "1/4 cup Caesar dressing"
      ],
      instructions: "1. Wash and chop romaine lettuce. 2. In a large bowl, combine lettuce, Parmesan cheese, and croutons. 3. Drizzle with Caesar dressing. 4. Toss to coat evenly.",
      tags: ["Salad", "Vegetarian"]
    },
    // Add more recipes here
    {
        name: "Chicken Alfredo",
        ingredients: [
          "8 oz fettuccine",
          "2 boneless, skinless chicken breasts",
          "2 cloves garlic, minced",
          "1 cup heavy cream",
          "1/2 cup grated Parmesan cheese",
          "Salt and pepper to taste",
          "2 tbsp chopped fresh parsley"
        ],
        instructions: "1. Cook fettuccine according to package instructions. 2. Season chicken breasts with salt and pepper. 3. In a large skillet, cook chicken over medium heat until cooked through. Remove from skillet and set aside. 4. In the same skillet, sauté garlic until fragrant. 5. Stir in heavy cream and Parmesan cheese. Cook until sauce thickens. 6. Slice cooked chicken and add it to the skillet. 7. Add cooked fettuccine and toss to coat. 8. Garnish with chopped parsley.",
        tags: ["Main Dish", "Italian"]
      },
      {
        name: "Guacamole",
        ingredients: [
          "2 ripe avocados",
          "1/4 cup diced red onion",
          "1/4 cup chopped fresh cilantro",
          "1 jalapeño pepper, seeded and minced",
          "Juice of 1 lime",
          "Salt and pepper to taste"
        ],
        instructions: "1. Cut avocados in half, remove the pits, and scoop out the flesh into a bowl. 2. Mash the avocado with a fork until desired consistency. 3. Stir in red onion, cilantro, jalapeño pepper, lime juice, salt, and pepper. 4. Taste and adjust seasonings if needed.",
        tags: ["Appetizer", "Mexican"]
      },
      {
        name: "Beef Stir-Fry",
        ingredients: [
          "1 lb beef sirloin, thinly sliced",
          "2 tbsp soy sauce",
          "2 tbsp oyster sauce",
          "1 tbsp cornstarch",
          "1 tbsp vegetable oil",
          "2 cloves garlic, minced",
          "1 inch ginger, grated",
          "1 bell pepper, sliced",
          "1 cup broccoli florets",
          "1/2 cup sliced carrots",
          "1/2 cup sliced mushrooms",
          "2 green onions, sliced",
          "Cooked rice or noodles, for serving"
        ],
        instructions: "1. In a bowl, combine soy sauce, oyster sauce, and cornstarch. 2. Add beef to the bowl and toss to coat. 3. Heat oil in a large skillet or wok over high heat. 4. Add garlic and ginger, and stir-fry for 1 minute. 5. Add beef and stir-fry until browned. Remove beef from skillet and set aside. 6. Add bell pepper, broccoli, carrots, and mushrooms to the skillet. Stir-fry until vegetables are tender-crisp. 7. Return beef to the skillet and stir to combine. 8. Add green onions and cook for 1 minute. 9. Serve over cooked rice or noodles.",
        tags: ["Main Dish", "Asian"]
      },
      {
        name: "Caprese Salad",
        ingredients: [
          "2 large tomatoes, sliced",
          "8 oz fresh mozzarella cheese, sliced",
          "1/4 cup fresh basil leaves",
          "2 tbsp balsamic glaze",
          "Salt and pepper to taste"
        ],
        instructions: "1. Arrange tomato slices and mozzarella cheese slices on a platter. 2. Tuck basil leaves in between the tomato and mozzarella slices. 3. Drizzle with balsamic glaze. 4. Season with salt and pepper.",
        tags: ["Salad", "Italian"]
      },
      {
        name: "Chicken Noodle Soup",
        ingredients: [
          "1 lb boneless, skinless chicken breasts",
          "8 cups chicken broth",
          "2 cups sliced carrots",
          "2 cups sliced celery",
          "1 medium onion, chopped",
          "3 cloves garlic, minced",
          "1 tsp dried thyme",
          "1 tsp dried rosemary",
          "8 oz egg noodles",
          "Salt and pepper to taste",
          "2 tbsp chopped fresh parsley"
        ],
        instructions: "1. In a large pot, bring chicken broth to a boil. 2. Add chicken breasts and cook until cooked through. Remove chicken from the pot and shred. 3. In the same pot, add carrots, celery, onion, garlic, thyme, and rosemary. Cook until vegetables are tender. 4. Add shredded chicken back to the pot. 5. Cook egg noodles according to package instructions. Drain and add to the pot. 6. Season with salt and pepper. 7. Simmer for 10 minutes to allow flavors to meld. 8. Garnish with chopped parsley.",
        tags: ["Soup", "Comfort Food"]
      },
      {
        name: "Shrimp Scampi",
        ingredients: [
          "8 oz linguine",
          "1 lb large shrimp, peeled and deveined",
          "4 cloves garlic, minced",
          "1/2 cup white wine",
          "1/4 cup fresh lemon juice",
          "1/4 cup unsalted butter",
          "2 tbsp chopped fresh parsley",
          "Salt and pepper to taste",
          "Red pepper flakes (optional)"
        ],
        instructions: "1. Cook linguine according to package instructions. 2. In a large skillet, melt butter over medium heat. 3. Add garlic and sauté until fragrant. 4. Add shrimp and cook until pink. 5. Remove shrimp from the skillet and set aside. 6. Add white wine and lemon juice to the skillet. Cook until reduced by half. 7. Add cooked linguine and shrimp back to the skillet. Toss to coat. 8. Season with salt, pepper, and red pepper flakes if desired. 9. Garnish with chopped parsley.",
        tags: ["Main Dish", "Seafood"]
      },
      {
        name: "Hawaiian Pizza",
        ingredients: [
          "1 pizza dough",
          "1/2 cup pizza sauce",
          "1 1/2 cups shredded mozzarella cheese",
          "1/2 cup diced ham",
          "1/2 cup pineapple chunks",
          "1/4 cup sliced red onion",
          "1/4 cup sliced green bell pepper",
          "1/4 cup sliced black olives"
        ],
        instructions: "1. Preheat oven to the temperature specified on the pizza dough package. 2. Roll out the pizza dough into a circle or desired shape. 3. Spread pizza sauce evenly over the dough. 4. Sprinkle shredded mozzarella cheese over the sauce. 5. Arrange ham, pineapple chunks, red onion, green bell pepper, and black olives on top. 6. Bake in the preheated oven according to the pizza dough package instructions, or until the crust is golden and the cheese is melted and bubbly.",
        tags: ["Main Dish", "Pizza"]
      },
      {
        name: "Mango Salsa",
        ingredients: [
          "2 ripe mangoes, diced",
          "1/4 cup diced red onion",
          "1/4 cup chopped fresh cilantro",
          "1 jalapeño pepper, seeded and minced",
          "Juice of 1 lime",
          "Salt and pepper to taste"
        ],
        instructions: "1. In a bowl, combine diced mangoes, red onion, cilantro, jalapeño pepper, lime juice, salt, and pepper. 2. Stir well to combine. 3. Taste and adjust seasonings if needed.",
        tags: ["Appetizer", "Salsa"]
      },
      {
        name: "Baked Salmon",
        ingredients: [
          "2 salmon fillets",
          "2 tbsp olive oil",
          "2 cloves garlic, minced",
          "1 tsp dried dill",
          "1 lemon, sliced",
          "Salt and pepper to taste"
        ],
        instructions: "1. Preheat oven to 400°F (200°C). 2. Place salmon fillets on a baking sheet lined with parchment paper. 3. Drizzle olive oil over the salmon fillets. 4. Sprinkle minced garlic and dried dill over the fillets. 5. Place lemon slices on top of the fillets. 6. Season with salt and pepper. 7. Bake in the preheated oven for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork.",
        tags: ["Main Dish", "Seafood"]
      },
      {
        name: "Chocolate Chip Cookies",
        ingredients: [
          "1 cup unsalted butter, softened",
          "1 cup granulated sugar",
          "1 cup packed brown sugar",
          "2 large eggs",
          "1 tsp vanilla extract",
          "3 cups all-purpose flour",
          "1 tsp baking soda",
          "1/2 tsp salt",
          "2 cups chocolate chips"
        ],
        instructions: "1. Preheat oven to 375°F (190°C). 2. In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy. 3. Beat in eggs one at a time, then stir in vanilla extract. 4. In a separate bowl, combine flour, baking soda, and salt. Gradually add the dry ingredients to the butter mixture, mixing well after each addition. 5. Stir in chocolate chips. 6. Drop rounded tablespoons of dough onto ungreased baking sheets. 7. Bake for 9-11 minutes"
    } 
  ];
  
  // Display recipe cards on the page
  function displayRecipes() {
    const recipeList = document.getElementById("recipe-list");
  
    // Clear existing recipe cards
    recipeList.innerHTML = "";
  
    // Iterate through recipes and create recipe cards
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
  
      recipeCard.innerHTML = `
    <h2>${recipe.name}</h2>
    <p><strong>Ingredients:</strong></p>
    <ul>
      ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
    </ul>
    <p><strong>Instructions:</strong></p>
    <p>${recipe.instructions}</p>
    <div class="tags">
      ${recipe.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
  `;
  
      recipeList.appendChild(recipeCard);
    });
  }
  
  // Filter recipes based on search input
  function displayRecipes(recipeData) {
    const recipeList = document.getElementById("recipe-list");
  
    // Clear existing recipe cards
    recipeList.innerHTML = "";
  
    // Iterate through recipes and create recipe cards
    recipeData.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
  
      recipeCard.innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Ingredients:</strong></p>
        <ul>
          ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
        <p><strong>Instructions:</strong></p>
        <p>${recipe.instructions}</p>
        <div class="tags">
          ${recipe.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      `;
  
      recipeList.appendChild(recipeCard);
    });
  
    // Display a message when there are no search results
    if (recipeData.length === 0) {
      const noResultsMessage = document.createElement("div");
      noResultsMessage.classList.add("no-results");
      noResultsMessage.textContent = "No recipes found. Try a different search term!";
      recipeList.appendChild(noResultsMessage);
    }
  }
  
  // Filter recipes based on search input
  function filterRecipes() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm)) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  
    // Display filtered recipes with a smoother transition
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";
  
    setTimeout(() => {
      displayRecipes(filteredRecipes);
    }, 200); // Add a slight delay for a smoother transition
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", () => {
    displayRecipes(recipes);
  });
  
  document.getElementById("search-input").addEventListener("input", filterRecipes);
  
  // Click event on recipe tags for additional filtering
  document.getElementById("recipe-list").addEventListener("click", (event) => {
    if (event.target.classList.contains("tag")) {
      const tagClicked = event.target.textContent.toLowerCase();
      const filteredByTag = recipes.filter((recipe) => recipe.tags.includes(tagClicked));
      displayRecipes(filteredByTag);
    }
  });