import { NavLink } from "react-router-dom";

function ErrorContent({ img, alt, txt, homeLink }) {
    return (
        <>
            <img src={img} alt={alt} />
            <p>{txt}</p>
            <NavLink to="/" className="errorLineHomeLink">{homeLink}</NavLink>
        </>

    )

}
export default ErrorContent