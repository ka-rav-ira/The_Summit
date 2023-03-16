import React , {useState , useEffect} from 'react'
import { Fade , Slide} from 'react-awesome-reveal';
import MyButton from '../utils/button';



const Discount = () =>{
    const end = 30 ; 
    const [start,setStart] = useState(0);

    const porcentage = () => {
        if(start<end){
            setStart (prevCount=>prevCount+1)
        }
    }

    useEffect(()=>{
        if(start>0 && start<30){
          setTimeout(()=>{
           setStart (prevCount=>prevCount+1)
          },30)
        }
    },[start])

  return (
    <div className='center_wrapper'>
        <div className='discount_wrapper'>
            <Fade 
            onVisibilityChange={ (inView)=> {
                if(inView){
                    porcentage()
                }
             }}>
                <div className='discount_porcentage'>
                    <span>{start}%</span>
                    <span>OFF</span>
                </div>
            </Fade>

            <Slide right>
                <div className='discount_description'>
                    <h3>Purchase tickets before they runs out</h3>
                    <p>
                    With such an impressive lineup of speakers and an exciting program, tickets for this Tech Summit are in high demand. Don't wait until it's too late to secure your spot! Purchase your tickets now to avoid missing out on this unparalleled opportunity to hear from Tim Cook, Mark Zuckerberg, and Elon Musk, and gain invaluable insights into the future of technology. Act fast and secure your tickets today before they run out!
                    </p>
                    <MyButton
                    text = "Purchase Tickets"
                    link = "http://google.com"
                    size= "medium"
                    style={{
                        background:'#ffa800',
                        color:'#ffffff'
                    }}
                     iconTicket ={true}
                    />
                </div>
            </Slide>
        </div>
     
    </div>
  )
}

export default Discount;
