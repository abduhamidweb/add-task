import React , {useRef} from 'react';

const index = () => {
    const card = useRef()
    return (
        <>
            <div className="card p-5 shadow" ref={card} onClick={() => {
                card.current.classList.toggle("bg-danger");
                console.log(card.current)
            }}>
                <h1>Team start</h1>
            </div>
        </>
    );
};

export default index;