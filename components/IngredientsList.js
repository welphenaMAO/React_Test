import Ingredient from "./Ingredient";

const IngredientsList = ({ list }) => 
    <ul className="ingredients">
        {list.map((ingrendient, i) => <Ingredient key={i} {...ingrendient} />)}
    </ul>


export default IngredientsList