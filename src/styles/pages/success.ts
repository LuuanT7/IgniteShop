import { styled } from "../../styles";



export const SuccessContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  marginTop: '0 auto',
  height: 656,

  h1:{
    fontSize:'$2xl',
    color: '$gray100'
  },


  p:{
    fontSize: '$md',
    lineHeight: '1.6rem',
    color: '$gray300',
    maxWidth:560,
    textAlign: 'center',
    marginTop: '2rem',
    
  },
  a:{
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration:'none'
  }
  
})

export const ImageContainer = styled('div', {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  width: "100%",
  maxWidth: 130,
  height: 145,
  padding: '0.25rem',
  marginTop:'4rem',
  marginBottom: '2rem',

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img:{
    objectFit:'cover',
  }
})

