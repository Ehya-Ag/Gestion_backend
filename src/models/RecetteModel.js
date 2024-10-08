import db from "../config/database.js";

class RecetteService {
  static async checkRecette(titre) {
    const [rows] = await db.query(
      "SELECT COUNT(*) AS count FROM recettes WHERE titre = ?",
      [titre],
    );
    return rows[0].count;
  }
  static async getRecetteByTitle(titre) {
    const [rows] = await db.query("SELECT * FROM recettes WHERE titre = ?", [
      titre,
    ]);
    return rows.length ? rows[0] : null;
  }
  static async getAllRecettes() {
    try {
      const [rows] = await db.query("SELECT * FROM recettes");
      return rows;
    } catch (error) {
      console.error("Error fetching all recipes:", error.message);
      throw error;
    }
  }
  static async getRecetteById(id) {
    try {
      const [rows] = await db.query("SELECT * FROM recettes WHERE id = ?", [
        id,
      ]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error("Error fetching recipe by ID:", error.message);
      throw error;
    }
  }
  static async createRecette(titre, ingredient, type, id_categorie) {
    try {
      const [result] = await db.query(
        "INSERT INTO recettes (titre, ingredient, type, id_categorie) VALUES (?, ?, ?, ?)",
        [titre, ingredient, type, id_categorie],
      );
      return result.insertId;
    } catch (error) {
      console.error("Error creating recipe:", error.message);
      throw error;
    }
  }
  static async updateRecette(id, titre, ingredient, type, id_categorie) {
    try {
      const [result] = await db.query(
        "UPDATE recettes SET titre = ?, ingredient = ?, type = ?, id_categorie = ? WHERE id = ?",
        [titre, ingredient, type, id_categorie, id]
      );
      return result.affectedRows;
    } catch (error) {
      console.error("Error updating recipe:", error.message);
      throw error;
    }
  }  
  static async deleteRecette(id) {
    try {
      const [result] = await db.query("DELETE FROM recettes WHERE id = ?", [
        id,
      ]);
      return result.affectedRows;
    } catch (error) {
      console.error("Error deleting recipe:", error.message);
      throw error;
    }
  }
  /*Pour la categories*/
  static async getAllCategories() {
    try {
      const [rows] = await db.query("SELECT * FROM categories");
      return rows;
    } catch (error) {
      console.error("Error fetching all recipes:", error.message);
      throw error;
    }
  }
  static async getCategorieById(id) {
    try {
      const [rows] = await db.query("SELECT * FROM categories WHERE id = ?", [
        id,
      ]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error("Error fetching recipe by ID:", error.message);
      throw error;
    }
  }
  static async createCategorie(nom) {
    try {
      const [result] = await db.query(
        "INSERT INTO categories (nom) VALUES (?)",
        [nom],
      );
      return result.insertId;
    } catch (error) {
      console.error("Error creating recipe:", error.message);
      throw error;
    }
  }
  static async updateCategorie(id, nom) {
    try {
      const [result] = await db.query(
        "UPDATE categories SET nom = ? WHERE id = ?",
        [nom, id]
      );
      return result.affectedRows;
    } catch (error) {
      console.error("Error updating category:", error.message);
      throw error;
    }
}

  static async deleteCategorie(id) {
    try {
      const [result] = await db.query("DELETE FROM categories WHERE id = ?", [
        id,
      ]);
      return result.affectedRows;
    } catch (error) {
      console.error("Error deleting category:", error.message);
      throw error;
    }
    checkRecette;
  }
}

export default RecetteService;
