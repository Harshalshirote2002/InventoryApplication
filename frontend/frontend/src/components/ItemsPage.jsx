import "./styles/items.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

function editItem(itemId, setItemsState) {
  // Logic to edit the item with the given itemId
  console.log(`Editing item with ID: ${itemId}`);
  setItemsState(`edit ${itemId}`);
  
}
function deleteItem(itemId) {
  // Logic to delete the item with the given itemId
  console.log(`Deleting item with ID: ${itemId}`);
}

function updateItem(itemToEdit, setItemsState) {
  // Logic to update the item with the given itemId
  console.log(`Updating item with ID: ${itemToEdit.id}`);
  // Here you would typically send a request to the backend to update the item
  fetch('https://medicalsuppliesinventoryapplication.onrender.com/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      itemId: itemToEdit.id,
      itemname: itemToEdit.itemname,
      quantity: itemToEdit.quantity,
      categoryids: itemToEdit.categories.map(category => category.id),
    }),
  }).then(response => {
    if (response.ok) {
      console.log("Item updated successfully");
      setItemsState("display"); // Go back to display state after updating
    } else {
      console.error("Failed to update item");
    }
  }
  ).catch(error => {
    console.error("Error updating item:", error);
  });
  setItemsState("display");
}


function PopulateItems() {
  const [itemsState, setItemsState] = useState("display");
  useEffect(() => {
    // This is where you would fetch items from the backend
    // For example:
    fetch('https://medicalsuppliesinventoryapplication.onrender.com/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => {
        console.error("Error fetching items:", error);
        setItems([]); // Fallback to initial items if fetch fails
      })
  }, [itemsState]);
  // Simulating fetching items
  const [items, setItems] = useState([]);

  if (items.length !=0 && itemsState=="display"){
    return (
      <>
        {items.map((i) => (
          <div className="items-card" key={i.id}>
            <p className="item-name">{i.itemname}</p>
            <p className="item-quantity">{i.quantity}</p>
            <div className="item-categories">
              {i.categories.map((category) => (
                <p className="item-category" key={category.id}>
                  {category.name}
                </p>
              ))}
            </div>
            <div className="item-updates">
              <img src={editIcon} onClick={() => editItem(i.id, setItemsState)} alt="Edit" className="edit-icon" />
              <img src={deleteIcon} onClick={() => deleteItem(i.id)} alt="Delete" className="delete-icon" />
            </div>
          </div>
        ))}
      </>
    );
  }
  else if (itemsState.startsWith("edit")) {
    let editId = itemsState.split(" ")[1];
    const itemToEdit = items.find(item => item.id === parseInt(editId));
    return <div className="edit-item-form">
      <form onSubmit={(e) => {e.preventDefault()
        const updatedItem = {
          id: itemToEdit.id,
          itemname: e.target.itemName.value,
          quantity: parseInt(e.target.quantity.value),
          categories: itemToEdit.categories // Assuming categories are not being edited here
        };
        updateItem(updatedItem, setItemsState);
        // setItemsState("display");
      }}>
        <h2>Edit Item</h2>
        <label>
          Item Name:
          <input type="text" name="itemName" defaultValue={itemToEdit.itemname}/>
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" defaultValue={itemToEdit.quantity}/>
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setItemsState("display")}>Cancel</button>
      </form>
    </div>
  }
  else if (items.length == 0) {
    return <p className="loadingScreen">Loading...</p>;
  }
}

export default function ItemsPage() {
  return (
    <div className="items">
      <div className="items-title">Items in Stock</div>
      <div className="items-container">
        <PopulateItems />
      </div>
    </div>
  );
}
