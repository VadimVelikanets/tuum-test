import React from 'react';

const Contacts = () => {
    return (
        <div className="mr-12 pt-4 md:pt-32">
            <div>
                Media enquiries:
            </div>
            <div>
                <a className="text-neutral-500"
                   href="mailto:press@tuumplatform.com"
                >press@tuumplatform.com</a>
            </div>
            <div className="mt-6">
                Career questions:
            </div>
            <div>
                <a className="text-neutral-500"
                   href="mailto:careers@tuumplatform.com">
                    careers@tuumplatform.com
                </a>
            </div>
        </div>
    );
};

export default Contacts;