import Header from './components/header'

function App() {
  return (
    <>
      <Header />
      <div className='bg-color-pattern font-publicSans'>
        <div className='h-[calc(100dvh-6rem)] p-6 bg-color-pattern bg-no-repeat bg-cover box-border'>
          <div className='flex flex-col md:flex-row-reverse items-center bg-grayOverlay size-full box-border rounded-3xl'>
            <img src="/phone.png" className='w-auto h-1/2 md:h-full object-cover relative left-6'/>
            <div className='h-full flex flex-col justify-around p-8 pr-0 text-white'>
              <p className='text-lg md:text-[72px] md:leading-[72px] font-black'>Engage directly with your PDFs and Word documents</p>
              <div className='space-y-4'>
                <p className='text-2xl font-bold'>Come join our beta release</p>
                <a href="https://app.dataminion.ai" className='inline-block w-fit px-8 py-2 bg-white text-purple text-sm rounded-md hover:text-white hover:bg-purple transition-colors'>Get Started</a>
              </div>
            </div>
          </div>
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
      </div>
    </>
  )
}

export default App
