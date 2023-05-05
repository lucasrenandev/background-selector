import { useEffect } from 'react'
import './App.css'

export default function App() {
  useEffect(() => {
    const background = document.getElementById("background")
    const select = document.getElementById("select")

    select.addEventListener("change", () => {
      const getIndex = select.options[select.selectedIndex]
      const getValue = getIndex.value
      const getText = getIndex.innerText
      
      background.style.backgroundColor = getValue
      background.textContent = getText
    })
  }, [])

  return (
    <>
      <section className='background' id='background'>Vermelho</section>

      <main>
        <select name="select" className='select' id="select">
          <option value="#f13232">Vermelho</option>
          <option value="#008000">Verde</option>
          <option value="#3d3dfd">Azul</option>
          <option value="#dde041">Amarelo</option>
          <option value="#a143ff">Roxo</option>
          <option value="#ff68f2">Rosa</option>
        </select>
      </main>
    </>
  )
}