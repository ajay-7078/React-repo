import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  const decrement = () => {
    setCounter(prev => prev - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Counter Pro</h1>
          <p className="text-slate-300 text-sm">A sleek counter application</p>
        </div>

        <div className="text-center mb-8">
          <div className="text-8xl font-bold text-white mb-4 font-mono">
            {counter}
          </div>
          <div className="text-slate-400 text-sm">
            {counter === 0 ? 'Zero' : counter > 0 ? 'Positive' : 'Negative'}
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={decrement}
            disabled={counter <= 5}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <span className="text-2xl mr-2">-</span>
            Decrease
          </button>

          <button
            onClick={increment}
            disabled={counter >= 20}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <span className="text-2xl mr-2">+</span>
            Increase
          </button>
        </div>

        <button
          onClick={reset}
          className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Reset to Zero
        </button>

        <div className="mt-6 text-center">
          <p className="text-slate-400 text-xs">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
