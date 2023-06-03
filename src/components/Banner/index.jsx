/* eslint-disable react/prop-types */
import { Container, IconText } from "./styles";


export function ExplorerIcon({
  color,
  fontSize,
  margin,
  fill,
  width,
  height,
  marginBotton,
  ...rest
}) {
  return (
    <Container
      marginBotton={marginBotton}
      margin={margin}
      width={width}
      {...rest}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 39 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
          fill={fill}
        />
      </svg>
      <IconText color={color} fontSize={fontSize}>
        food explorer
      </IconText>
    </Container>
  );
}
