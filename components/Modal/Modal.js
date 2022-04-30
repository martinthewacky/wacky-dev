import XIcon from "@heroicons/react/outline/XIcon";
import SunIcon from "@heroicons/react/outline/SunIcon";

const Modal = (props) => {
  let displayMethod = props.show ? "" : "hidden";
  let animation = props.show ? "animate-fade-in" : "animate-fade-out";
  let modalAnimation = props.show ? "animate-slide-in" : "";
  return (
    <div className={`${displayMethod} ${animation} absolute top-full w-full`}>
      <div className="fixed inset-0 flex justify-center items-center">
        <div
          className="w-full h-full bg-neutral-800/50 absolute"
          onClick={props.closeFunc}
        ></div>
        <div
          className={`w-full h-full max-w-xs absolute top-0 right-0 ${modalAnimation}`}
        >
          <div className="w-full h-full rounded-none border-l bg-white/80 backdrop-blur-sm relative">
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
              <div className="w-full h-full flex justify-between items-center">
                <div className="relative">
                  <button
                    className="p-3 justify-center items-center rounded-none hover:bg-neutral-800/10"
                    title="Change Theme"
                    aria-label="Change Color Theme"
                  >
                    <SunIcon width="24" height="24" />
                  </button>
                </div>
                <div className="relative">
                  <a
                    href="https://github.com/martinthewacky/wacky-dev/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3 justify-center items-center rounded-none decoration-dotted decoration-gray-800/50 hover:bg-neutral-800/10 hover:decoration-gray-800/100"
                    title="Visit GitHub Repo"
                    aria-label="Visit this project's GitHub repository"
                  >
                    GitHub
                  </a>
                </div>
              </div>
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
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.2s ease;
        }
        .animate-fade-out {
          animation: fadeOut 0.4s ease;
        }
        .animate-slide-in {
          animation: slideIn 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default Modal;
