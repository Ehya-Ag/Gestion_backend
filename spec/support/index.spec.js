import RecetteService from "../../src/models/RecetteModel.js";

describe("Recipe tests", () => {
  let recipeId = null;

  it("can be create", async () => {
    const recipe = { titre: "Pain au oeuf", ingredient: "farime, oeuf", type: "dessert", id_categorie: 2 };
    const result = await RecetteService.createRecette(
      recipe.titre,
      recipe.ingredient,
      recipe.type,
      recipe.id_categorie
    );
    expect(result).not.toBeNull();
  });

  it("can be update", async () => {
    const recipe = { titre: "riz au poisson", ingredient: "riz, poisson", type: "entrée", };
    const result = await RecetteService.updateRecette(
      1,
        recipe.titre,
        recipe.ingredient,
        recipe.type,
        recipe.id_categorie
    );
    recipeId = result.insertId;
    const recipeCreated = await RecetteService.getRecetteById(1);
    expect(recipeId).not.toBeNull();
    expect(recipeCreated).not.toBeNull();
  });

  it("can not be create", async () => {
    try {
      const recipe = { titre: null, type: "dessert", ingredient: "farime", id_categorie: 2 };
      const result = await RecetteService.createRecette(
        recipe.titre,
        recipe.type,
        recipe.ingredient,
        recipe.id_categorie
      );
      recipeId = result.insertId;
      const recipeCreated = await RecetteService.getRecetteById(recipeId);
      expect(recipeId).toBeNull();
      expect(recipeCreated).toEqual([]);
    } catch (error) {}
  });

  it("Can get by Id recipes", async () => {
    const getId = await RecetteService.getRecetteById(1);
    expect(getId).not.toBeNull();
  });

  it("Can get all recipes", async () => {
    const getAll = await RecetteService.getAllRecettes();
    expect(getAll).not.toBeNull();
  });
  it("Can delete recipes", async () => {
    const deleted = await RecetteService.deleteRecette(25);
    expect(deleted).not.toBeNull();
  });

  //   it("adds 1 + 2 to equal 3", () => {
  //     const recipe = { id: 1, title: "test" };
  //     const result = { id: 1, title: "test" };
  //     expect(recipe).toEqual(result);
  //   });
});
