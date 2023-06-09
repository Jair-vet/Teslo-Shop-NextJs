import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";

import { dbUsers } from '../../../database';
import { StepIconClassKey } from "@mui/material";
 
declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
  interface User {
    _id?: string
    id?: string
  }
}

export const authOptions: NextAuthOptions = {
    providers: [    
    
        // ...add more providers here

        CredentialsProvider({
            type: 'credentials',
            // name: 'Custom Login',
            credentials: {
                email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com'  },
                password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña'  },
            },
            async authorize(credentials, req) {
              const user =  await dbUsers.checkUserEmailPassword( credentials!.email, credentials!.password);
              if (user) {
                // Map the user object to the expected shape with an `id` property
                // return { id: "1", name: 'Jair Aceves', correo: 'jair@google.com', role: 'admin' };
                const { _id, email, role, name } = user;
                return { id: _id.toString(), email, role, name };
              }
              return null;
            }
        }),
        
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        // }),
    ],

    // Custom Pages
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register'
    },

    // Callbacks
    jwt: {
        // secret: process.env.JWT_SECRET_SEED, // deprecated
    },
    
    session: {
        strategy: 'jwt',
        maxAge: 2592000, /// 30d
        updateAge: 86400, // cada día
    },

    callbacks: {

        async jwt({ token, account, user }) {
        //   console.log({ token, account, user });
    
          if ( account ) {
            token.accessToken = account.access_token;
    
            switch( account.type ) {
    
              case 'oauth': 
                token.user = await dbUsers.oAUthToDbUser( user?.email || '', user?.name || '' );
              break;
    
              case 'credentials':
                token.user = user;
              break;
            }
    
          }
    
          return token;
        },

        async session({ session, token, user }) {
          //console.log({ session, token, user });
          // session.accessToken = token.accessToken || 'NO HAY ACCESS TOKEN'
          session.user = token as any;
          return session;
        },
    }
}
export default NextAuth(authOptions);