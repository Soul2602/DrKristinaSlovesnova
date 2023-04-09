import { ReactComponent as CallImage } from '../assets/contacts-section/call.svg';
import { ReactComponent as EmailImage } from '../assets/contacts-section/stamp.svg';
import { ReactComponent as FacebookImage } from '../assets/contacts-section/facebook.svg';
import { ReactComponent as SkypeImage } from '../assets/contacts-section/skype.svg';
import { ReactComponent as InstagramImage } from '../assets/contacts-section/instagram.svg';

function ContactsSection() {
  const phoneNumber = '+380660106601';
  const email = 'slovesnovakr@gmail.com';

  const facebookTitle = 'KRISTINA SLOVESNOVA';
  const facebookLink = 'https://www.facebook.com/kristina.slovesnova/';

  const skypeLink = 'live:.cid.c02f245541f377d9';

  const InstagramTitle = '@slovesnova';
  const InstagramLink = 'https://www.instagram.com/slovesnova/';

  return (
    <section className="section contacts-section wrapper" id="contacts-section">
      {/* <div className="shadow-top"></div> */}
      <div className="content">
        <h2 className="title">Контакты</h2>
        <div className="contacts">
          <a href={`mailto:${email}`} className="contact">
            <EmailImage className='icon' />
            <span className='text'>{email}</span>
          </a>
          <a href={`tel:${phoneNumber}`} className="contact">
            <CallImage className='icon' />
            <span className='text'>{phoneNumber}</span>
          </a>
          <a href={facebookLink} className="contact">
            <FacebookImage className='icon' />
            <span className='text'>{facebookTitle}</span>
          </a>
          <a href={`skype:${skypeLink}?chat`} className="contact">
            <SkypeImage className='icon' />
            <span className='text'>{skypeLink}</span>
          </a>
          <a href={InstagramLink} className="contact">
            <InstagramImage className='icon' />
            <span className='text'>{InstagramTitle}</span>
          </a>
        </div>
      </div>
      <div className="shadow-bottom"></div>
    </section>
  )
}

export default ContactsSection;
