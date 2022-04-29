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
        <div className="w-full h-full max-w-xs absolute top-0 right-0">
          <div className="w-full h-full rounded-none border-l bg-white">
            <header className="w-full h-12 px-3 border-b">
              <div className="w-full h-full flex justify-between items-center">
                <h5 className="capitalize font-mono text-xl font-bold">
                  {props.modalHeading}
                </h5>
                <div className="relative">
                  <button className="p-3 justify-center items-center rounded-none hover:bg-neutral-800/10">
                    <XIcon width="24" height="24" />
                  </button>
                </div>
              </div>
            </header>
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
