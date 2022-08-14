import '../../styles/testimonials.css'

export const Testimonials = (props) => {
    const testimonials = props.testimonials;
    return(
        <section id={props.id}>
            <h1>Client Testimonials</h1>
        <div >
            {
                testimonials.map((card) => 
                <div key={card.id} id={card.id} className="card">
                    <img src={card.img}/>
                    <span>{card.desc}</span>
                    <h1>{card.name}</h1>
                    <small>{card.pos}</small>
                </div> )
            }
        </div>
    </section>  
    )  
}
export default Testimonials;