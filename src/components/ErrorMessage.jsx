function ErrorMessage(props) {
  return <> {props.food.length === 0 && <h3>List is Empty</h3>}</>;
}

export default ErrorMessage;
