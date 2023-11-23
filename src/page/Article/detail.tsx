import React, { useEffect } from "react";
import Marquee from "../../component/Marquee";
import BreadcrumbConponent from "../../component/Breadcrumb";
import Tocbot from 'tocbot';
import 'tocbot/dist/tocbot.css';
import { articleImg, avatarUser, productBaner } from "../../assets/img";
import NotiHome from "../../component/NotiHome";
import { articleItem } from "../../interface";
import AddComment from "../../component/AddComment";
const AricleDetail: React.FunctionComponent = () => {
    useEffect(() => {
        Tocbot.init({
            tocSelector: '.article-detail__main__menu__toc',
            contentSelector: '.article-detail__main__content',
            headingSelector: 'h1, h2, h3',
        });
        return () => {
            Tocbot.destroy();
        };
    }, []);

    const articleList: articleItem[] = [{ name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "The 10 Most Challenged Books of 2022-2023", img: articleImg, des: "Parents and politicians are trying to pull books off shelves at a record-setting pace." },
    { name: "Hanoi Book Festival returns to capital city", img: articleImg, des: "The Hanoi Book Festival has returned for the bookworms in the pedestrian zone by Hoan Kiem (Sword) Lake in the capital city on October 6-8th" },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." }];
    return (
        <div className="article-detail bg-[#F9EEDE] mt-[76px]">
            <Marquee></Marquee>
            <div className="mx-auto px-3 container-nmc">
                <BreadcrumbConponent></BreadcrumbConponent>
            </div>
            <section className="mx-auto px-3 container-nmc article-detail__main">
                <div className="row">
                    <div className="md:order-1 md:w-[100%] w-[75%] article-detail__main__content">
                        <h1>Books I Read in August 2023</h1>
                        <div className="article-detail__main__content__info">
                            <p><span>Create At:</span> <span>10/07/2023</span> </p>
                            <div>
                                <img src={avatarUser} alt="avatarUser" />
                                <p>Admin</p>
                            </div>
                        </div>
                        <article className="reset-for-article">
                            <p>The Marriage Portrait by Maggie O’Farrell is a fictionalised account of the marriage of 15-year-old Lucrezia di Cosima de’Medici to Alfonso, Duke of Ferrera in sixteenth century Florence, merging two powerful family dynasties. Lucrezia would be dead barely a year later, allegedly of “putrid fever” but rumours persist that she was murdered, as per the Duke’s confession in Robert Browning’s poem ‘My Last Duchess’. O’Farrell’s novel imagines events from Lucrezia’s point of view as a young adolescent in an arranged marriage to an older man with the sole purpose of producing a male heir. Renaissance Italy isn’t an period of history I knew a great deal about, but it is very much brought to life by O’Farrell’s vivid descriptions and the suspense caused by Lucrezia’s growing realisation that her husband is plotting to kill her when she fails to fall pregnant. Historical fiction is a relatively new direction for O’Farrell following Hamnet in 2020 and her latest novel does not disappoint.</p>
                            <h2>1. The Marriage Portrait by Maggie O’Farrell</h2>
                            <img src="https://alittleblogofbooks.files.wordpress.com/2023/09/img_0968.jpeg" alt="img" />
                            <p>The Marriage Portrait by Maggie O’Farrell is a fictionalised account of the marriage of 15-year-old Lucrezia di Cosima de’Medici to Alfonso, Duke of Ferrera in sixteenth century Florence, merging two powerful family dynasties. Lucrezia would be dead barely a year later, allegedly of “putrid fever” but rumours persist that she was murdered, as per the Duke’s confession in Robert Browning’s poem ‘My Last Duchess’. O’Farrell’s novel imagines events from Lucrezia’s point of view as a young adolescent in an arranged marriage to an older man with the sole purpose of producing a male heir. Renaissance Italy isn’t an period of history I knew a great deal about, but it is very much brought to life by O’Farrell’s vivid descriptions and the suspense caused by Lucrezia’s growing realisation that her husband is plotting to kill her when she fails to fall pregnant. Historical fiction is a relatively new direction for O’Farrell following Hamnet in 2020 and her latest novel does not disappoint.</p>
                            <h2>2.  The Poisonous Solicitor by Stephen Bates</h2>
                            <img src="https://alittleblogofbooks.files.wordpress.com/2023/09/img_0970.webp" alt="img" />
                            <p>My trip to Hay-on-Wye earlier this year inspired me to pick up The Poisonous Solicitor by Stephen Bates – a true crime book about a murder case in the 1920s in the small Welsh village close to the English border, in the days when it still had a train station and long before it became a book town. In 1922, local solicitor Major Herbert Rowse Armstrong was sentenced to death after being found guilty of poisoning his 48-year-old wife Katherine with arsenic in a case that is said to have inspired several Golden Age of Crime novels. Previous published accounts of the trial at Hereford either sit squarely on the side of the prosecution or the defence, whereas Bates reaches a more nuanced conclusion, showing that a fair trial and a fair verdict are very different things. Bates is very good at painting a broader picture of the socio-economic landscape of Britain in the years following the First World War alongside a thorough account of an intriguing case.</p>
                            <h2>The Marriage Portrait by Maggie O’Farrell</h2>
                            <img src="https://alittleblogofbooks.files.wordpress.com/2023/09/img_0968.jpeg" alt="img" />
                            <p>The Marriage Portrait by Maggie O’Farrell is a fictionalised account of the marriage of 15-year-old Lucrezia di Cosima de’Medici to Alfonso, Duke of Ferrera in sixteenth century Florence, merging two powerful family dynasties. Lucrezia would be dead barely a year later, allegedly of “putrid fever” but rumours persist that she was murdered, as per the Duke’s confession in Robert Browning’s poem ‘My Last Duchess’. O’Farrell’s novel imagines events from Lucrezia’s point of view as a young adolescent in an arranged marriage to an older man with the sole purpose of producing a male heir. Renaissance Italy isn’t an period of history I knew a great deal about, but it is very much brought to life by O’Farrell’s vivid descriptions and the suspense caused by Lucrezia’s growing realisation that her husband is plotting to kill her when she fails to fall pregnant. Historical fiction is a relatively new direction for O’Farrell following Hamnet in 2020 and her latest novel does not disappoint.</p>
                            <h2>The Poisonous Solicitor by Stephen Bates</h2>
                            <h3> About The Poisonous Solicitor by Stephen Bates</h3>
                            <img src="https://alittleblogofbooks.files.wordpress.com/2023/09/img_0970.webp" alt="img" />
                            <h2> More Detail The Poisonous Solicitor by Stephen Bates</h2>
                            <p>My trip to Hay-on-Wye earlier this year inspired me to pick up The Poisonous Solicitor by Stephen Bates – a true crime book about a murder case in the 1920s in the small Welsh village close to the English border, in the days when it still had a train station and long before it became a book town. In 1922, local solicitor Major Herbert Rowse Armstrong was sentenced to death after being found guilty of poisoning his 48-year-old wife Katherine with arsenic in a case that is said to have inspired several Golden Age of Crime novels. Previous published accounts of the trial at Hereford either sit squarely on the side of the prosecution or the defence, whereas Bates reaches a more nuanced conclusion, showing that a fair trial and a fair verdict are very different things. Bates is very good at painting a broader picture of the socio-economic landscape of Britain in the years following the First World War alongside a thorough account of an intriguing case.</p>
                        </article>
                        <div className="article-detail__main__content__share">
                            <p><i className='bdx-caret'></i><span>Back</span></p>
                            <div>
                                <p>Share:</p>
                                <i className="bdx-note"></i>
                                <i className="bdx-facebook"></i>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[100%] w-[25%] md:order-none">
                        <div className="article-detail__main__menu">
                            <h2>TOC</h2>
                            <div className="article-detail__main__menu__toc"></div>
                        </div>
                        <img className="w-full md:hidden" src={productBaner} alt="productBaner" />
                    </div>
                </div>
            </section>
            <div className="bg-[#FFE8AD] blog">
                <div className="mx-auto px-3 container-nmc py-[60px] sm:py-[40px]">
                    <i className="bdx-book text-primary text-[32px] flex justify-center"></i>
                    <h2 className="text-primary text-center mb-10 sm:mb-4">Our Blog</h2>
                    <div className="blog_list row mb-8 sm:mb-6 gap-y-6">
                        {articleList.slice(0, 6).map((item, index) => (
                            <div
                                key={index}
                                className="blog_list_item md:w-[100%] w-[50%]"
                            >
                                <div className="blog_list_item_img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="blog_list_item_content">
                                    <h3 className="text-[#262626]">{item.name}</h3>
                                    <p>{item.des}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="px-6 py-3 sm:px-4 sm:py-2 uppercase rounded-xl border border-primary border-solid sm:text-[12px]">View All</button>
                    </div>
                </div>
            </div>
            <div className="mx-auto px-3 container-nmc">
                <div className="article-detail__review__list ">
                    <h2 className="article-detail__review__list__heading">
                        <i className="bdx-note"></i>
                        <span>comment and discuss</span>
                    </h2>
                    <div className="review__item">
                        <div className="review__item__heading">
                            <div className="review__item__heading__left">
                                <div className="review__item__heading__left__user">
                                    <img src={avatarUser} alt="avatarUser" />
                                    <p className="review__item__heading__left__user__name">amyrobson</p>
                                    <p className="review__item__heading__left__user__date">18/11/2023</p>
                                </div>
                                <div className="review__item__heading__left__info">
                                    <div className="review__item__heading__left__info__sumary">
                                        <p>Reviews: <span>1075</span></p>
                                        <p>Votes: <span>347</span></p>
                                    </div>
                                    <div className="review__item__heading__left__info__datail">
                                        <p>Rate:
                                            <span>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                            </span>
                                        </p>
                                        <p>Vote in this review: <span>10</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="review__item__heading__right">
                                <div className="review__item__heading__right__help">
                                    <p>Helpful?</p>
                                    <div className="review__item__heading__right__help__behavior">
                                        <button><i className="bdx-arrow-2"></i>yes</button>
                                        <button><i className="bdx-arrow-2"></i>no</button>
                                    </div>
                                </div>
                                <div className="review__item__heading__right__spam">
                                    <p>Spam?</p>
                                    <button><span><i className="bdx-close"></i>Report</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
                            </p>
                            <p>
                                Dimpna Wilde left her home in Dingle long ago, but when her father is found dead on the beach, she finally heads home, leaving Dublin behind. With her family at the top of the suspect list, Dimpna has to clear her family’s name before she can truly focus on running the family’s race horse farm. Even if the truth hits too close to home.
                            </p>
                            <p>
                                I love O’Connor’s Irish Village series and was thrilled to see a new Novel from her. While I was expecting another cozy mystery, this one is far from it, with a darker and deeper focus…and it couldn’t be better! O’Connor brings the town of Dingle to life with her words. You’re not just reading a story, you find yourself coming to life inside of the story as it unfolds. If you have not yet read one of O’Connors books, you’re in for a treat!
                            </p>
                        </div>
                    </div>
                    <div className="review__item">
                        <div className="review__item__heading">
                            <div className="review__item__heading__left">
                                <div className="review__item__heading__left__user">
                                    <img src={avatarUser} alt="avatarUser" />
                                    <p className="review__item__heading__left__user__name">amyrobson</p>
                                    <p className="review__item__heading__left__user__date">18/11/2023</p>
                                </div>
                                <div className="review__item__heading__left__info">
                                    <div className="review__item__heading__left__info__sumary">
                                        <p>Reviews: <span>1075</span></p>
                                        <p>Votes: <span>347</span></p>
                                    </div>
                                    <div className="review__item__heading__left__info__datail">
                                        <p>Rate:
                                            <span>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                            </span>
                                        </p>
                                        <p>Vote in this review: <span>10</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="review__item__heading__right">
                                <div className="review__item__heading__right__help">
                                    <p>Helpful?</p>
                                    <div className="review__item__heading__right__help__behavior">
                                        <button><i className="bdx-arrow-2"></i>yes</button>
                                        <button><i className="bdx-arrow-2"></i>no</button>
                                    </div>
                                </div>
                                <div className="review__item__heading__right__spam">
                                    <p>Spam?</p>
                                    <button><span><i className="bdx-close"></i>Report</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
                            </p>
                            <p>
                                Dimpna Wilde left her home in Dingle long ago, but when her father is found dead on the beach, she finally heads home, leaving Dublin behind. With her family at the top of the suspect list, Dimpna has to clear her family’s name before she can truly focus on running the family’s race horse farm. Even if the truth hits too close to home.
                            </p>
                            <p>
                                I love O’Connor’s Irish Village series and was thrilled to see a new Novel from her. While I was expecting another cozy mystery, this one is far from it, with a darker and deeper focus…and it couldn’t be better! O’Connor brings the town of Dingle to life with her words. You’re not just reading a story, you find yourself coming to life inside of the story as it unfolds. If you have not yet read one of O’Connors books, you’re in for a treat!
                            </p>
                        </div>
                    </div>
                    <div className="review__item">
                        <div className="review__item__heading">
                            <div className="review__item__heading__left">
                                <div className="review__item__heading__left__user">
                                    <img src={avatarUser} alt="avatarUser" />
                                    <p className="review__item__heading__left__user__name">amyrobson</p>
                                    <p className="review__item__heading__left__user__date">18/11/2023</p>
                                </div>
                                <div className="review__item__heading__left__info">
                                    <div className="review__item__heading__left__info__sumary">
                                        <p>Reviews: <span>1075</span></p>
                                        <p>Votes: <span>347</span></p>
                                    </div>
                                    <div className="review__item__heading__left__info__datail">
                                        <p>Rate:
                                            <span>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                                <i className="bdx-start-fill"></i>
                                            </span>
                                        </p>
                                        <p>Vote in this review: <span>10</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="review__item__heading__right">
                                <div className="review__item__heading__right__help">
                                    <p>Helpful?</p>
                                    <div className="review__item__heading__right__help__behavior">
                                        <button><i className="bdx-arrow-2"></i>yes</button>
                                        <button><i className="bdx-arrow-2"></i>no</button>
                                    </div>
                                </div>
                                <div className="review__item__heading__right__spam">
                                    <p>Spam?</p>
                                    <button><span><i className="bdx-close"></i>Report</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
                            </p>
                            <p>
                                Dimpna Wilde left her home in Dingle long ago, but when her father is found dead on the beach, she finally heads home, leaving Dublin behind. With her family at the top of the suspect list, Dimpna has to clear her family’s name before she can truly focus on running the family’s race horse farm. Even if the truth hits too close to home.
                            </p>
                            <p>
                                I love O’Connor’s Irish Village series and was thrilled to see a new Novel from her. While I was expecting another cozy mystery, this one is far from it, with a darker and deeper focus…and it couldn’t be better! O’Connor brings the town of Dingle to life with her words. You’re not just reading a story, you find yourself coming to life inside of the story as it unfolds. If you have not yet read one of O’Connors books, you’re in for a treat!
                            </p>
                        </div>
                    </div>
                    <div className="article-detail__review__list__addcomment">
                        <button>
                            Add Comment
                        </button>
                    </div>
                    {/*chỉ hiển thị nút add comment khi bấm vào thì kiểm tra tài khoản login chưa, đã login thì ẩn nút add comment và hiện component addcomment khi đã login */}
                    {/* <AddComment></AddComment> */}
                </div>
            </div>
            <NotiHome></NotiHome>
        </div>
    );
};

export default AricleDetail;