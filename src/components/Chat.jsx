export default function Chat({ props }) {
  return (
    <>
      {props.role === "user" ? (
        <div className=" container box-border max-w-lg bg-blue-500 p-1 m-2 rounded-2xl ml-auto break-words  ">
          <div className="p-2 text-white text-left  ">user-{props.content}</div>
        </div>
      ) : (
        <div className=" container box-border max-w-lg bg-blue-500 p-1 m-2 rounded-2xl justify-normal break-words  ">
          <div className="p-2 text-white text-left  ">
            assistant-{props.content}
          </div>
        </div>
      )}
    </>
  );
}
