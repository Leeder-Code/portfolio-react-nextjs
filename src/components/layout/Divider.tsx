import styled from 'styled-components'
type DividerTypes = {
  width: number
  height: number
  borderRadius?: number
  color1: string
  color2: string
}

const DividerStyles = styled.div<DividerTypes>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius || '10px'};
  background: linear-gradient(
    270deg,
    ${(props) => props.color1} 0%,
    ${(props) => props.color2} 100%
  );
`
export default DividerStyles
