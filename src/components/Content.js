
import {FaTrashAlt} from 'react-icons/fa'
import './style.css'

const Content = (items, handleCheck, handleDelete) => {
 


  return (
    <main>

      {items.length ? (
         

        ) : (
          <p style={{marginTop: '2rem' }}> Your List Empty.</p>
        )}
    </main>
  )
}

export default Content
