import getServerById from "@/actions/getServerbyId";
import ServerSidebar from "@/components/server/ServerSidebar";
import Box from "@/components/ui/Box";

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function EachServerLayout({
    children, params
}: {
    children: React.ReactNode
    params: { serverId: string }
}) {
    const server = await getServerById(params.serverId);

    if (!server) {
        return (
            <Box>
                {children}
            </Box>
        )
    }

    return (
        <>
            <ServerSidebar server={server} />
            {children}
        </>
    );
}