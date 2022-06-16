import tw, { styled } from 'twin.macro';

export const Sticky = styled.div`
  ${tw`
    md:w-1/2
    w-full  
  `}
`;

export const DefinitionsWrapper = styled.div`
  ${tw`
    flex 
    flex-col 
    md:sticky 
    top-0   
    py-10  
    h-screen 
    overflow-y-auto
    pr-2
  `}
`;
