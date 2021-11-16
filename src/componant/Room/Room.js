import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HotelIcon from '@material-ui/icons/Hotel';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WcIcon from '@material-ui/icons/Wc';
import { Button } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },


  avatar: {
    backgroundColor: red[500],
  },
}));
const Room = (props) => {
    const classes = useStyles();
  

const {title,description,imgUrl,bed,capacity,bedType,avatar,price}=props.item;
const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }

    return (
        <div>
           <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {avatar}
          </Avatar>
        }
    
        title={title}
      />
      <CardMedia
        className={classes.media}
        image={imgUrl}
        title={bedType}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
            <HotelIcon></HotelIcon>:{capacity}
        </IconButton>
            <WcIcon></WcIcon>: {bed}
        <IconButton>
        </IconButton>
        <AttachMoneyIcon></AttachMoneyIcon>
          {price}
        <IconButton>
            
        </IconButton>
        <IconButton >
        <Button onClick={() => handleBook(bedType)} variant="contained" color="primary">Book</Button>
        </IconButton>
      </CardActions>
     
    </Card>
        </div>
    );
};

export default Room;