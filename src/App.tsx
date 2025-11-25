import Forms from "./components/Forms"
import { ActivityReducer, InitialState } from "./Reducers/Activity-Reducers"
import { useReducer } from "react"

function App() {

  const [state, dispatch] = useReducer(ActivityReducer, InitialState)

  return (
    <>
     <header className="bg-lime-800 py-5">

    <div className="max-w-4xl mx-auto flex justify-between">

      <h1 className="text-center text-lg font-bold text-white uppercase"> Contador De Calorias</h1>


    </div>

     </header>

     <section className="bg-lime-900 py-20 px-5">

      <div className="max-w-4xl mx-auto">
      <Forms 
      dispatch = {dispatch}
      />

      </div>

     </section>
    </>
  )
}

export default App
