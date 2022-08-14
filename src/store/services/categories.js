import { categoryActions} from '../slices/categories';

export const fetchCategories = () => {
    return async (dispatch) => {
      const fetchCategoriesData = async () => {
        const response = await fetch(
          "https://api.thecatapi.com/v1/categories"
        );
  
        if (!response.ok) {
          throw new Error("Could not fetch category data!");
        }
        const data = await response.json();
        
        return data;
      };
      const categoryData = await fetchCategoriesData();
        
          dispatch(
            categoryActions.setCategoryData(categoryData)
          );
      
    };
  };