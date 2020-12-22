import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  heading: {
    color: 'red',
    fontSize: (60),
    fontWeight: 'bolder',
    fontFamily: 'Cantarell',
  },
  image: {
    width: '100px',
    height: '100px',
    paddingLeft: (300),
  },
  MuiContainer: {
    MaxWidth: (1600),
  }
  
}));