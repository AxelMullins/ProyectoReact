
import redesDB from '../data/redesDG'



const Redes = () => {

  return (
    <div>
        <h3>Tell a friend</h3>
        <ul>
            {
                redesDB.map( el =>  (
                  <>
                    <li>
                      {el.name}
                    </li>
                  </>
                ))
            }
        </ul>
    </div>
  )
}

export default Redes