import request from "@/utility/request";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

  return (
    <nav className="relative">
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
        space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
            {Object.entries(request).map(([key, {title, url}]) => (
                <h2 key={key}
                onClick={() => router.push(`/?genre=${key}`)}
                className="cursor-pointer hover:scale-125 duration-100
                hover:text-white active:text-red-500 last:pr-24">{title}</h2>
            ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
    </nav>
  )
}

export default Navbar;