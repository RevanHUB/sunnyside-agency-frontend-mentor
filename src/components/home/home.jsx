import '../../styles/home.css';

export const Home = () => {
    return(
        <div className="home__">
            <h1>We are creatives</h1>
            <a href="#section__1">
                <svg 
                width="36" 
                height="114" 
                xmlns="http://www.w3.org/2000/svg">
                    <g 
                        stroke="#FFF" 
                        strokeWidth="6" 
                        fill="none" 
                        fillRule="evenodd" 
                        strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 3v100M3 95.484l15 15 15-15"/>
                    </g>
                </svg>
            </a>
        </div>
    ) 
}
export default Home;