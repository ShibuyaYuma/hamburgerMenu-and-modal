import React, { useState } from "react";


const Main = () => {

    const [isActiveModal, setIsActiveModal] = useState(false);

    const openModal = () => {
        setIsActiveModal(true);
    }

    const closeModal = () => {
        setIsActiveModal(false);
    }

    return (
        <div className="main">
            <h1>こんにちは</h1>
            <button className="modalOpen" type="button" onClick={openModal}>モーダルを開く</button>
            <div className={`modal ${isActiveModal ? 'openModal' : ''}`} onClick={closeModal}>
                <div className="modalContent" onClick={e => e.stopPropagation()}>
                    <div className="modalHeader">
                        <h1>モーダルウィンドウ</h1>
                        <span className="modalClose" onClick={closeModal}>&times;</span>
                    </div>
                    <div className="modalBody">
                        <p>モーダルテキスト</p>
                        <p>テキストテキストテキスト</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;