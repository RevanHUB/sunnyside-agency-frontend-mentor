import '../../styles/section.css'

export const SectionRight = (props) => {
    return(
        <section id={props.id}>
            <img src={props.img_path} alt={props.img_path}/>
            <div>
                <h1>{props.title}</h1>
                <span>{props.desc}</span>
                <button>Learn More</button>
            </div>
        </section>
    )
}
export default SectionRight;