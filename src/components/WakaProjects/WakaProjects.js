import "./WakaProjects.scss";

function WakaProjects({ wakaProjects }) {
    console.log(wakaProjects);
         

    return (
        <section className="projects">
            <h1 className="projects__title">Recent Projects</h1>
            {wakaProjects.map((item, index) => (
                <div key={index} className="projects__item">
                    <p className="projects__name">{item.name}</p>
                    <p className="projects__time"><span className="projects__time--text">{item.text}</span>spent coding!</p>
                </div>
            ))}; 
        </section>
    )
}

export default WakaProjects;