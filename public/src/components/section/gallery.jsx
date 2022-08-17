import '../../styles/gallery.css'

export const Gallery = (props) => {
    const carrousel = props.gallery;
    return (
        <section id={props.id}>
            {carrousel.map((img) =>  <img key={img} src={img} alt={img}/> )}
        </section>
    )
}

export default Gallery;
