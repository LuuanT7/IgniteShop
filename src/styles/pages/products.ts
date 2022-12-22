import { styled } from "../../styles";

export const Container = styled('main',{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',

  gap: '4rem',
  maxWidth: 1180,
  margin:'0 auto',
})

export const ProductContainer = styled('div',{
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  maxWidth: 576,
  width: '100%',
  height: 656,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding:'0.25rem',

  img: {
    objectFit: 'cover'
  }
  
})

export const DetailsContainer = styled('div',{
  display:'flex',
  flexDirection: 'column',

  h1:{
    fontSize: '$2xl',
    color: '$gray300'
  },

  strong:{
    fontSize: '$2xl',
    color: '$green300',
    display:'block',
    marginTop: '1rem',
  },

  p:{
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
    marginTop: '2.5rem',

  },

  button:{
    marginTop:'auto',
    background:'$green500',
    color:'$white',
    fontWeight:'bold',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',   
    cursor: 'pointer',
    fontSize: '$md',

    '&:disabled':{
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(disable):hover':{
      backgroundColor: '$green300'
    }
    
  }
  
})
