import classes from "./Card.module.css";
//custom component to 'wrap' around jsx content 'children' is a special prop that every component receives by default
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}  

export default Card;
