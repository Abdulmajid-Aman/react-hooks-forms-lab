import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleCategory(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); 

    const list = {
      id: uuid(),
      name: name,
      category: category,
    };

    onItemFormSubmit(list); // Call the prop function to notify the parent component

    console.log(list);
    console.log("The button is clicked");

    setName("");
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleName} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
