export default function Chat({ props }) {
  return (
    <>
      {props.role === "user" ? (
        <div className=" container box-border max-w-xs md:max-w-md lg:max-w-lg bg-green-400 p-1 m-2 rounded-2xl ml-auto break-words  ">
          <div className="text-xs md:text-base lg:text-base p-2 text-white text-left  ">
            {props.content}
          </div>
        </div>
      ) : (
        <div className=" container box-border max-w-xs md:max-w-md lg:max-w-lg bg-blue-500 p-1 m-2 rounded-2xl break-words  ">
          <div className="text-xs md:text-base lg:text-base p-2 text-white text-left  ">
            {props.content}
          </div>
        </div>
        // <div className="container mx-auto mt-2">
        //   <div className="bg-gray-200 text-black rounded-lg p-2 text-sm md:text-base lg:text-lg max-w-xs sm:max-w-xs md:max-w-md lg:max-w-lg break-words">
        //     {props.content}
        //   </div>
        // </div>
      )}
    </>
  );
}
