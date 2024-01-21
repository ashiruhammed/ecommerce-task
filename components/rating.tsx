import NonRatedStar from "@/public/icon/NonRatedStar";
import RatedStar from "@/public/icon/RatedStar";
import Image from "next/image";

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {rating ? (
        <>
          <>
            {Array.from({ length: rating }).map((_, i) => (
              <RatedStar key={i} />
            ))}
          </>
          <>
            {Array.from({ length: 5 - rating }).map((_, i) => (
              <NonRatedStar key={i} />
            ))}
          </>
        </>
      ) : null}

      {!rating && (
        <p className="text-gray-700 text-[14px] bg-gray-100 rounded-xl px-3 py-[2px]">
          Not rated yet
        </p>
      )}
    </div>
  );
}

export default Rating;
