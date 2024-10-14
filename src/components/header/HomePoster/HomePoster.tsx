import React from 'react'
import styles from './HomePoster.style';
import { Grid,Typography,Button,Box, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Card } from 'react-bootstrap';
const HomePoster=()=> {
    const classes = styles;
  return (
    <div style={{position:'relative'}}>
   <img
                style={{ width: '100%', height: 355, objectFit:'cover' }}
                src="./images/homePoster.jpg"
              />
    
    <div style={{position:'absolute', width:'100%',height:'100%', background:'#1B1B1B9C', display:'flex', justifyContent:'center', alignItems:'center', gap:"50px", top:'0px', left:'0p'}}>
        <div>
            <h3 style={{fontFamily:'Outfit', fontWeight:'900', color:'white', fontSize:'77px'}}>4500 +</h3>
            <p style={{fontFamily:'Outfit', fontWeight:'400', color:'white', fontSize:'32px',textAlign:'center',lineHeight:'40.32px'}}>Total<br/> Students</p>
        </div>
        <div>
            <h3 style={{fontFamily:'Outfit', fontWeight:'900', color:'white', fontSize:'77px'}}>120 +</h3>
            <p style={{fontFamily:'Outfit', fontWeight:'400', color:'white', fontSize:'32px',textAlign:'center',lineHeight:'40.32px'}}>Countries<br/> Covered</p>
        </div>
        <div>
            <h3 style={{fontFamily:'Outfit', fontWeight:'900', color:'white', fontSize:'77px'}}>200 +</h3>
            <p style={{fontFamily:'Outfit', fontWeight:'400', color:'white', fontSize:'32px',textAlign:'center',lineHeight:'40.32px'}}>Seasoned<br/> Analysts</p>
        </div>
        <div>
            <h3 style={{fontFamily:'Outfit', fontWeight:'900', color:'white', fontSize:'77px'}}>24x7</h3>
            <p style={{fontFamily:'Outfit', fontWeight:'400', color:'white', fontSize:'32px',textAlign:'center',lineHeight:'40.32px'}}>Support</p>
        </div>
    </div>

   {/* View More Button */}

 </div>
  )
}
export default HomePoster;
