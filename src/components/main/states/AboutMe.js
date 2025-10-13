import '../../../styles/mainstates/aboutme.scss'
import headshot from '../../../assets/headshot.svg'

function AboutMe(){
    return (
        <div id="about-me-container">
            <img src={headshot} alt="Jon Zavialov" />
            <div id="about-me-text">
                <h1>ABOUT ME</h1>
                <p>
                    I'm currently a student at Penn State University studying 
                    Computer Science, Math, and Engineering Leadership Development. 
                    I started coding when I was in high school, finding a passion 
                    for web development when I made my first big project, my Windows 
                    98 emulator.
                </p>
                <p>
                    I've recently started exploring the world of entrepreneurship, actively 
                    engaging in various startup initiatives, contributing my skills and 
                    insights to innovative projects. I am also leading my own startup called 
                    Locatia, where I honed my leadership abilities and navigated the dynamic 
                    landscape of bringing ideas to life. These experiences have not only 
                    broadened my technical expertise but have also instilled in me a deep 
                    appreciation for the intersection of technology and business, driving my 
                    commitment to creating impactful solutions in the digital realm.
                </p>
                <p>
                    Outside of coding, I love being outside, hiking, rock climbing, and capturing 
                    memories with film photography. I also love traveling to big cities such as New
                    York City and Philadelphia, I find the energy of these places to be very inspiring.
                    
                </p>
            </div>
        </div>
    )
}

export default AboutMe
