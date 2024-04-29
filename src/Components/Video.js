import React from 'react'

export const Video = () => {
    return (
        <div>
            <iframe className='aspect-video w-full h-96 md:h-screen '
                src={`https://www.youtube.com/embed/${trailerId}?si=Rg9Jh94GP1xzUgxY&autoplay=1&mute=1`}
                title="YouTube video player"
                allowFullScreen>
            </iframe>
        </div>
    )
}
