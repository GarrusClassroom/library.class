import iconRating from './assets/icon_rating.svg';
import iconRatingActive from './assets/icon_rating-active.svg';

import styles from './rating.module.scss';

type RatingType = {
    rating: number;
    classNameStar?: string;
};

export const Rating = ({ rating, classNameStar }: RatingType) => {
    let ratingValue: number = rating > 5 ? 5 : rating;

    let ratingNotValue = 5 - rating;

    const ratingActive = [];
    const ratingNotActive = [];

    while (ratingValue >= 1) {
        ratingActive.push((ratingValue -= 1));
    }
    while (ratingNotValue > ratingValue) {
        ratingNotActive.push((ratingNotValue -= 1));
    }

    return (
        <div className={styles.rating}>
            {ratingActive.map((item) => (
                <div key={item}>
                    <img src={iconRatingActive} className={classNameStar} alt='Иконка звезда' />
                </div>
            ))}
            {ratingNotActive.map((item) => (
                <div key={item}>
                    <img src={iconRating} className={classNameStar} alt='Иконка звезда' />
                </div>
            ))}
        </div>
    );
};
