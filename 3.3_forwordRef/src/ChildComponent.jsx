import React,{forwordRef, useRef, useImperativeHandle} from 'react'

function ChildComponent(props, ref) {

    // example 2 
    const childRef= useRef();

    const handleChildButtonClick = () => {
        console.log("chld button clicked");
    };

    useImperativeHandle(ref, () => ({
        handleChildButtonClick,
    }));
  return (
    <>
    {/* example 1 */}
   <input type="text" ref={ref} />

   {/* /example 2 */}
   <button ref={childRef}>Click Me</button>
   </>
  )
}

export default forwordRef(ChildComponent);