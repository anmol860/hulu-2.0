import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ center }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref}
    className="p-2 group cursor-pointer sm:hover:scale-105 duration-200 ease-in">
      <Image
        layout="responsive"
        src={`${BASE_URL}${center.backdrop_path || center.poster_path}` || `${BASE_URL}${center.poster_path}`}
        height={1080}
        width={1920}
      />
      
      <div className="p-2">
        <p className="truncate max-w-md">{center.overview}</p>

        <h2 className="mt-1 text-2xl text-white group-hover:font-bold duration-100 ease-in-out">
            {center.title || center.original_name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
            {center.media_type && `${center.media_type} `}{" "}
            {center.release_date || center.first_air_date} {" "}
            <ThumbUpIcon className="h-5 mx-2"/> {center.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
