import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"

function HomePage() {
    return (
        <main className="flex min-h-screen max-w-7xl mx-auto">
            {/* sidebar */}
            <Sidebar />

            {/* feed */}
            <Feed />
        </main>
    )
}
  
export default HomePage