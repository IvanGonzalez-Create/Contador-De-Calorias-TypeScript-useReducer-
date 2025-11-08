import { categories } from "../data/Categorys"
import type { Category } from "../Types/Index"


export default function Forms() {
  return (
    <form
    className= "space-y-7 bg-white p-10 shadow rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="Category">Categoria: </label>

        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="Category">
            
            {categories.map(Category => (
              <option
                key={Category.id}
                value={Category.id}
              >
                {Category.name}

              </option>
            ))}
            
            </select>
            
      
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="Activity">Actividad: </label>

        <input type="text" 
          id="Activity"
          className="bg-green-300 Border-slate-300 p-2 rounded-lg"
          placeholder="Ej: Comida, Jugo de Naranja, Proteina en polvo, Ejercicio, Cinta, Mancuernas"
        />
        
      </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="Calories">Calorias: </label>
          
          <input type="number" 
            id="Calories"
            className="bg-green-300 Border-slate-300 p-2 rounded-lg"
            placeholder="Calorias. Ej 300, 200, 1100"
          />

      </div>

      <input type="submit" 
      className="bg-green-700 hover:bg-green-950 w-full p-3 font-bold uppercase text-white cursor-pointer"/>
 
    </form>
  )
}
