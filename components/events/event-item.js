import classes from "./event-item.module.css";
import Button from "../ui/button";
function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatAddress}</address>
          </div>
        </div>
        <div className={classes.action}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
