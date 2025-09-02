const React = require('react')

function Show(props){
    return(
        <div>
            <h1>{props.engineer.name}</h1>
            <a href='/engineers'>Go back to Index Page</a>
            <p>
                {props.engineer.name} is {props.engineer.specialty} with {props.engineer.yearsExperience} years of experience and {props.engineer.available? 'available': 'not available'}
            </p>
              <form action={`/engineers/${props.engineer._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.engineer.name}`}/>
            </form>
            <div>
            <a href={`/engineers/${props.engineer._id}/edit`}><button>{`Edit ${props.engineer.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show