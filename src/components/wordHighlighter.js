import { useRef } from "react";
import { parseTargetInput } from '../../lib/wordSearchHandler'

export default function WordHighlighter({ rawTargets }) {
    const canvasRef = useRef(null)
    
    const targetsArray = parseTargetInput(rawTargets)
    console.log(targetsArray)
    return( 
        <canvas ref={canvasRef}/>
    )
}