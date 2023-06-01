import CreateServer from "@/components/home/CreateServer"
import RecommendedServers from "@/components/home/RecommendedServers"
import SearchBar from "@/components/home/SearchBar"
import Box from "@/components/ui/Box"

export default async function Home() {

  return (
    <Box className="p-5">
      <div className="flex  gap-x-5 items-center">
        <SearchBar />
        <CreateServer />
      </div>
    </Box>
  )
}
