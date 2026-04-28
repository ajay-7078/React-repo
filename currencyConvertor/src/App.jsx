import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  useEffect(() => {
    if (!amount || !currencyInfo || !currencyInfo[to]) {
      setConvertedAmount(0)
      return
    }

    setConvertedAmount(Number((amount * currencyInfo[to]).toFixed(4)))
  }, [amount, to, currencyInfo])

  const swap = () => {
    setAmount((prev) => (convertedAmount ? convertedAmount : prev))
    setFrom(to)
    setTo(from)
  }

  const rateLabel = currencyInfo && currencyInfo[to]
    ? `1 ${from.toUpperCase()} = ${currencyInfo[to]} ${to.toUpperCase()}`
    : 'Loading exchange rate...'

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800/70 bg-slate-900/85 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">Currency Converter</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Convert currencies instantly</h1>
          <p className="mt-3 text-slate-400">Choose currencies, enter an amount, and view the converted result live.</p>
        </div>

        <div className="grid gap-5">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            onAmountChange={setAmount}
          />

          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="inline-flex items-center justify-center rounded-full border border-cyan-500/40 bg-slate-800 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/10"
            >
              Swap currencies
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            selectCurrency={to}
            amountDisable
          />

          <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-5">
            <p className="text-sm text-slate-400">Exchange rate</p>
            <p className="mt-2 text-xl font-semibold text-white">{rateLabel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App