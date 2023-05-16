import "./WakaProjects.scss";

function WakaProjects({ wakaProjects }) {
    console.log(wakaProjects);
         

    return (
        <section className="projects">
            <h1 className="projects__title">Recent Projects This Week</h1>
            {wakaProjects.map((item, index) => (
                <div key={index} className="projects__item">
                    <p className="projects__name">{item.name}</p>
                    <p className="projects__time">{item.text}</p>
                </div>
            ))}; 
        </section>
    )
}

export default WakaProjects;