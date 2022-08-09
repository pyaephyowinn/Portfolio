import { Link } from "react-router-dom"
import styles from "./index.module.css"

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Page is not found</h1>
      <p>Go to <Link to={"/portfolio/"}>Home</Link></p>
    </div>
  )
}
export default NotFound