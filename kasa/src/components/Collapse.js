import React from "react";

function Collapse({ title, content }) {
    return (
        <>
            <article className="collapseContent">
                <div className="collapseTitle">
                    <h2>{title}</h2>
                    <div className="rollDown">
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                </div>
                <div className="descrip">
                    <p>
                        {"Lorem ipsum dolor sit amet. Rem suscipit veritatis eos eius aperiam sit similique esse ut error consequuntur et numquam rerum qui atque impedit! Ea labore ipsam aut Quis eveniet ut amet rerum non dolor enim ea officia voluptatem qui ipsa ipsum aut harum tenetur. Sed omnis accusantium et ratione ullam in voluptas accusantium est suscipit nesciunt. Ea atque quam et voluptatem quisquam aut voluptatibus fugit. Sit culpa omnis et minima sunt aut totam aperiam et nesciunt debitis aut cupiditate dolorem. Aut minus fugit sit aliquid suscipit est dignissimos aliquid. Aut consequatur inventore non quia iure est aliquam officia sit sint consequatur qui temporibus maxime. Et amet consequuntur non voluptas aliquam et voluptatem harum. Et porro quod eum ratione dolore ut aperiam quis ex Quis voluptas aut incidunt doloremque"}
                    </p>
                </div>
            </article>
        </>
    )
}

export default Collapse