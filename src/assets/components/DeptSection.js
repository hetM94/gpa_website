import React from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

// Import your icons here
import facebookIcon from '../../assets/images/dept-icons/facebook.png';
import instagramIcon from '../../assets/images/dept-icons/instagram.png';
import whatsappIcon from '../../assets/images/dept-icons/whatsapp.png';
import linkedinIcon from '../../assets/images/dept-icons/linkedin.png';

const CARDS = 4; // Number of cards/icons
const MAX_VISIBILITY = 2;

const icons = [facebookIcon, instagramIcon, whatsappIcon, linkedinIcon];

const Card = ({ title, content, icon }) => (
    <div className='dept-card'>
        <h2>{title}</h2>
        <img src={icon} alt={`Icon for ${title}`} className={"dept-icon"}/>
    </div>
);

const Carousel = ({ children }) => {
    const [active, setActive] = React.useState(2);
    const count = React.Children.count(children);

    return (
        <div className='dept-carousel'>
            {active > 0 && (
                <button className='dept-nav left' onClick={() => setActive(i => i - 1)}>
                    <TiChevronLeftOutline />
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    key={i}
                    className='dept-card-container'
                    style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        pointerEvents: active === i ? 'auto' : 'none',
                        opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                    }}
                >
                    {React.cloneElement(child, { icon: icons[i] })}
                </div>
            ))}
            {active < count - 1 && (
                <button className='dept-nav right' onClick={() => setActive(i => i + 1)}>
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
};

const DeptSection = () => (
    <section id="department-section" className={"d-lg-none"}>
        <Carousel>
            {[...new Array(CARDS)].map((_, i) => (
                <Card
                    key={i}
                    title={`Card ${i + 1}`}
                    icon={icons[i]} // Pass the corresponding icon from the imported array
                />
            ))}
        </Carousel>
    </section>
);

export default DeptSection;