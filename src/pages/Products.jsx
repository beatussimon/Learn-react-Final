import { useParams } from "react-router-dom"

export default function Products() {
    
  const {id} = useParams()
  return (
    <div>
        <h1>Products</h1>
        <p>Showing a product with id: {id}</p>
    </div>
  )
}
