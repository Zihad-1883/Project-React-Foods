import { Suspense } from 'react'
import './App.css'
import FoodSection from './Components/FoodSection/FoodSection/FoodSection'

const foodPromise = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(res => res.json())


function App() {


  return (
    <>
        <h1 style={{textAlign : 'center' , padding : '20px'}}>Simple Food Shop</h1>
        <Suspense fallback={<h3>Loading...</h3>}>
            <FoodSection foodPromise={foodPromise}></FoodSection>
        </Suspense>
        
    </>
  )
}

export default App
