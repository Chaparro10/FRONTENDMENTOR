import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



  const socials = ["GitHub", "LinkedIn", "Twitter", "Instagram"];

  const [list, setList] = useState(socials);

  return (
    <>
      <div style={{ backgroundColor: '#1d1d1d', height: '400px', borderRadius: '10px', padding: '7px' }}>
        <div style={{ marginTop: '15px', padding: '0px 15px' }}>
          <img src='https://imgs.search.brave.com/8ELDenKqXDd_GvEn1OTh0ES7YRbPvYMNXh_daWm_Iyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFzZXN0cmVsbGFz/LnR2L19uZXh0L2lt/YWdlP3VybD1odHRw/czovL3N0MS51dm5p/bWcuY29tL2VlLzJm/LzYzNTkwN2MxNDRl/YjhhOTY0OGZjNWUy/OGJlZGQvZWwtY2hh/dm8tZGVsLTgtcGVy/c29uYWplLmpwZyZ3/PTEyODAmcT03NQ' style={{ height: '60px', width: '60px', borderRadius: '50%' }} />

          <div>
            <p style={{ color: '#f4f4f4', margin:'0px' }}>
              Jessica Randall
            </p>
            <p style={{ color: '#bad84c', fontSize: '12px',margin:'0px' }}>
              London, United Kingdom
            </p>
          </div>

          <p style={{ color: '#6a6a6a', fontSize: '10px' }}>
            "Front-end developer and avid reader"
          </p>
        </div>




        <ul style={{
          padding: '15px'
        }} >
          {
            list.map((item, idx) => (
              <li key={idx} style={{
                color: 'f4f4f4', textAlign: 'center', backgroundColor: '#2d2d2d', marginBottom: '10px', padding: '2px', listStyle: 'none', borderRadius
                  : '4px'
              }}>
                {item}
              </li>
            ))
          }
        </ul>


      </div>

    </>
  )
}

export default App
