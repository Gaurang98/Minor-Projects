import { useState } from "react"

function App() {
  const [color, setcolor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
    >
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-col items-center bg-white px-4 py-3 rounded-2xl shadow-lg">
    
    <div className="font-bold font-serif text-lg mb-3">
      THE ROYAL PALETTE
    </div>

    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={() => setcolor("#5c0a24")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "#a11340" }}
      >
        Pink
      </button>

      <button
        onClick={() => setcolor("#08034a")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "#08034a" }}
      >
        Blue
      </button>

      <button
        onClick={() => setcolor("#104003")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "#104003" }}
      >
        Green
      </button>

      <button
        onClick={() => setcolor("#5c0510")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "#5c0510" }}
      >
        Red-Wine
      </button>

      <button
        onClick={() => setcolor("#043047")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "#043047" }}
      >
        Teal-Blue
      </button>
    </div>

  </div>
</div>

    </div>
  )
}

export default App
