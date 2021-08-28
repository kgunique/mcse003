import React from 'react'

function Header() {
    return (
        <header className="sticky top-0 z-50 space-x-6 flex bg-blue-200 justify-between shadow-md p-5">
            <div className = "">
                <h1 className="text-2xl ">MCSE-003 📖 </h1>
                
            </div>
            <div className = "">
                <h1 className="text-xl border bg-yellow-500 py-2 px-5 rounded-md  cursor-pointer active:transition tranform duration-200 ease-out hover:bg-blue-200 hover:shadow-lg">Ignou Important Question</h1>
            </div>
            <div className = "flex items-center space-x-4">
                <h1 className="text-xl font-semibold">Follow Kg Blog facebook page for More</h1>
                {/* <img className="h-10 space-x-2 cursor-pointer" src="./logo512.png" alt="Kg blog icon"/> */}
            </div>
        </header>
    )
}

export default Header
