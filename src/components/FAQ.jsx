import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveAccordion(index === activeAccordion ? null : index);
    };

    return (
        <>
        <h1 className='my-5' align='center' style={{fontSize:'4vw', fontWeight :'700'}}>FAQ's</h1>
        <div className='container'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {/* Accordion Item 1 */}
                <div className="accordion-item my-4">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className={`accordion-button ${activeAccordion === 0 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleAccordionClick(0)} 
                        >
                            Why use NB Rider's website?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className={`accordion-collapse collapse ${activeAccordion === 0 ? 'show' : ''}`}
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={{fontSize:'1.3vw'}}>
                            NB Rider provides detailed information about different types of vehicles, including cars, trucks, SUVs, motorcycles, and more. Consumers can browse through specifications, features, pricing, and compare different models to make informed purchasing decisions.
                        </div>
                    </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item my-4">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className={`accordion-button ${activeAccordion === 1 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleAccordionClick(1)}
                        >
                            Do videos and description are available NB Rider website?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            Yes, all these things come with NB Rider website along with our technical support.
                        </div>
                    </div>
                </div>
                

                <div className="accordion-item my-4">
                    <h2 className="accordion-header" id="flush-headingfour">
                        <button
                            className={`accordion-button ${activeAccordion === 2 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleAccordionClick(2)}
                        >
                            Is NB Rider applicable to all requirements?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className={`accordion-collapse collapse ${activeAccordion === 2 ? 'show' : ''}`}
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            Yes, it mostly focuses on fundamental requirements such as four-wheelers with Sedan's and SUV's along with Two-wheelers.
                        </div>
                    </div>
                </div>

                <div className="accordion-item my-4">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button
                            className={`accordion-button ${activeAccordion === 3 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleAccordionClick(3)}
                        >
                            Does NB Rider impose any fees for the facilities they provide?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseFour"
                        className={`accordion-collapse collapse ${activeAccordion === 3 ? 'show' : ''}`}
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            No, it is absolutely free of cost alongwith our technical support.
                        </div>
                    </div>
                </div>

                <div className="accordion-item my-4">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button
                            className={`accordion-button ${activeAccordion === 4 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleAccordionClick(4)}
                        >
                            Are there any Notesyn mobile apps available?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseFive"
                        className={`accordion-collapse collapse ${activeAccordion === 4 ? 'show' : ''}`}
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            No, at present we donot have any mobile but soon it will be developed. Otherwise our website works properly in mobile devices also.
                        </div>
                    </div>
                </div>


            </div>
        </div>
        </>
    );
};

export default FAQ;
