import React, { useState } from 'react';

function ClothingSelection({ onClothingSelect }) {
  const [selectedClothing, setSelectedClothing] = useState(null);

  const handleClothingChange = (e) => {
    const file = e.target.files[0];
    setSelectedClothing(file);
  };

  const handleSelect = () => {
    if (selectedClothing) {
      onClothingSelect(selectedClothing);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleClothingChange} />
      <button onClick={handleSelect}>Select Clothing</button>
    </div>
  );
}

export default ClothingSelection;