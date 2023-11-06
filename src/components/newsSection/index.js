import { useNavigate } from "react-router-dom"
import { printNews } from '../../utils'

const NewsSection = ({ newsData, heading, link = false }) => {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h5 className='text-uppercase'>
                    {heading}
                    {link && <small className='newspage-read-all' onClick={() => navigate(link)}><u>Read all</u></small>}
                </h5>
                <div className='row'>
                    {printNews(newsData, heading)}
                </div>
            </div>
            <hr />
        </>
    )
}

export default NewsSection