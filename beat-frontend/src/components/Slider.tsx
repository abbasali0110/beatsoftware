import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * A responsive slider component that shows a touch-friendly slider on mobile
 * and disables itself to allow a standard grid layout on larger screens.
 */
export default function Slider({ children, className }: SliderProps) {
    return (
        <Swiper
            modules={[Pagination]}
            className={className}
            // --- Mobile-first settings (slider enabled) ---
            enabled={true}
            slidesPerView={1.2}
            spaceBetween={16}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            // --- Breakpoints for larger screens (slider disabled) ---
            breakpoints={{
                // 768px and up (md)
                768: {
                    enabled: false, // Disable swiper, grid layout will take over
                    slidesPerView: 3,
                    spaceBetween: 0, // Reset spaceBetween for grid
                },
            }}
        >
            {React.Children.map(children, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
}