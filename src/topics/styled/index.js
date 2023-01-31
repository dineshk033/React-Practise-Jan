import styled, { useTheme } from "styled-components";

export const Heading = styled.h6`
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.theme.bgColors[props.color]};
`;

function CustomStyled() {
  const theme = useTheme();
  console.log(theme);
  return (
    <div>
      <Heading className="card p-4 text-primary" size="md" color="secondary">
        Its styled
      </Heading>
      <Heading size="30px" color="secondary">
        Its name
      </Heading>
    </div>
  );
}

export default CustomStyled;
