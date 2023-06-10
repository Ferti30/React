import { useState } from 'react'
import blaz from './assets/blaz.png'
import wix from './assets/wix.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

          <h1 className="logo">Pawel Matysiak 113960</h1>
          <h2>Moje inne strony:</h2>
          <h3>
          <div class="divv">
              <table>
                  <tr>
                      <td><img src={wix} className="logop" alt="Wix logo" /></td>
                      <td><a href="https://11396060.wixsite.com/pizza-prima" target="_blank">Wix</a></td>
                  </tr>
                  <tr>
                      <td><img src={blaz} className="logop" alt="Blazor logo" /></td>
                      <td><a href="https://blazortest320230514030447.azurewebsites.net/" target="_blank">Blazor</a></td>
                      </tr>
                  </table>
              </div>
          </h3>

    </>
  )
}


export default App
