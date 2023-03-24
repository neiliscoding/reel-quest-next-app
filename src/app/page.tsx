import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
import 'src/app/assets/bootstrap/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/regular.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
  <footer className="text-muted py-5">
    <div className="container">
      <p className="float-end mb-1">
        <a href="#">Back to top</a>
      </p>
      <p className="mb-1">That's all folks!</p>
    </div>
  </footer>
</>
  )
}
