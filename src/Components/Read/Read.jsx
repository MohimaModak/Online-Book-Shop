import { Rating } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Read = () => {
  const read = useLoaderData();
  console.log(read);
  return (
    <div className="flex justify-center items-center m-16 border shadow-2xl p-16 rounded-md">
      <div className="">
        <h1 className="font-bold text-3xl mb-5">Name: {read.name}</h1>
        <img src={read.photo} className="rounded-md" />
        <div className="mt-5">
          <h1 className="font-semibold text-lg">Author Name: {read.author}</h1>
          <div className="font-semibold text-lg">
            <h1>Rating: {read.rating}</h1>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <p>
              Blogging is a website type that provides immediate, often
              informal, information on current events, personal opinions, and
              news. Blogs are created by people known as bloggers who typically
              post blogs with views on topics of interest or even diary-style
              text entries. The average word count of the blog is 1000-2500.
            </p>
            <p>
              For example, a restauranteur could regularly blog about everything
              from their favorite farmers' markets, to amusing anecdotes, to the
              way they develop new recipes. A personal blog allows the reader to
              connect with the person behind the business, making them more
              likely to remember and patronize the restaurant.
            </p>
            <p>
              <h1 className="font-bold text-lg mt-5 mb-5">
                How to start book blog?
              </h1>
              <ol>
                <li>
                  1. Choose a blogging platform. Use a platform that offers
                  customizable templates.
                </li>
                <li>2.Pick a hosting platform. ...</li>
                <li>3.Find the right niche. ...</li>
                <li>4.Select a blog name and domain. ...</li>
                <li>5.Set up and design your blog. ...</li>
              </ol>
            </p>
            <p className="mt-5">
              In 1999, programmer Peter Merholz created the term blog by
              breaking the phrase weblog into we blog in the sidebar of his
              personal blog. Later that year, the blogging service Blogger was
              released, which was the first online blog tool to officially use
              the term blog instead of weblog.WordPress is an open-source
              content management system (CMS) that makes it easy to create and
              manage a website. It is the most popular CMS in the world.
              Millions of business owners, bloggers, and publishers use
              WordPress every day to maintain their online presence. As a
              blogger, it's important to develop a certain kind of writing
              skill. Some people are exceptional writers when it comes to
              academic papers or physical books, but this doesn't always
              translate to successful Internet writing. When you write for the
              Internet, you have to remember to make your content very easy to
              read.
            </p>
            <p className="mt-5">
              <h1 className="font-bold mb-5">Is free blogging good?</h1>
              <p>
                Easy to use: Free blogging platforms are generally very
                user-friendly, making it easy for anyone, even those with no
                technical skills, to set up and start blogging. Hosting and
                maintenance are taken care of: When you use a free blogging
                platform, the hosting and maintenance of your blog are taken
                care of for you.
              </p>
            </p>
            <p className="mt-5">
              <h1 className="font-bold mb-5">Is blog a domain name?</h1>
              <p>
                The domain name . blog is a generic top level domain (gTLD) in
                the Domain Name System of the Internet. Added in 2016, it is
                intended to be used for blogs. Anyone can sign up for a dot blog
                domain name at the regular available prices.
              </p>
            </p>
            <p className="mt-5">
              <h1 className="font-bold mb-5">Can I earn money in blogger?</h1>
              <p>
                Starting a blog can be both a rewarding and lucrative venture
                that opens exciting opportunities. Through blogging, you can
                establish yourself as a credible expert in your field, earn a
                part-time or full-time income and connect with like-minded
                people who share your interests and passions.
              </p>
            </p>
            <p className="mt-5">
              <h1 className="font-bold mb-5">Does blogging have a future?</h1>
              <p>
                The future of blogging is both promising and challenging.
                Advancements in technology, such as voice search, artificial
                intelligence, and virtual reality, will reshape the way content
                is created and consumed.
              </p>
            </p>
            <p className="mt-5">
              Blogs continue to be extremely valuable for lead generation, brand
              awareness, and SEO. And they're still popular among consumers. A
              HubSpot study found that 60% of people read a blog at least once a
              week. So, blogs won't be out of marketers' toolbox anytime soon.If
              you start a blog in 2023, you can still enjoy the benefits of
              being a blogger. That includes building your professional network,
              establishing your authority, and generating passive income. While
              blogging underwent a ton of changes in 2023, blogs are still worth
              starting with the right strategies.WordPress is the best platform
              for bloggers who want to have complete control over their
              websites. It's an open source platform you can use to create a
              website or blog for free using WordPress.org, or you can pay for a
              hosted WordPress.com site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
