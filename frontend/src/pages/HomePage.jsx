import toast from "react-hot-toast"

function HomePage() {
  return (
    <button className="btn btn-secondary" onClick={() => toast.success("This is a success toast")}>Click Me</button>
    )
}

export default HomePage