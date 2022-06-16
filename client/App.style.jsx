import tw, { styled } from 'twin.macro';
import { Wrapper } from './common/Wrapper.jsx';

export const AppWrapper = styled(Wrapper)`
  ${tw`
    flex 
    md:flex-row
    flex-col  
    gap-x-10
  `}
`;
