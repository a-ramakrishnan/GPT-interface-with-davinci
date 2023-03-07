import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">GPT Messenger</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="info">"Explain something to me"</p>
            <p className="info">
              "What is the difference between car and bus?"
            </p>
            <p className="info">"Why do stars twinkle at night?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="info">"Explain something to me"</p>
            <p className="info">
              "What is the difference between car and bus?"
            </p>
            <p className="info">"Why do stars twinkle at night?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="info">"Explain something to me"</p>
            <p className="info">
              "What is the difference between car and bus?"
            </p>
            <p className="info">"Why do stars twinkle at night?"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
