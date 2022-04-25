import XIcon from "@heroicons/react/outline/XIcon";

const Modal = (props) => {
  let displayMethod = props.show ? "" : "hidden";
  return (
    <div className={`${displayMethod} absolute top-full w-full`}>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-neutral-800/80"
        onClick={props.closeFunc}
      ></div>
      <div className="absolute bottom-full">
        <button
          className="p-4 flex justify-center items-center rounded-xl text-white hover:bg-neutral-800/50"
          onClick={props.closeFunc}
        >
          <XIcon width="24" height="24" />
        </button>
      </div>
      <div className="absolute top-0 -right-3 w-screen p-3 flex justify-center items-center">
        <div className="w-full py-5 px-3 rounded-xl border border-neutral-400 bg-white"></div>
      </div>
    </div>
  );
};

export default Modal;
