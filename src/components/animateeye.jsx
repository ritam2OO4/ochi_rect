import React, { useEffect, useState, useRef } from 'react';

export default function AnimateEye() {
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [rotation, setRotation] = useState(0);
    const eyeRadius = 56; // Radius of the eye container (half of the width/height)
    const irisRadius = 16; // Radius of the iris (half of the width/height)
    const containerRef = useRef(null); // Ref for the container div

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Check if the mouse is within the bounds of the container div
            if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
                const maxOffset = eyeRadius - irisRadius; // Maximum offset for the iris

                let deltaX = mouseX - (rect.left + rect.width / 2);
                let deltaY = mouseY - (rect.top + rect.height / 2);

                let angle = Math.atan2(deltaY, deltaX);
                let distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), maxOffset);

                // Calculate the offset position for the iris
                let offsetX = distance * Math.cos(angle);
                let offsetY = distance * Math.sin(angle);

                setOffsetX(offsetX);
                setOffsetY(offsetY);

                // Calculate the rotation angle for the iris and pupil
                let rotation = angle * (180 / Math.PI) - 90;
                setRotation(rotation);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [eyeRadius, irisRadius]);

    return (
        
        <div className='overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed='-.2' ref={containerRef} className='relative w-full h-screen bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-16'>
                {/* Eye Container */}
                <div className='relative w-56 h-56 rounded-full bg-white flex items-center justify-center'>
                    {/* Iris */}
                    <div
                        style={{
                            transform: `translate(${offsetX}px, ${offsetY}px)`
                        }}
                        className='relative w-32 h-32 rounded-full bg-black flex items-center justify-center'
                    >
                        {/* Pupil */}
                        <div
                            style={{ 
                                transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`
                            }}
                            className="w-8 h-8 bg-zinc-100 rounded-full"
                        ></div>
                    </div>
                    {/* Fixed Text */}
                    <div className="absolute text-white font-semibold text-2xl">
                        Play
                    </div>
                </div>
                {/* Second Eye Container */}
                <div className='relative w-56 h-56 rounded-full bg-white flex items-center justify-center'>
                    {/* Iris */}
                    <div
                        style={{
                            transform: `translate(${offsetX}px, ${offsetY}px)`
                        }}
                        className='relative w-32 h-32 rounded-full bg-black flex items-center justify-center'
                    >
                        {/* Pupil */}
                        <div
                            style={{ 
                                transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`
                            }}
                            className="w-8 h-8 bg-zinc-100 rounded-full"
                        ></div>
                    </div>
                    {/* Fixed Text */}
                    <div className="absolute text-white font-semibold text-2xl">
                        Play
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
