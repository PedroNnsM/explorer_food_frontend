import { Container } from "./styles";

import {GoSearch} from 'react-icons/go'

// eslint-disable-next-line react/prop-types
export function Input({searching,   ...rest }) {
  return (
    <Container >{searching ? <GoSearch size={24} />: <></> }
      <input  {...rest} />
    </Container>
  );
}
