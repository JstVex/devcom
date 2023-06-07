import CreateServer from "@/components/home/CreateServer"
import RecommendedServers from "@/components/home/RecommendedServers"
import SearchBar from "@/components/home/SearchBar"
import Box from "@/components/ui/Box"
import getRecommendedServers from "@/actions/getRecommendedServers"
import Sidebar from "@/components/Sidebar"

export default async function Home() {
    const recommendedServers = await getRecommendedServers();

    return (
        <>
            {/*  @ts-expect-error Server Component */}
            <Sidebar />

            <Box className="p-5">
                <div className="flex  gap-x-5 items-center">
                    <SearchBar />
                    <CreateServer />
                </div>
                <h3 className="my-5 text-lg text-slate-800 dark:text-slate-200">
                    Some recommendations for you
                </h3>
                {recommendedServers.map((recommendedServer) => {
                    return <RecommendedServers key={recommendedServer.id} server={recommendedServer} />
                })}
            </Box>
        </>
    )
}