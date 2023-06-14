import { GrLinkedinOption } from "react-icons/gr"
import { FiGithub } from "react-icons/fi"
import { MdOutlineMail } from "react-icons/md"
import './Footer.scss';
import Logo from '../images/RankoLogo.png'

const Footer = () => {
    const copyToClipboard = () => {
        const email = 'koturic_ranko@gmail.com';
        navigator.clipboard.writeText(email);
        alert('E-mail copied to clipboard!');
    };
    return (
        <footer>
            <div className="underline" />
            <a href="#" className="footer_logo">
                <img src={Logo} className="logo" alt="Programmers logo" />
            </a>
            {/* <ul className="permalinks">
                <li><a href="#" />Home</li>
                <li><a href="#" />Projects</li>
                <li><a href="#" />About</li>
            </ul> */}

            <div className="footer_socials">
                <a target="_blank" href="https://www.linkedin.com/in/ranko-koturi%C4%87-8853a5212/"><GrLinkedinOption /></a>
                <a target="_blank" href="https://github.com/Ranko1996?tab=repositories"><FiGithub /></a>
            </div>

            <div >
                <div className="mail_info">

                    <div className="icon_mail"><MdOutlineMail /></div>
                </div>
                <div className="mail_info" onClick={copyToClipboard}>
                    <p>koturic_ranko@gmail.com</p>
                </div>
            </div>

            <div className="footer_copyright">
                <small>
                    &copy; Ranko Koturić
                </small>
            </div>
        </footer>
    )
}

export default Footer