import './header.scss'
import Flickity from 'react-flickity-component'

const flickityOptions = {
        initialIndex: 2,
        freeScroll: true,
        wrapAround: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 2000
    }

const Header = () => {

    return (
        <>
        <div className="book-slide scroll">
            <Flickity className={'book'} elementType={'div'} options={flickityOptions} disableImagesLoaded={false} reloadOnUpdate static>
                <div className="book-cell">
                    <div className="book-img">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" alt="" className="book-photo"/>
                    </div>
                    <div className="book-content">
                        <div className="book-title">BIG MAGIC</div>
                        <div className="book-author">by Elizabeth Gilbert</div>
                        <div className="book-sum">
                        Readers of all ages and walks of life have drawn inspiration and
                        empowerment from Elizabeth Gilbert’s books for years.{" "}
                        </div>
                        <div className="book-see">See The Book</div>
                    </div>
                </div>
                <div className="book-cell">
                <div className="book-img">
                    <img
                    src="https://www.abebooks.com/blog/wp-content/uploads/2016/08/10.jpg"
                    alt=""
                    className="book-photo"
                    />
                </div>
                <div className="book-content">
                    <div className="book-title">A Tale For The Time Being</div>
                    <div className="book-author">by Ruth Ozeki</div>

                    <div className="book-sum">
                    In Tokyo, sixteen-year-old Nao has decided there’s only one escape
                    from her aching loneliness and her classmates’ bullying.
                    </div>
                    <div className="book-see book-pink">See The Book</div>
                </div>
                </div>
                <div className="book-cell">
                <div className="book-img">
                    <img
                    src="https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
                    alt=""
                    className="book-photo"
                    />
                </div>
                <div className="book-content">
                    <div className="book-title">The Great Gatsby</div>
                    <div className="book-author">by F.Scott Fitzgerald</div>

                    <div className="book-sum">
                    The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the
                    supreme achievement of his career.
                    </div>
                    <div className="book-see book-yellow">See The Book</div>
                </div>
                </div>
                <div className="book-cell">
                <div className="book-img">
                    <img
                    src="https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg"
                    alt=""
                    className="book-photo"
                    />
                </div>
                <div className="book-content">
                    <div className="book-title">After You</div>
                    <div className="book-author">by Jojo Moyes</div>

                    <div className="book-sum">
                    Louisa Clark is no longer just an ordinary girl living an ordinary
                    life. After the transformative six months spent.
                    </div>
                    <div className="book-see book-purple">See The Book</div>
                </div>
                </div>
            </Flickity>
        </div>
        </>
    );
    };

export default Header;