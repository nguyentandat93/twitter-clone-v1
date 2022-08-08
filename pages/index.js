import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Widgets from "../components/Widgets"

function HomePage() {
    return (
        <main className="flex min-h-screen max-w-7xl mx-auto">
            {/* sidebar */}
            <Sidebar />

            {/* feed */}
            <Feed />

            {/* widgets */}
            <Widgets />
        </main>
    )
}
  
export default HomePage