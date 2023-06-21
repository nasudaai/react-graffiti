export const ColoredMessage = ({ color, back, children }) => {
  //const { color, children } = props;
  //console.log(props);
  //const color = props.color;
  //const children = props.children;
  //console.log(color);
  //console.log(children);
  const contentStyle = {
    color: color,
    fontSize: "20px",
    paddingLeft: "10px",
    backgroundColor: back,
  };

  return (
    <p style={contentStyle}>{children}</p>
  )
}