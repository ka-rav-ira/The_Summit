import React from 'react'
import { Drawer , List , ListItem } from '@mui/material'
import { scroller } from 'react-scroll'

const SideDrawer=(props)=> {
    const links = [
        {where:'featured',value:'To Top'},
        {where:'venueInfo', value:'VenueInfo'},
        {where:'pricing', value:'Pricing'},
        {where:'highlights', value:'Highlights'},
        {where:'location', value:'Location'},
    ]

    const scrollToElement = (element) => {
      scroller.scrollTo(element,{
        duration:1500,
        delay:100,
        smooth:true,
        offset:-150
      })
    } 
    

    const renderItem = (item)=> {
        return( <ListItem onClick={()=>scrollToElement(item.where)} key={item.value}>
        {item.value}
         </ListItem>)    
    }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={()=> props.onClose(false)}
    >
     <List component="nav">
        {links.map((item)=>renderItem(item))}
     </List>
    </Drawer>
  )
}

export default SideDrawer;
