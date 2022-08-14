import '../../styles/section.css'

export const Double = (props) => {
    return(
        <section id="double">
        <div >
            <h1>{props.title_l}</h1>
            <span>{props.desc_l}</span>
            <img src={props.img_path_l} alt="" />
        </div>
        <div>
            <h1>{props.title_r}</h1>
            <span>{props.desc_r}</span>
            <img src={props.img_path_r} alt="" />
        </div>
    </section>  
    )  
}
export default Double;