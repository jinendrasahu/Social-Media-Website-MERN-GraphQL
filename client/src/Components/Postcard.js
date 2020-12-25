import React from 'react';
import {Button,Card,Icon,Label,Image} from 'semantic-ui-react';
import moment from "moment";
import { Link } from "react-router-dom";
function Postcard({post:{body,createdAt,id,username,likeCount,commentCount,likes}}){
    return (
        <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button as='div' labelPosition='left'>
      <Button icon>
        <Icon name='heart' color="violet"/>
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        {likeCount}
      </Label>
    </Button>
    <Button as='div' labelPosition='left'>
      <Label as='a' basic pointing='right'>
        2,048
      </Label>
      <Button icon>
        <Icon name='heart' />
        Comments
      </Button>
    </Button>
        </Card.Content>
      </Card>
    );
}
export default Postcard;