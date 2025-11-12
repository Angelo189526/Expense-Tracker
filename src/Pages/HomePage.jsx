import { Bar } from "react-chartjs-2";
import { SideVar } from "../components/Sidevar";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);


export function  HomePage() {

    const data = {
        labels:["TOTAL", "Renta", "transporte", "Regalos"], 
        datasets: [
 {          label: "TOTAL",
            data: [300, 250, 150, 160],
            backgroundColor: ["#7c50b1ff", "#A32222", "#e8d04aff", "#5780cbff"]
        }
        ]
    }
    
     const options = {
    scales: {
      x: {
        ticks: {
          color: "#e9f4eeff", 
        },
        grid: {
          color: "#50C87833",
        },
      },
      y: {
        ticks: {
          color: "#50C878",
        },
        grid: {
          color: "#50C87833",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#e9eceaff",
        },
      },
      title: {
        display: true,
        text: "Gastos Mensuales",
        color: "#dff2e5ff",
        font: {
          size: 18,
        },
      },
    },
  };
return (
    <>
 

<div className="flex min-h-screen bg-stone-800 text-gray-800">
   <SideVar/>
         <main className="flex-1 p-8">
            <div className="bg-stone-900 w-full h-full">
                <div className="p-6">
                <h1 className="text-white">
                    RESUMEN DEL MES 
                </h1>
                <Bar key="gastos" data={data} options={options}/>
                </div>
            </div>
      </main>
</div>


    </>
)
} 

export default HomePage