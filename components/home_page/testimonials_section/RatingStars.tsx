import React from 'react'
import FilledStar from "../../../public/star filled.png";
import Star from "../../../public/star.png";
import Image from 'next/image';

const RatingStars = ({rating}: {rating: number}) => {
    const stars = [];
    if(rating !== 0) {
        for(let i= 1; i<= rating; i++ ) {
            stars.push(<Image src={FilledStar} alt='' className='w-4 h-4' />)
        }
    }
  return (
    <div className='flex items-center gap-2 w-fit'>
        {stars}
        {[...Array(5-rating)].map((item, index) => {
            return <Image key={index} src={Star} alt='' className='w-4 h-4' />
        })}
    </div>
  )
}

export default RatingStars
