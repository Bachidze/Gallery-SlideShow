import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './pages/Root'
import data from './data.json'
function App() {
  const newData = data
  console.log(newData)

  const router = createBrowserRouter((
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        
      </Route>
    )
  ))

  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    <section className='flex flex-col max-w-[1920px] m-auto w-[90%]  gap-5 mb-10  grid2'>
        {data.map(el => (
          <div className={`flex relative   justify-center flex-col  items-center ${el.name}`  }>
            <div className='relative'>
              <img className='hover:scale-105 hover:opacity-75 cursor-pointer '  src={el.images.thumbnail} alt="images" />
              <div className='absolute bottom-6 flex flex-col self-start pl-7'>
              <h2 className='text-white  pb-2 text-[24px] font-bold'>{el.name}</h2>
              <h2 className='text-white text-[13px] font-medium opacity-60'>{el.artist.name}</h2>
              </div>
            </div>
          </div>
        ))}
    </section>
    </>
  )
}

export default App
