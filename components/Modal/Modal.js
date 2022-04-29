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
          <div className="w-full h-full rounded-none border-l bg-white relative">
            <header className="w-full h-12 px-3 border-b absolute top-0">
              <div className="w-full h-full flex justify-between items-center">
                <h5 className="capitalize font-mono text-xl font-bold">
                  nav menu
                </h5>
                <div className="relative">
                  <button
                    className="p-3 justify-center items-center rounded-none hover:bg-neutral-800/10"
                    title="Close"
                    aria-label="Close Navigation Modal"
                    onClick={props.closeFunc}
                  >
                    <XIcon width="24" height="24" />
                  </button>
                </div>
              </div>
            </header>
            <main className="w-full h-full px-3 py-12">{props.children}</main>
            <footer className="w-full h-12 px-3 border-t absolute bottom-0">
              <div className="w-full h-full flex justify-between items-center"></div>
            </footer>
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
