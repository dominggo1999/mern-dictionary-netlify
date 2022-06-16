import tw, { styled } from 'twin.macro';

export const EnglishWrapper = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-4 
    mt-10
  `}

  b{
    ${tw`
      font-semibold
    `}
  }
`;

export const Short = styled.p`
  ${tw`
    text-2xl
  `}
`;

export const Long = styled.p`
  ${tw`
    text-lg
  `}
`;
