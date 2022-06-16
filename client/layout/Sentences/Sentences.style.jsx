import tw, { styled } from 'twin.macro';

export const SentencesWrapper = styled.div`
  ${tw`
    md:w-1/2
    w-full
    py-10  
  `}

  ul{
    ${tw`
      flex 
      flex-col
      gap-y-5
      text-lg
    `}
  }
`;
