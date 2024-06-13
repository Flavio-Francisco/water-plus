
import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { config } from 'dotenv';
config();




const handler = NextAuth({
  pages:{signIn:"/"},
  providers: [
      
        CredentialsProvider({
          // O titulo do formulario
          name: "credentials",
        
          // os campos do formulario
          credentials: {
            name: { label: "nome", type: "text", placeholder: "nome" },
              password: { label: "Password", type: "password" },
              system_id:{label:"sistema",type:"number"}
          },

          async authorize(credentials) {
            console.log(credentials?.name.toString());
            
            const user= await axios.post("api/auth", {
                name: credentials?.name,
                password: credentials?.password,
                system_id: credentials?.system_id
                
            }).then(res => {
                return res.data
            })
                .catch(error => {
              return   error
           })
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
  ],
})








export {handler as GET,handler as POST}