import Header from "./Hero/Header"
import Spinner from "./Spinner"
export default function Fallback() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="bg-black">
        <Header />
      </div>
      <Spinner />
    </div>
  )
}
