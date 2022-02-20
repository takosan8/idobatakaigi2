import React, { useEffect, useRef } from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';


const MessageItem=({isLastItem,name,text})=>{
  const ref = useRef(null);

  useEffect(()=>{
    if(isLastItem){
      ref.current.scrollIntoView({ behavior: 'smooth'});
    }
  },[isLastItem])

    return (
      <ListItem diviver={true} ref={ref}>
        <ListItemAvatar>
          <Avatar src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                // color="text.primary"
              >
              {text}
              </Typography>
          }
        />
      </ListItem>
    )
}

export default MessageItem;