import tw, { styled } from 'twin.macro';

export const SynonymsWrapper = styled.div`
  ${tw`
    py-5 
    flex 
    gap-x-3 
    gap-y-5
    flex-wrap 
    w-full 
  `}
`;

export const SynonymItem = styled.button`
  ${tw`
    capitalize 
    bg-blue-500 
    px-2 
    py-1 
    text-white
  `}
`;
