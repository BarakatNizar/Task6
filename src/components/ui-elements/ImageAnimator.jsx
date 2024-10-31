import React, { useEffect, useRef } from 'react'

const ImageAnimator = ({imgs , className}) => {
    if (className==undefined)
        className="";
    const refImg1=useRef();
    const refImg2=useRef();
    let index=-1;
    let bugTimeoutSwapping=-1;

    function nextImage(){
        var nextImage= (index+1)%imgs.length;
        refImg2.current.src= imgs[nextImage];

        refImg1.current.style.opacity=0;
        refImg2.current.style.opacity=1;

        //Swapping images
       bugTimeoutSwapping=setTimeout(()=>{
            index=nextImage;
            const tmp=refImg1.current.src;
            refImg1.current.src=refImg2.current.src;
            refImg1.current.style.opacity=1;
            refImg2.current.style.opacity=0;            
        },1000);

    }
    
    useEffect(()=>{
        nextImage();        
        let x=setInterval(nextImage, 5000); // Change image every 10 seconds
        return ()=>{
            clearInterval(x);
            clearTimeout(bugTimeoutSwapping);
        }
    },[])

    return (
            <div className='bg-black relative overflow-hidden w-[100%] h-[100%]'>
                <img alt=""  ref={refImg1} width={1000} height={100} className={`AnimateImageOpacity object-cover opacity-100 `+className} />
                <img alt=""  ref={refImg2} className={`AnimateImageOpacity object-cover opacity-0 `+className } />
            </div>
  )
}

export default ImageAnimator