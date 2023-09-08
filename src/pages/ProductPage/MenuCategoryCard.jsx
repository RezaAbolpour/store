import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { GetAllCategori, GetSubCategori } from "../../utils/api/getCategori";

function CategoryList() {
  const [DatCat, setDatCat] = useState([]);
  const [DatSub, setDatSub] = useState([]);
  useEffect(() => {
    GetAllCategori().then((res) => {
      setDatCat(res.data.data.categories);
    });
    GetSubCategori().then((res) => {
      setDatSub(res.data.data.subcategories);
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    if (activeCategory === categoryId) {
      // If the same category is clicked again, close it
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };
  //const convertedData = convertData(Categories, subcategories);
  // function craeteSortData(cat,sub)
  let datafull = [];
  DatCat.forEach((elementCatgory) => {
    console.log(elementCatgory._id, elementCatgory.name);
    let item = { id: elementCatgory._id, name: elementCatgory.name };
    let sub = [];
    DatSub.forEach((elementSubCategory) => {
      if (elementCatgory._id == elementSubCategory.category) {
        let newsub = {
          id: elementSubCategory._id,
          name: elementSubCategory.name,
        };
        sub.push(newsub);
      }
    });
    item.subcategories = sub;
    datafull.push(item);
  });
  console.log(DatCat);
  console.log(DatSub);
  console.log(datafull);
  return (
    <div className="flex flex-col p-4">
      <p className="_font-bold text-lg mb-3">دسته بندی ها</p>
      {datafull.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          isActive={activeCategory === category.id}
          onClick={handleCategoryClick}
        />
      ))}
    </div>
  );
}

export default CategoryList;
