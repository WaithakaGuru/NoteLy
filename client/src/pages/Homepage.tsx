import {Stack} from "@mui/material";

function Homepage() {
  return (  
    <>
        <Stack className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">📝 Notely</h1>
        <p className="text-xl text-center max-w-md mb-6">
            Take notes. Stay sharp. A beautifully minimal app to capture, organize, and sync your thoughts.
        </p>
        <div className="flex gap-4 mb-10">
            <button className="bg-gray-700 text-white px-6 py-2 rounded-xl
             shadow hover:bg-gray-500 hover:text-gray-800 cursor-pointer">
            Try It Free
            </button>
            <button className="text-blue-600 hover:underline">Learn More</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm">
            <div>
            <div className="text-2xl mb-2">📒</div>
            <h3 className="font-semibold">Clean UI</h3>
            <p>Distraction-free and elegant note-taking.</p>
            </div>
            <div>
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="font-semibold">Smart Tags</h3>
            <p>Quickly organize with smart tagging.</p>
            </div>
            <div>
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold">Top Notch Security</h3>
            <p>Safe and secure Login and acces authorization</p>
            </div>
        </div>
        </Stack>
    </>
  )
}

export default Homepage