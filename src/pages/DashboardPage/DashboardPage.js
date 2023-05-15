import "./DashboardPage.scss";
import WakaCodingActivity from "../../components/WakaCodingActivity/WakaCodingActivity";
import WakaLanguages from "../../components/WakaLanguages/WakaLanguages";

function DashboardPage({ wakaProjects, wakaCodingActivity, wakaLanguages }) {
    return (
        <div className="dashboard">
            <div className="dashboard__container">
                <WakaCodingActivity wakaCodingActivity={wakaCodingActivity} />
                <WakaLanguages wakaLanguages={wakaLanguages} />
            </div>
        </div>
    )
}

export default DashboardPage;