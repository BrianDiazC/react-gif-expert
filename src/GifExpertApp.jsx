import { useState } from "react";
import { AddCategory,  GifGrid} from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories(cat =>  [...cat, "One piece"])
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

        {
          categories.map((category) => (
              <GifGrid key={category} category={category}/>
            )
          )
        }
    </>
  );
};
