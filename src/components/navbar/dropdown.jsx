import '../../styles/dropdown.css';
import { data } from './config'
export const Dropdown = (props) => {
    const buttons = data.buttons;
    return (
        <div className='dropdown' style={{ width: (props.isMobile === true)? "90vw": "0vw", display: (props.dropdown === true)? "flex" : "none"}}>{props.isMobile}
        {
            buttons.map((button) => <a key={button} href="">{button}</a>)
        }
            <div className="polygon" style={{ width: (props.isMobile === true)? "30px": "0px", display: (props.dropdown === true)? "flex" : "none"}}></div>
        </div>
    )

}
export default Dropdown;