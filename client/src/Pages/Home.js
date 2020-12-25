import React from 'react';
// import { gql, useQuery } from '@apollo/client';
import gql from "graphql-tag";
import {useQuery } from '@apollo/react-hooks';
import Postcard from '../Components/Postcard';
import {Grid} from 'semantic-ui-react';
function Home() {

  const {loading,data}=useQuery(FETCH_POSTS_QUERY);
  // const posts=data.getPosts;
  return (
   
    <Grid columns={3}>
    <Grid.Row>
      <h1>Recent Post</h1>
     </Grid.Row>
     <Grid.Row>
      {loading?(<h1>Loading Posts...</h1>):
      (data.getPosts && data.getPosts.map((post)=>(
        <Grid.Column key={post.id}>
       <Postcard post={post}/>
      </Grid.Column>
      )))}
     </Grid.Row>
      
  </Grid>
  );
}
const FETCH_POSTS_QUERY=gql`
{
  getPosts{
  id
  body
  createdAt
  username
  likeCount
  likes{
    username
  }
  commentCount
  comments{
    id
    username
    createdAt
    body
  }
}
}
`;
export default Home;
