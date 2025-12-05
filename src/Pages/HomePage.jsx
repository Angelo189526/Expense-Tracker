import { SideVar } from "../components/Sidevar";
import ExpensesPage from "./ExpensesPage";
import TripsPage from "./TripssPage";




export function  HomePage() {

    
return (
    <>
 


        
            <div className="bg-stone-900 w-full h-full">
                <div className="p-6">
                <h1 className="text-white">
                    Sección General 
                </h1>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <ExpensesPage/>
                    </div>
                    <div>
                    <TripsPage/>
                  </div>
                </div>
                </div>
            </div>



    </>
)
} 

export default HomePage