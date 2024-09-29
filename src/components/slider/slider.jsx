import prev_btn from '../../images/prev_slider.png'
import next_btn from '../../images/next_slider.png'
import d_line_sl from '../../images/d_line_slider.png'
import { useEffect, useState } from 'react'
import './slider.scss'



export default function slider({ count, prevCount, nextSl, prevSl }) {
    const [isNum, setIsNum] = useState(true)


    useEffect(() => {
        if (count !== 1 && prevCount !== 0) {
            setIsNum(false)
        }else if(prevCount == 0){
            setIsNum(true)
        }
    }, [count, prevCount])

    useEffect(() => {
        console.log(isNum);

    }, [isNum])


    return (
        <div id='slider'>
            <button onClick={() => prevSl()} className='btn_slider' id='prev_btn'><img src={prev_btn} alt="d_line_sl" /> <div className="g_line_sl"></div></button>
            <div id='status_slider'>
                {isNum ? (
                    <div className='status_box' id='sl_1_stage'>{count}</div>
                ) : (
                    <div className='status_box' id='sl_2_stage'>
                        <span className='st_sl_text_content' id='st_sl_1'>0{count}</span>
                        <span className='st_sl_text_content' id='st_sl_2'>0{prevCount}</span>
                    </div>
                )}

            </div>
            <button onClick={() => nextSl()} className='btn_slider' id='next_btn'> <div className="g_line_sl"></div> <img src={next_btn} alt="d_line_sl" /></button>
        </div>
    )
}
