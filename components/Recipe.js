import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";

const Recipe = ({ name, ingredients, steps }) => 
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
    </section>

export default Recipe


