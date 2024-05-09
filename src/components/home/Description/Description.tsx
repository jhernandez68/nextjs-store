//priority={false} desactiva el LazyLoading de la imagen.
//quality es un porcentaje, por defecto es 75.
/**priority || quality son opcionales */

"use client"

import { useState } from 'react';
import styles from './Description.module.sass';
import Image from 'next/image';
import classNames from 'classnames/bind';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABZAFkDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAwQFBgIBAAf/xAAjEAABBAMAAgMBAQEAAAAAAAAAAQMEEQIhMQUSIkFhEzIU/8QAGgEAAwEBAQEAAAAAAAAAAAAAAwQFAQIABv/EABsRAAMAAwEBAAAAAAAAAAAAAAABAgMRITES/9oADAMBAAIRAxEAPwD8KpTn12Mq0cK2PY309UgsU2MtJwGmAwzhsop8Eakcj4lJjGxSK3dFWOzpNCeUJHD3DBaPcsNDjbGjrKPrhLpdGkyS9joQfSizIYpOEyThQ5h9OKeyW4m1BhncaUF6lVPgqFVoFm2UcmgDmFEXHXSu5Ekw2MsYbPPXYzHw2hTh8E7gfhs8LUWPf0IwWro0ENjmgeQX8PmouuHWcXXCmzG1w6cj6J9I36M3Kj0i6Ik1qrNZMYpFM75BurC4+HW9mdkJSqAGpSbFq/R5VwzRWzx0LOIM5raCruWlI0elgCvRqMm0FL2NxV2hUh8AXJe8fjaoaSDhdGd8evDSwPo2ifa0VWWtIdONfE6Y/wAoduf5FKF9kSc3pTM+Sx6aqcvTLeTWrPIJLMzMSlFL/Bqau1E7Dph0UcnRZ10BlI/QDj/6JRI8rDf02ORXPkhIR7Y3Fe2g9PEdvqNX493hpYDukMbAf5s0UKTpNmUxPJJqWXUo7ce0SmZKV07clWnRdsSqQc53pl/J57yLEyRaLsznkXrs1GLhEmZ/JRT2QJLc+SivuHSDKhVZV/YLORf2TVlHn/RZ5Ro4x5dso4v76NxnqVCLi9sbYd2h0+FTG9o1UKRVbL0SXSJsx0R9UrZZiyqRNi10d1GzWNTNdO85mukFuXrp3lLtOgPoRuBuVLtF2QZz93sNIkWi7JUp67GY6KVwTkOWqi/9Pw+eztQXuOKQP2ZlHTpHBfEJj0I0K4W9jOGajrGe0EGxxjqC9n0WDwrRs+FWO6pIj8KTHEJ9sf8AUU23lo7V1aFm+BF4oBeieRA3nOk9/PSjjvVEH+FDESsgo4oP2O3AZQlbEWf/2Q=='


export const Description = () => {

  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  });

  console.log(buttonStyles);

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image 
            src="/images/description.jpeg" 
            alt="products marketplace" 
            fill
            priority={false}
            quality={100}
            placeholder='blur'
            blurDataURL='{PLACEHOLDER_IMAGE}'
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}
