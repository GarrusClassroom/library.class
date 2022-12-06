import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import SwiperCore, { FreeMode, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '../../components/button';
import { Comment } from '../../components/comment';
import { Rating } from '../../components/rating';
import { BOOKS } from '../../constants/books';
import { BUTTON_TEXT } from '../../constants/button';
import { COMMENT } from '../../constants/comment';
import { FEATURE_KEY } from '../../constants/feature';
import { NAV_MENU_ALL, NAV_MENU_LIST, NAV_MENU_MAIN } from '../../constants/nav-menu-list';
import { USER } from '../../constants/user';

import arrowBottomBlack from './assets/arrow-bottom-black.svg';
import IconPlugImg from './assets/icon-plug-img.svg';

import './swiper-book.css';
import styles from './book-page.module.scss';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export const BookPage = () => {
    const { pathname } = useLocation();

    const book = BOOKS[9];
    const detailsArr = Object.values({
        publisher: book.publisher,
        year: book.year,
        pages: book.pages,
        binding: book.binding,
        size: book.size,
        categories: book.categories,
        weight: book.weight,
        ISBN: book.ISBN,
        manufacturer: book.manufacturer,
    });

    const [isCommentHide, setCommentHide] = useState(true);

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

    SwiperCore.use([Pagination]);

    const buttontextReserv =
        book.status === 'free'
            ? BUTTON_TEXT.RESERV
            : book.status === 'reserved' && book.userIdReserved === USER.contract
            ? BUTTON_TEXT.RESERVED
            : BUTTON_TEXT.BUSY;

    const classButtonReserve = classNames(
        styles.button,
        buttontextReserv === BUTTON_TEXT.RESERV ? styles.buttonReserv : styles.buttonReserved,
    );

    return (
        <div className={styles.bookPage}>
            <div className={styles.breadcrumbs}>
                <div className={styles.breadcrumbsBlock}>
                    <span className={styles.breadcrumbsTitle}>
                        <Link
                            to={`/${NAV_MENU_MAIN.books.path}/${pathname.split('/')[2]}`}
                            className={styles.breadcrumbsLink}
                        >
                            {pathname.split('/')[2] === NAV_MENU_ALL.category
                                ? NAV_MENU_ALL.name
                                : NAV_MENU_LIST.map(
                                      (menuList) =>
                                          menuList.category === pathname.split('/')[2] &&
                                          menuList.name,
                                  )}
                        </Link>
                        <span className={styles.breadcrumbsSeparator}>/</span>
                        {book.title}
                    </span>
                </div>
            </div>

            <div className={styles.bookDescription}>
                <div className={styles.bookImgBlock}>
                    {book.images && book.images.length > 1 ? (
                        <Swiper
                            loop={book.images && book.images.length > 1 && true}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            thumbs={{
                                swiper:
                                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                            }}
                            modules={[FreeMode, Thumbs, Pagination]}
                            className={styles.swiperSlide}
                            breakpoints={{
                                800: {
                                    pagination: false,
                                },
                            }}
                        >
                            {book.images.map(({ url }) => (
                                <SwiperSlide key={url.toString()}>
                                    <img src={url} className={styles.swiperSlideImg} alt='img' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <img src={IconPlugImg} className={styles.swiperImgNone} alt='img' />
                    )}

                    {book.images && book.images.length > 1 && (
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            className={styles.swiperSlideSmall}
                            breakpoints={{
                                900: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {book.images.map(({ url }) => (
                                <SwiperSlide key={url.toString()}>
                                    <img
                                        src={url}
                                        className={styles.swiperSlideSmallImg}
                                        alt='img'
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
                <p className={styles.bookName}>{book.title}</p>
                <span className={styles.bookAuthor}>
                    {book.authors && book.authors.length > 0 && book.authors.join(', ')},{' '}
                    {book.year}
                </span>
                <div className={styles.bookButton}>
                    <Button classButton={classButtonReserve} onClick={() => {}}>
                        <span>{buttontextReserv}</span>
                        {book.date && buttontextReserv === '' ? `Занята до ${book.date}` : null}
                    </Button>
                </div>
                <span className={styles.subTitle}>О книге</span>
                <span className={styles.description}>{book.description}</span>
            </div>

            <div className={styles.ratingBlock}>
                <span className={styles.ratingTitle}>Рейтинг</span>
                <hr className={styles.line} />

                {book.rating ? (
                    <div className={styles.rating}>
                        <Rating rating={book.rating} />
                        <span className={styles.ratingText}>{book.rating}</span>
                    </div>
                ) : (
                    <div className={styles.rating}>
                        <Rating rating={0} />
                        <span className={styles.noRatingText}>ещё нет оценок</span>
                    </div>
                )}
            </div>

            <span className={styles.detailsTitle}>Подробная информация</span>
            <hr className={styles.line} />
            <div className={styles.details}>
                {detailsArr.map((value, index) => (
                    <div
                        className={styles.feature}
                        key={value ? value.toString() : index.toString()}
                    >
                        <span className={styles.featureKey}>{FEATURE_KEY[index]}</span>
                        <span className={styles.featureValue}>
                            {value && typeof value === 'object' && value.length > 1
                                ? value.join(', ')
                                : value}
                            {!value && 'Нет данных'}
                        </span>
                    </div>
                ))}
            </div>

            <span className={styles.reviewsTitle}>
                Отзывы
                <span className={styles.reviewsLength}>{COMMENT.length}</span>
                {COMMENT && COMMENT.length > 0 && (
                    <Button
                        classButton={classNames(
                            styles.buttonComment,
                            !isCommentHide && styles.buttonCommentHide,
                        )}
                        onClick={() => {
                            setCommentHide(!isCommentHide);
                        }}
                    >
                        <img
                            src={arrowBottomBlack}
                            alt='icon-arrow'
                            className={classNames(
                                styles.buttonImgComment,
                                isCommentHide === false && styles.buttonImgCommentHide,
                            )}
                        />
                    </Button>
                )}
            </span>
            <hr className={styles.line} />

            <div className={styles.reviews}>
                {COMMENT &&
                    COMMENT.length > 0 &&
                    isCommentHide &&
                    COMMENT.map(({ avatar, name, date, rating, text }) => (
                        <Comment
                            avatar={avatar}
                            name={name}
                            date={date}
                            rating={rating}
                            text={text}
                            key={name}
                        />
                    ))}
                <Button classButton={styles.buttonReview} onClick={() => {}}>
                    <span>Оценить книгу</span>
                </Button>
            </div>
        </div>
    );
};
