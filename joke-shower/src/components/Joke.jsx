export default function Joke({setup, punchline}) {
    return (
        <div className="joke">
            <p className="setup">{setup}</p>
            <p className="punchline">{punchline}</p>
        </div>
    )
}