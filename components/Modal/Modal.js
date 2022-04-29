import XIcon from "@heroicons/react/outline/XIcon";

const Modal = (props) => {
  let displayMethod = props.show ? "" : "hidden";
  let animation = props.show ? "animate-fade-in" : "animate-fade-out";
  return (
    <div className={`${displayMethod} ${animation} absolute top-full w-full`}>
      <div className="fixed inset-0 flex justify-center items-center">
        <div
          className="w-full h-full bg-neutral-800/80 absolute"
          onClick={props.closeFunc}
        ></div>
        <div className="w-full max-w-lg p-3 flex justify-center items-center relative">
          <div className="px-3 absolute bottom-full right-0">
            <button
              className="p-4 flex justify-center items-center rounded-xl text-white hover:bg-neutral-800/50"
              title="Close Modal"
              onClick={props.closeFunc}
            >
              <XIcon width="24" height="24" />
            </button>
          </div>
          <div className="w-full py-5 px-3 rounded-xl border border-neutral-400 bg-white">
            {props.children}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease;
        }
        .animate-fade-out {
          animation: fadeOut 0.4s ease;
        }
      `}</style>
    </div>
  );
};

export default Modal;
