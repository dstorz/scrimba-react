export default function Joke({setup, punchline}) {
    return (
        <div className="joke">
            {setup && <p className="setup">{setup}</p>}
            <p className="punchline">{punchline}</p>
        </div>
    )
}