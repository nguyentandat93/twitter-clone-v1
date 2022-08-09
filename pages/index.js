import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Widgets from "../components/Widgets"

function HomePage({ newsResults }) {
    return (
        <main className="flex min-h-screen mx-auto">
            {/* sidebar */}
            <Sidebar />

            {/* feed */}
            <Feed />

            {/* widgets */}
            <Widgets newsResults={newsResults.articles} />

        </main>
    )
}
  
export default HomePage

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps () {
    const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then((res) => res.json())
    return {
        props: {
            newsResults,
        }
    }
}