export default function Contact() {
    const img="mr-whiskerson.png"
    const name="Mr. Whiskerson"
    const phone="(212) 555-1234"
    const email="mr.whiskaz@catnap.meow"
    return (
            <article className="contact-card">
                <img 
                    src={img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>
    )
}