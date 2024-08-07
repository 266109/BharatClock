import styles from "./Extra.module.css"
function Container(props) {
  return <div id={styles.container}>{props.children}</div>;
}

export default Container;
