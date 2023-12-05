'use client'
import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeColorNewcolor } from './redux/changeColor';
export default function Home() {

  const state = useSelector((state) => state.changeColor.color)
  console.log({state});

 const dispatch = useDispatch();

  return (
    <main className={styles.main} style={{ backgroundColor: state }}>
      <h1 style={{color:"#fff"}}>{state}</h1>
<input type="color" onChange={(e)=>dispatch(changeColorNewcolor(e.target.value))} />

{/* <button onClick={()=>dispatch(changeColorNewcolor())}>change Color</button> */}
    </main>
  )
  
}
