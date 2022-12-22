import { styled } from "..";


export const Header = styled('header',{
  backgroundColor: '$gray800',
  padding: '1rem 1rem',
  width: '100%',
  marginBottom:'2rem',  
  display: 'flex',  
  flexDirection: 'row',  

  div: {
    width: '80%',
  },

  button: {
    backgroundColor: '$green300',
    borderRadius: '0.5rem',
    margin: '0 0.5rem ',
    width: '5rem',  
    cursor: 'pointer',  
  }

  
})

export const Container =styled('div',{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-center',
  minHeight:'100vh',
  
})
