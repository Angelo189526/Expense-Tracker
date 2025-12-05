import { Link } from 'react-router-dom';
import { SideVar } from "../components/Sidevar";
import { Pie } from "react-chartjs-2";
import { ArcElement } from 'chart.js';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend, Title);

export function ExpensesPage() {

    const data = {
        labels:["TOTAL", "Renta", "transporte", "Regalos"], 
        datasets: [
            {
                label: "TOTAL",
                data: [300, 250, 150, 160],
                backgroundColor: ["#7c50b1ff", "#A32222", "#e8d04aff", "#5780cbff"]
            }
        ]
    }

    return (
       
            <div className="bg-stone-900 w-full h-full">
                <div className="p-6">
                    <h1 className="text-white">RESUMEN DEL MES</h1>
                    <Pie key="comida" data={data} />
                </div>
            </div>
   
    );
}
export default ExpensesPage