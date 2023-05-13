import Goals from "../components/Goals/Goals";

function GoalsPage({ goalsList }) {
    return (
        <div>
           <Goals goalsList={goalsList} />
        </div>
    )
}

export default GoalsPage;