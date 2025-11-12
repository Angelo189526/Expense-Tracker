import React, { useState } from 'react';

export function SideVar() {
    const [botonActive, setBotonActive] = useState(null);

  const listenClick = (name) => {
    setBotonActive(name)
  }
    return (

      
      
        <>  
        
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
     <aside className="w-64 bg-stone-800 shadow-md flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-3 p-4 border-b">
                     
              <h2 className="font-semibold text-white">Daniel Felipe</h2>
           
          </div>

          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
               <button className={`flex items-center gap-2 p-3 ${botonActive === 'HOME' ? 'bg-zinc-700 text-emerald-400 rounded-lg' : 'hover:bg-zinc-700 hover:text-emerald-400 rounded-lg text-white' }`}
                onClick={() => listenClick('HOME')}
                >
                  
                HOME
               </button>
              </li>
              <li>
                   <button className={`flex items-center gap-2 p-3 ${botonActive === 'EXPENSES' ? 'bg-zinc-700 text-emerald-400 rounded-lg' : 'hover:bg-zinc-700 hover:text-emerald-400 rounded-lg text-white' }`}
                onClick={() => listenClick('EXPENSES')}
                >
                  
                EXPENSES 
               </button>
              </li>
                <li>
                  <button className={`flex items-center gap-2 p-3 ${botonActive === 'TRIPS' ? 'bg-zinc-700 text-emerald-400 rounded-lg' : 'hover:bg-zinc-700 hover:text-emerald-400 rounded-lg text-white' }`}
                onClick={() => listenClick('TRIPS')}
                >
                  
                TRIPS 
               </button>
              </li>
                 <li>
                   <button className={`flex items-center gap-2 p-3 ${botonActive === 'APROVALS' ? 'bg-zinc-700 text-emerald-400 rounded-lg' : 'hover:bg-zinc-700 hover:text-emerald-400 rounded-lg text-white' }`}
                onClick={() => listenClick('APROVALS')}
                >
                  
                APROVALS
               </button>
              </li>
                 <li>
                   <button className={`flex items-center gap-2 p-3 ${botonActive === 'SETTINGS' ? 'bg-zinc-700 text-emerald-400 rounded-lg' : 'hover:bg-zinc-700 hover:text-emerald-400 rounded-lg text-white' }`}
                onClick={() => listenClick('SETTINGS')}
                >
                  
                SETTINGS 
               </button>
              </li>
                 <li>
                  <button className={`flex items-center gap-2 p-3 ${botonActive === 'SUPPORT' ? 'bg-zinc-700 text-emerald-400 rounded-lg' : 'hover:bg-zinc-700 hover:text-emerald-400 rounded-lg text-white' }`}
                onClick={() => listenClick('SUPPORT')}
                >
                  
                SUPPORT
               </button>
              </li>
            </ul>
          </nav>
        </div>

  
        <div className="p-4">
          <button className="w-full bg-zinc-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition">
            Cerrar sesión
          </button>
        </div>
      </aside>

      
            </div>
        </>
    )


} 

