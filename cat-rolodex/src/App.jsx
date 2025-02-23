/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

import Contact from './components/Contact'

function App() {
    return (
        <div className="contacts">
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <article className="contact-card">
                <img 
                    src="fluffykins.png"
                    alt="Photo of Fluffykins"
                />
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img 
                        src="phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img 
                        src="mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>fluff@me.com</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src="felix.png"
                    alt="Photo of Felix"
                />
                <h3>Felix</h3>
                <div className="info-group">
                    <img 
                        src="phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img 
                        src="mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>thecat@hotmail.com</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src="pumpkin.png"
                    alt="Photo of Pumpkin"
                />
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img 
                        src="phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img 
                        src="mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </article>
            
        </div>
    )
}

export default App