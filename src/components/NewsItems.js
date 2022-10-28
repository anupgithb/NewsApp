import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,url,author,date,source}=this.props;
    return (
      <div>
        <div className="container my-3">
            <div className="card my-3">
              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'85%' , zIndex:'1'}}>
                {source}
              </span>
                <img src={!imageUrl?"https://s.yimg.com/ny/api/res/1.2/AJCUK0e4wS.QJmkzYBK9VQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMzUw/https://media.zenfs.com/en/people_218/f722105cb80a82c8e7f95d6c25ac698f":imageUrl} className="card-img-top" alt="..jfhf."/>
                <div className="card-body">
                <h5 className="card-title">{!title?"Stock market news live updates: Stocks fall to start busy week of earnings, inflation data - Yahoo Finance":title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-danger text-small">By {!author?"Unknown":author} on {!date?"2022-01-02":new Date(date).toGMTString()}</small></p>
                <a href={!url?"https://nypost.com/2022/10/10/chilling-details-revealed-in-shooting-outside-lee-zeldin-home/":url} className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
         </div>
    )
  }
}

export default NewsItems