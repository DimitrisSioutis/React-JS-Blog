import YouTube from 'react-youtube-embed'
import '../styles/ContactUs.css'
import { IconClock, IconPhone, IconMail} from '@tabler/icons';
function ContactUs() {

  return (
    <>
        <div className="page-title">ΕΠΙΚΟΙΝΩΝΙΑ</div>
        <div className="contact-wrapper">
            <div className="left-section">
                <div className="contact-info">
                    <p><IconClock className='i'/>  Ώρες Λειτουργίας : Δευ-Τετ-Παρ : 18:00-22:00</p>
                    <p><IconPhone className='i'/> Τηλέφωνο Επικοινωνίας : <a href="tel:693 655 8455">693 655 8455</a></p>
                    <p><IconMail className='i'/> E-mail : <a href = "mailto: abc@example.com">dianaacademy1974@gmail.com</a></p>
                </div>
                <iframe className='map' title='map' width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%CE%92%20%CE%97%CE%9B%CE%99%CE%9F%CE%A5%CE%A0%CE%9F%CE%9B%CE%97%CE%A3&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                
            </div>
            <div className="widgets">
                <p className="socials-p">Βρείτε μας στα Social Media:</p>
                <iframe title='facebook' className='facebook' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDIANA-Academy-%25CE%2591%25CE%25BA%25CE%25B1%25CE%25B4%25CE%25B7%25CE%25BC%25CE%25AF%25CE%25B1-%25CE%25A0%25CE%25BF%25CE%25B4%25CE%25BF%25CF%2583%25CF%2586%25CE%25B1%25CE%25AF%25CF%2581%25CE%25BF%25CF%2585-%25CE%2594%25CE%2599%25CE%2591%25CE%259D%25CE%2591-%25CE%2597%25CE%25BB%25CE%25B9%25CE%25BF%25CF%258D%25CF%2580%25CE%25BF%25CE%25BB%25CE%25B7%25CF%2582-244000022464895&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="150" style={{border:'none',overflow: 'hidden'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe title='instagram' className='instagram'src="https://www.instagram.com/p/Cg6rzLEsW0k/" width="300" height="150" frameBorder="0" scrolling="no" allowTransparency="true"></iframe>
            
            </div>
        </div>
    </>

  )
}

export default ContactUs
