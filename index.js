const { ApolloServer }=require("apollo-server")
const mongoose=require("mongoose")
const resolvers=require("./graphql/resolvers/index")
const typeDefs=require("./graphql/typeDefs")
const { MONGODB }=require("./config.js")


const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>({req})
});

mongoose.connect(MONGODB,{ useNewUrlParser:true })
.then(()=>{
    console.log("Mongo connected");
    return server.listen({port:5000});
})
.then((res)=>{
    console.log(`Server is running at ${res.url}`);
});
// try {
//     mongoose.connect( ur, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
//     console.log("connected"));    
//     }catch (error) { 
//     console.log("could not connect");    
//     }

// server.listen({port:5000}).then((res)=>{
//     console.log(`Server is running at ${res.url}`);
// });