import styled from 'styled-components';

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input``;

const TextArea = styled.textarea``;

Field.Label = Label;
Field.Input = Input;
Field.TextArea = TextArea;

export default Field;
