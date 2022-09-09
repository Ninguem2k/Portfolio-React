import "./style.css";
import linkedinIcon from "../../acennts/img/icons/linkedinIcon.svg";
import githubIcon from "../../acennts/img/icons/githubIcon.svg";
import emailIcon from "../../acennts/img/icons/emailIcon.svg";
import phoneIcon from "../../acennts/img/icons/phoneIcon.svg";

function Footer() {
  return (
    <footer id="network">
      <div className="footerContainer">
        <div className="networks">
          <a
            href="https://www.linkedin.com/in/cássio-gabriel-lemos-vieira-b24771246"
            // target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn ícone"
            />
          </a>
          <a
            href="https://github.com/Ninguem2k"
            // target="_blank"
          >
            <img
              src={githubIcon}
              alt="Github ícone"
            />
          </a>
          <a
            href="mailto:cassioriachinho@gmail.com"
            // target="_blank"
          >
            <img
              src={emailIcon}
              alt="Email ícone"
            />
          </a>
          <a
            href="https://wa.me/5538999256330"
            // target="_blank"
          >
            <img
              src={phoneIcon}
              alt="Phone ícone"
            />
          </a>
        </div>
        <small>
          &copy; Copyright&nbsp;
          <a href="https://github.com/NINGUEM2K">
            Cássio Gabriel/
          </a>
          <a href="https://github.com/NikisGabriel">
            Gabriel Marques
          </a>
        </small>
      </div>
    </footer>
  );
}
export default Footer;
