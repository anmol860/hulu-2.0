import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Center = ({req}) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center">
        {req.map((center) => (
            <Thumbnail key={center.id} center={center}/>
        ))}
    </FlipMove>
  )
}

export default Center;