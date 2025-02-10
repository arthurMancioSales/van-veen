"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface carouselProps extends React.HTMLAttributes<HTMLDivElement> {
    pageCount: number;
    paginationPosition: "top" | "bottom" | "above" | "bellow";
    navigationPosition: "top" | "bottom" | "above" | "bellow";
}

export default function Carousel({
    children,
    pageCount,
    className,
    ...props
}: carouselProps) {
    const [carouselIndex, setCarouselIndex] = useState(0);

    function renderPagination() {
        const pages = [];
        for (let i = 0; i < pageCount; i++) {
            pages.push(
                <div
                    className={`rounded-full w-3 h-3 cursor-pointer ${
                        carouselIndex === i ? "bg-primary" : "bg-secondary"
                    }`}
                    key={i}
                    id={`page${i}`}
                    onClick={() => scrollToPage(i)}
                ></div>,
            );
        }

        return pages;
    }

    function previousSlide() {
        setCarouselIndex((carouselIndex) =>
            carouselIndex === 0 ? pageCount - 1 : carouselIndex - 1,
        );
    }

    function nextSlide() {
        setCarouselIndex((carouselIndex) =>
            carouselIndex === pageCount - 1 ? 0 : carouselIndex + 1,
        );
    }

    function scrollToPage(pageNumber: number) {
        setCarouselIndex(pageNumber);
    }

    return (
        <div
            id="carouselRoot"
            className="flex flex-col items-center justify-center gap-4 relative h-full w-full"
            data-carousel
            {...props}
        >
            <div
                className={cn("w-80 overflow-hidden", className)}
                id="carouselDisplay"
            >
                <div
                    className="flex w-full h-full transition-transform duration-500 ease-out"
                    id="carouselSlider"
                    style={{
                        transform: `translateX(${carouselIndex * -100}%)`,
                    }}
                    data-carousel-slide
                >
                    {children}
                </div>
            </div>

            <div className="items-center flex gap-2 py-2" id="carouselPagination">
                <div
                    className="items-center flex gap-2 py-2"
                    data-carousel-pagination
                >
                    {renderPagination()}
                </div>
            </div>

            <div
                className="items-center flex gap-2 py-2 absolute"
                id="carouselPagination"
            >
                <ChevronLeft
                    id="carouselPreviousButton"
                    onClick={previousSlide}
                    size={30}
                    className="w-fit rounded-full pointer-events-auto cursor-pointer"
                    data-previous-button
                >
                    previous
                </ChevronLeft>
                <div
                    className="items-center flex gap-2 py-2"
                    data-carousel-pagination
                >
                    {renderPagination()}
                </div>
                <ChevronRight
                    id="carouselNextButton"
                    onClick={nextSlide}
                    size={30}
                    className="pointer-events-auto cursor-pointer"
                    data-next-button
                >
                    next
                </ChevronRight>
            </div>
        </div>
    );
}
