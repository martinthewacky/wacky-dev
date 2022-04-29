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
        <div className="w-full h-full max-w-lg p-3 flex justify-center items-center">
          <div className="w-full h-full py-5 px-3 rounded-xl border border-neutral-400 bg-white relative">
            <div className="p-2 absolute top-0 right-0">
              <button
                className="p-4 flex justify-center items-center gap-1 rounded-xl text-neutral-800 hover:bg-neutral-800/10"
                title="Close Modal"
                onClick={props.closeFunc}
              >
                <XIcon width="24" height="24" />
                <span className="">Close</span>
              </button>
            </div>
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
