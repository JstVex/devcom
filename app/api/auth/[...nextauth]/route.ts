// import { authOptions } from '@/lib/auth'
// import NextAuth from 'next-auth'

// export default NextAuth(authOptions)
import { db } from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github'

function getGithubCredentials(): { clientId: string; clientSecret: string } {
    const clientId = process.env.GITHUB_ID
    const clientSecret = process.env.GITHUB_SECRET
    if (!clientId || clientId.length === 0) {
        throw new Error('Missing GITHUB_ID')
    }

    if (!clientSecret || clientSecret.length === 0) {
        throw new Error('Missing GITHUB_SECRET')
    }

    return { clientId, clientSecret }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt',
    },
    providers: [
        GithubProvider({
            clientId: getGithubCredentials().clientId,
            clientSecret: getGithubCredentials().clientSecret,
        }),
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }

            return session
        },
        async jwt({ token, user }) {
            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email,
                },
            })

            if (!dbUser) {
                token.id = user!.id
                return token
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
            }
        },
        redirect() {
            return '/'
        },
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };