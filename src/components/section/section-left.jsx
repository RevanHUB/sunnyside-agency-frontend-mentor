import '../../styles/section.css'

export const SectionLeft = (props) => {
    return(
        <section>
            <div id={props.id}>
                <h1>{props.title}</h1>
                <span>{props.desc}</span>
                <button>Learn More</button>
            </div>
            <img src={props.img_path} alt={props.img_path}/>
        </section>
    )
}
export default SectionLeft;