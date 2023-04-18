import React from "react";
import styles from "../../styles/About.module.scss";
type OurStoryProps = {};

const OurStory: React.FC<OurStoryProps> = () => {
  return (
    <div className={`${styles.ourStory}`}>
      <h1 className={`${styles.ourStory_title}`}>Our Story</h1>
      <p className={`${styles.ourStory_para}`}>
        In 2023, three students met in an Internet Programs Programming class
        and discovered their shared love for books. They realized that there
        wasn&apos;t a single online platform that catered to all the needs of
        book lovers, from finding new reads to connecting with a community of
        like-minded readers. And so, they decided to create one themselves. From
        that initial spark, Bookie was born. Driven by a shared passion for
        books and a desire to make reading accessible to everyone, the three
        friends poured their hearts and souls into building a platform that
        would become the go-to destination for book lovers around the world.
        Over the years, We&apos;ve expanded our library to include books from
        every genre and style, from timeless classics to contemporary
        bestsellers. And we&apos;ve created features like personalized
        recommendations, book clubs, and reader reviews to make it easy for you
        to find your next favorite read and connect with other book lovers. At
        Bookie, we believe that reading is more than just a pastime - it&apos;s
        a way of life. That&apos;s why we&apos;re committed to creating a
        platform that fosters a community of readers from around the world.
        We&apos;re proud to have started as three students with a shared love of
        books, and we&apos;re excited to continue growing and evolving alongside
        our readers. Thank you for choosing Bookie as your online book store.
        We&apos;re honored to be part of your reading journey and can&apos;t
        wait to see what great books we&apos;ll discover together.
      </p>
    </div>
  );
};
export default OurStory;
