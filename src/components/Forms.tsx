import { categories } from "../data/Categorys"
import type { Activity } from "../Types/Index"
import { useState } from "react"


export default function Forms() {

  const [Activity, setActivity] = useState<Activity>({
    Category: 1,
    Name: '',
    Calories: 0

  })

  const HandleChange = (e : React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLInputElement>) => {

    const IsNumberField = ['Category','Calories'].includes(e.target.id)
    
  
    setActivity({
      ...Activity,
    [e.target.id] : IsNumberField ? +e.target.value : e.target.value
  })
    
  }

  const IsValidActivity = () => {
    const {Name, Calories} = Activity
    return Name.trim() !== '' && Calories > 0
  }



  return (
    <form
    className= "space-y-7 bg-white p-10 shadow rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="Category">Categoria: </label>

        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="Category"
          value={Activity.Category}
          onChange={HandleChange}
          >
            
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
        <label htmlFor="Name">Actividad: </label>

        <input 
          type="text" 
          id="Name"
          className="bg-green-300 Border-slate-300 p-2 rounded-lg"
          placeholder="Ej: Comida, Jugo de Naranja, Proteina en polvo, Ejercicio, Cinta, Mancuernas"
          value={Activity.Name}
          onChange={HandleChange}
        />
        
      </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="Calories">Calorias: </label>
          
          <input   
            id="Calories" 
            type="number"           
            className="bg-green-300 Border-slate-300 p-2 rounded-lg [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Calorias. Ej 300, 200, 1100"
            value={Activity.Calories}
            onChange={HandleChange}
          />

      </div>

      <input 
      type = "submit" 
      className = "bg-green-700 hover:bg-green-950 w-full p-3 font-bold uppercase text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      disabled = {!IsValidActivity()}
      value={Activity.Category == 1 ? "Guardar Comida" : "Guardar Ejercicio"} />
      
    </form>
  )
}
