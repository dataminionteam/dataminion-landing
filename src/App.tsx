import Header from './components/header'

function App() {
  return (
    <>
      <Header />
      <div className='h-[calc(100dvh-5rem)] p-4 bg-aqua box-border'>
        <div className='bg-white size-full box-border'></div>
      </div>
      <div className='h-[calc(100dvh)] p-4 bg-purple box-border'>
        <div className='bg-white size-full box-border'></div>
      </div>
      <div className='flex flex-wrap gap-1 h-[calc(120dvh)] p-4 box-border'>
        <div className='rounded-3xl border border-slate w-[calc(35%-0.5rem)] box-border bg-purple text-white text-[3rem] font-bold flex items-center p-8'>Lorem Ipsum</div>
        <div className='rounded-3xl border border-slate w-[65%] box-border'></div>
        <div className='rounded-3xl border border-slate w-[65%] box-border'></div>
        <div className='rounded-3xl border border-slate w-[calc(35%-0.5rem)] box-border bg-purple text-white text-[3rem] font-bold flex items-center p-8'>Lorem Ipsum</div>
        <div className='rounded-3xl border border-slate w-[calc(35%-0.5rem)] box-border bg-purple text-white text-[3rem] font-bold flex items-center p-8'>Lorem Ipsum</div>
        <div className='rounded-3xl border border-slate w-[65%] box-border'></div>
      </div>
      <div className='flex justify-between p-8 p-4 bg-purple2 box-border'>
      <div className='w-60 h-60 bg-black'></div>
      <div className='w-60 h-60 bg-black'></div>
      <div className='w-60 h-60 bg-black'></div>
      </div>
      <div className='h-[calc(100dvh)] p-4 box-border'>
        <div className='bg-slate rounded-3xl size-full box-border'></div>
      </div>
      <div className='h-[calc(100dvh)] p-4 bg-purple box-border'>
        <div className='w-full h-2/5'>
          <p>Pricing</p>
        </div>
        <div className='flex gap-1 w-full h-3/5 box-border'>
        <div className='w-1/4 h-full bg-aqua'></div>
        <div className='w-1/4 h-full bg-aqua'></div>
        <div className='w-1/4 h-full bg-aqua'></div>
        <div className='w-1/4 h-full bg-aqua'></div>
        </div>
      </div>
    </>
  )
}

export default App
