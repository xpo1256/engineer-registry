const React = require('react')

function Index (props){
    const engineers = props.engineers
    return (
        <div>
            <h1>Index Page</h1>
            <ul>
                {
                   engineers.map((engineer) => {
                    return (<li>This is the <a href={`/engineers/${engineer.id}`}>{engineer.name}</a> of the specialty is {engineer.specialty} with {engineer.yearsExperience} years of experience</li>)
                   }) 
                }
            </ul>
            <a href='/engineers/new'>enter an engineer</a>
        </div>
    )
}

module.exports = Index