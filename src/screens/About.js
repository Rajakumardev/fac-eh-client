import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            <div className="mx-4 p-4 font-sans text-gray-800 font-bold rounded-lg flex flex-col justify-start bg-white">
                <h2><span className="py-1 px-4 rounded-lg bg-gray-500 text-white">About</span></h2>
                <div className="w-full my-4">
                    <p>
                        Thanks for using fac-eh!
                        {/* later */}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default About
