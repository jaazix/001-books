import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Content = () => {

    const [books, setBooks] = useState([] as any);

    useEffect(() => {
        getBooks()
    })
    // invoke user data from local storage
    const navigate = useNavigate();

    const getBooks = async () => {
        const url = "https://openlibrary.org/search/authors.json?q=twain";
        await axios.get(url).then((response) => {
            setBooks(response.data.docs);
        }
        ).catch((error) => {
            console.log(error.response.data);
        });
    }

    return (
        <>
        <div className="container">
                <div className="container">
                    <div className="row g-lg-3">
                        {books.map(() => (
                            <div className="col-3">
                                <div className="container">
                                    <div className="card">
                                        <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18c379b9383%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18c379b9383%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1937484741211%22%20y%3D%2296.24000034332275%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ))}
                    </div>
                </div>
        </div>
        </>
    )
    }

export default Content;