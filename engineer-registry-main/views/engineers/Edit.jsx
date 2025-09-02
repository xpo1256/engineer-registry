const React = require('react')

function Edit (props) {
    const { name, _id, available, specialty, yearsExperience} = props.engineer

    return(
        <div engineer={props.engineer}>
            <h1>{name} Edit Page</h1>
            <a href='/engineers'>Go back to Index Page</a>
            <form action={`/engineers/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                specialty: <input type="text" name="specialty" defaultValue={specialty} /><br/>
                Years of Experience: <input type="number" name="yearsExperience" defaultValue={yearsExperience} /><br/>
                Available: {available? <input type="checkbox" name="available" defaultChecked />: <input type='checkbox' name="available"/>}<br/>
                <input type="submit" value="Update Engineer" />
            </form>
        </div>
    )
}

module.exports = Edit