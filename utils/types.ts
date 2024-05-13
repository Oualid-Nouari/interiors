import { StaticImageData } from "next/image";

export type testimonial = {
    clientName: string;
    rating: number;
    message: string;
}

export type Service = {
    name: string,
    picture: StaticImageData
}

export type Portfolio = {
    number: string,
    picture: StaticImageData
}