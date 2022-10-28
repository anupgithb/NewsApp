import React, { Component } from 'react'
import NewsItems from './NewsItems'
import SpinnerA from './SpinnerA';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country:'in',
        pagesize:6,
        category:'sports',
    }
    static PropsTypes = {
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string
    }
  articles= [
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Alexandra Semenova",
        "title": "Stock market news live updates: Stocks fall to start busy week of earnings, inflation data - Yahoo Finance",
        "description": "U.S. stocks extended a streak of volatile trading on Monday as Wall Street steered into third-quarter earnings season and braced for a batch of inflation...",
        "url": "https://finance.yahoo.com/news/stock-market-news-live-updates-october-10-2022-103354558.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/jKsFB9.prU_32aN8eizEWQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-10/cc3540a0-487c-11ed-bf6f-966d3c916001",
        "publishedAt": "2022-10-10T17:56:43Z",
        "content": "U.S. stocks extended a downtrend on Monday as Wall Street steered into third-quarter earnings season and braced for a batch of inflation reports.\r\nThe technology-heavy Nasdaq Composite (^IXIC) led th… [+4295 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Post"
        },
        "author": "Kevin Sheehan, Tina Moore, Jorge Fitz-Gibbon",
        "title": "Chilling new details revealed in shooting outside Lee Zeldin's home - New York Post ",
        "description": "Neighbors also described the pandemonium that broke out — with someone crying and screaming, “Oh, my God!–” as bullets flew on the typically bucolic Shirley street around 2:…",
        "url": "https://nypost.com/2022/10/10/chilling-details-revealed-in-shooting-outside-lee-zeldin-home/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/10/lee-zeldin-home-shooting-police-comp.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2022-10-10T16:20:00Z",
        "content": "A Bloods gang beef may have prompted the shooting outside the Long Island home of gubernatorial candidate Lee Zeldin, police sources said Monday as the brother of one of the targets admitted he first… [+4612 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PEOPLE"
        },
        "author": "Kelly Wynne",
        "title": "Meri Brown Shares Beaming Pic About 'Happy People' Before Sister Wives Ep When Kody Told Her to Move - Yahoo Entertainment",
        "description": "Sunday night's episode of Sister Wives featured Kody Brown's suggestion that his estranged wife, Meri Brown, permanently move into the bed and breakfast she ...",
        "url": "https://people.com/tv/sister-wives-meri-brown-shares-smiling-pic-before-episode-when-kody-brown-told-her-to-move/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/AJCUK0e4wS.QJmkzYBK9VQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMzUw/https://media.zenfs.com/en/people_218/f722105cb80a82c8e7f95d6c25ac698f",
        "publishedAt": "2022-10-10T16:06:40Z",
        "content": "Happy people do things that make them happy. Thanks for listening to my Ted Talk\r\nMeri Brown Instagram \r\nKody Brown may have urged Meri Brown to move away from their family property, but she hasn't l… [+2939 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Greg Wallace, Sean Lyngaas, Pete Muntean, Michelle Watson",
        "title": "Russian-speaking hackers knock multiple US airport websites offline. No impact on operations reported - CNN",
        "description": "More than a dozen public-facing airport websites, including those for some of the nation's largest airports, appeared inaccessible Monday morning, and Russian-speaking hackers claimed responsibility.",
        "url": "https://www.cnn.com/2022/10/10/us/airport-websites-russia-hackers/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221010144006-airport-websites-hack.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-10-10T15:50:00Z",
        "content": "More than a dozen public-facing airport websites, including those for some of the nations largest airports, appeared inaccessible Monday morning, and Russian-speaking hackers claimed responsibility. … [+1942 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Air France, Airbus face angry families in AF447 crash trial - Reuters",
        "description": "A French criminal court opened the historic manslaughter trial of Air France <a href=\"https://www.reuters.com/companies/AIRF.PA\" target=\"_blank\">(AIRF.PA)</a> and planemaker Airbus <a href=\"https://www.reuters.com/companies/AIR.PA\" target=\"_blank\">(AIR.PA)</a…",
        "url": "https://www.reuters.com/business/aerospace-defense/air-france-airbus-face-french-court-over-rio-paris-crash-2022-10-10/",
        "urlToImage": "https://www.reuters.com/resizer/noF8V1b1LAD9GvXaUPDsR60piVY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SPR5M7VRNVLXZENO2MMHW26IUA.jpg",
        "publishedAt": "2022-10-10T15:37:00Z",
        "content": "PARIS, Oct 10 (Reuters) - A French criminal court opened the historic manslaughter trial of Air France (AIRF.PA) and planemaker Airbus (AIR.PA) on Monday, with angry relatives demanding justice more … [+5267 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Kanye West under fire for antisemitic post - The Hill",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMicGh0dHBzOi8vdGhlaGlsbC5jb20vY2hhbmdpbmctYW1lcmljYS9lbnJpY2htZW50L2FydHMtY3VsdHVyZS8zNjgxMTcyLWthbnllLXdlc3QtdW5kZXItZmlyZS1mb3ItYW50aXNlbWl0aWMtcG9zdC_SAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-10-10T15:34:30Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Panthers.com"
        },
        "author": "Darin Gantt",
        "title": "Panthers part ways with head coach Matt Rhule - Panthers.com",
        "description": "Steve Wilks will take over as interim head coach for the rest of the season.",
        "url": "https://www.panthers.com/news/panthers-part-ways-with-head-coach-matt-rhule",
        "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/panthers/rpstrq9avgglfznysc6p",
        "publishedAt": "2022-10-10T15:09:05Z",
        "content": "CHARLOTTE The Panthers on Monday parted ways with head coach Matt Rhule, after the team fell to 1-4 with a home loss to San Francisco.\r\nHe leaves with an 11-27 record (.289 winning percentage).\r\nThe … [+381 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Space.com"
        },
        "author": "Tereza Pultarova",
        "title": "Ancient Mars microbes may have made their planet unlivable through climate change - Space.com",
        "description": "\"The primitive biosphere had a self-destructive effect.\"",
        "url": "https://www.space.com/mars-microbes-triggered-climate-chance-extinction",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/rFxjRZcHNTZ8Jpw34pthnQ-1200-80.jpg",
        "publishedAt": "2022-10-10T15:00:00Z",
        "content": "Ancient microbes triggered a climate change on Mars that made the planet less habitable, which may have ultimately led to their extinction, a new climate modeling study suggests. \r\nAccording to the s… [+5694 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WPVI-TV"
        },
        "author": null,
        "title": "Coronavirus cases: Research sheds light on an emerging parallel COVID epidemic amid new variant, lingering symptoms - WPVI-TV",
        "description": "Because so many people have dealt with COVID-19 infections, many now view the virus like a common cold or flu. However, new research suggests that's far from the truth.",
        "url": "https://6abc.com/coronavirus-cases-update-covid-symptoms-booster/12308308/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/12304061_100722-kabc-4pm-covid-reinfections-vid.jpg?w=1600",
        "publishedAt": "2022-10-10T14:39:18Z",
        "content": "LOS ANGELES -- Because so many people have dealt with COVID-19 infections, many now view the virus like a common cold or flu.\r\nNew research suggests that's far from the truth.\r\nWith concern over COVI… [+2024 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Big Blue View"
        },
        "author": "Ed Valentine",
        "title": "Brian Daboll for Coach of the Year, and more reactions to Giants’ 4-1 start - Big Blue View",
        "description": "The NFL world is trying to digest the idea that the Giants might actually be good",
        "url": "https://www.bigblueview.com/2022/10/10/23396678/brian-daboll-for-coach-of-the-year-and-more-reactions-to-ny-giants-4-1-start",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/Hn4V82ZYpQjdXawxvcmcoWO6KBA=/0x573:8001x4762/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24097061/usa_today_19204559.jpg",
        "publishedAt": "2022-10-10T14:33:58Z",
        "content": "It isnt only New York Giants fans who are trying to digest the possibility that the long downtrodden Giants could actually be good in 2022. National analysts are also trying to come to grips with the… [+7162 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "A Recap of the Giants Win over Aaron Rodgers and the Packers in London - NFL",
        "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
        "url": "https://www.youtube.com/watch?v=GM3eaGBKuZM",
        "urlToImage": "https://i.ytimg.com/vi/GM3eaGBKuZM/maxresdefault.jpg",
        "publishedAt": "2022-10-10T14:13:31Z",
        "content": null
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Rivian shares skid after EV maker recalls nearly all vehicles - Reuters",
        "description": "Shares of Rivian Automotive Inc <a href=\"https://www.reuters.com/companies/RIVN.O\" target=\"_blank\">(RIVN.O)</a> fell about 9% on Monday after the electric-vehicle maker recalled nearly all its vehicles, exacerbating investor concerns that the company may not …",
        "url": "https://www.reuters.com/business/autos-transportation/rivian-shares-skid-after-ev-maker-recalls-nearly-all-vehicles-2022-10-10/",
        "urlToImage": "https://www.reuters.com/resizer/MqKPTPaF4qIpDJCsUBkBifR57pI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CPMZFKMVAZOSBLH5DGLJBI4GXE.jpg",
        "publishedAt": "2022-10-10T14:11:00Z",
        "content": "Oct 10 (Reuters) - Shares of Rivian Automotive Inc (RIVN.O) fell about 9% on Monday after the electric-vehicle maker recalled nearly all its vehicles, exacerbating investor concerns that the company … [+1928 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Jalopnik"
        },
        "author": "Adam Ismail",
        "title": "Roller Coasters, Basic Clumsiness are Triggering the iPhone 14's Automated Crash Detection - Jalopnik",
        "description": "Apple's precise detection algorithms are being fooled by amusement park rides, wasting first responders' time as a result.",
        "url": "https://jalopnik.com/roller-coasters-basic-clumsiness-are-triggering-the-ip-1849637474",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/350dd7271372b3df452c16af822503bc.jpg",
        "publishedAt": "2022-10-10T14:00:00Z",
        "content": "The 2022 iPhone lines ability to detect car crashes and automatically contact emergency services garnered a lot of attention when the products were unveiled in September even though that sort of clev… [+2521 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Daily Mail"
        },
        "author": "Sam Tonkin",
        "title": "Sharpest Earth-based images of Europa and Ganymede... - Daily Mail",
        "description": "The images provide new insights into the chemical composition of two of Jupiter's moons, according to planetary scientists from the University of Leicester's School of Physics.",
        "url": "https://www.dailymail.co.uk/sciencetech/article-11299547/Sharpest-Earth-based-images-Europa-Ganymede-reveal-icy-landscape.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2022/10/10/14/wire-63305529-1665408302-674_636x382.jpg",
        "publishedAt": "2022-10-10T13:25:00Z",
        "content": "Jupiter's largest moons Europa and Ganymede have been captured in the best ever detail by an Earth-based telescope.\r\nThe pictures reveal the mixture of chemicals that make up the frozen surfaces on t… [+6215 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sports Illustrated"
        },
        "author": "Joseph Salvador",
        "title": "Mets Voice Gary Cohen Rips Call to Search Padres’ Joe Musgrove - Sports Illustrated",
        "description": "New York’s broadcast voice said of manager Buck Showalter, “If you’re going to pull a stunt like that, you better be right.”",
        "url": "https://www.si.com/extra-mustard/2022/10/10/mets-voice-gary-cohen-rips-search-padres-joe-musgrove",
        "urlToImage": "https://www.si.com/.image/t_share/MTkyOTI5ODU5ODAwOTMzNTk3/joe-musgrove.jpg",
        "publishedAt": "2022-10-10T13:11:48Z",
        "content": "It was a strange scene at Citi Field on Sunday night—not because the Mets were historically neutralized at the plate in a season-ending shutout loss against the Padres, but because of the illegal sub… [+1262 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "https://www.theguardian.com/profile/chris-stein",
        "title": "Kevin McCarthy claimed Trump had no idea his supporters carried out Capitol attack – live - The Guardian US",
        "description": "Top Republican House made claim in meeting with police officers despite ex-president having urged supporters to ‘fight like hell’",
        "url": "https://www.theguardian.com/us-news/live/2022/oct/10/midterm-election-jan-6-mccarthy-republicans-democrats-biden-latest",
        "urlToImage": "https://i.guim.co.uk/img/media/dd1076f66c0901bc564f3043c48ecc4f71bd09fb/0_104_4800_2881/master/4800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=39716723a288c1ce78c6012fd2d12fad",
        "publishedAt": "2022-10-10T12:54:00Z",
        "content": "In the days after the January 6 insurrection, top House Republican Kevin McCarthy was ready to dump Donald Trump. Ive had it with this guy, he said, and pondered whether to ask him to resign, the New… [+17718 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Page Six"
        },
        "author": "Riley Cardoza",
        "title": "Kim Kardashian gets booed at LA Rams game with son Saint - Page Six",
        "description": "While the audience had a neutral reaction to seeing John Legend on the Jumbotron, they loudly responded to the “Kardashians” star blowing a kiss.",
        "url": "https://pagesix.com/2022/10/10/kim-kardashian-booed-at-la-rams-game-with-son-saint/",
        "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/10/kim-kardashian-55-1.jpg?quality=75&strip=all&w=1200",
        "publishedAt": "2022-10-10T12:46:00Z",
        "content": "Kim Kardashian was met with a chorus of boos when she appeared on the Jumbotron at Sunday’s Los Angeles Rams game.\r\nAfter showing John Legend on the screen, the camera moved to the “Kardashians” star… [+3373 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Former Fed Chair Ben Bernanke wins 2022 Nobel prize for economics - CNBC Television",
        "description": "Former Federal Reserve Chairman Ben Bernanke is among a group of economists who won the Nobel prize in economic sciences. CNBC's Steve Liesman joins 'Squawk ...",
        "url": "https://www.youtube.com/watch?v=HofU0Z3BK8M",
        "urlToImage": "https://i.ytimg.com/vi/HofU0Z3BK8M/maxresdefault.jpg",
        "publishedAt": "2022-10-10T12:28:52Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Jack Stebbins",
        "title": "Online holiday spending expected to be weak after months of early discounting - CNBC",
        "description": "Months of discounting leading into the holiday shopping season could take the punch out of Black Friday and Cyber Monday this year.",
        "url": "https://www.cnbc.com/2022/10/10/online-holiday-spending-expected-to-be-weak-after-months-of-early-discounting.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106876780-1619808574333-gettyimages-1229053553-AMAZON_PRIME_DAY.jpeg?v=1665403201&w=1920&h=1080",
        "publishedAt": "2022-10-10T12:00:01Z",
        "content": "A contractor working for Amazon.com cleans a delivery truck in Richmond, California, on Tuesday, Oct. 13, 2020.\r\nAfter months of sales and markdowns from retailers scrambling to offload excess invent… [+4084 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Jack Stebbins",
        "title": "Vote to delay Trump Media merger with Digital World Acquisition Corp postponed for another three weeks - CNBC",
        "description": "Digital World, the SPAC set to take Trump Media public, has previously warned that a failure to extend the deadline could force it to liquidate.",
        "url": "https://www.cnbc.com/2022/10/10/trump-media-digital-world-merger-shareholders-vote-on-deadline-extension.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107009003-1643656430216-gettyimages-1362751263-ln4_6946_bdd8cbb2-3589-46b3-bd9f-b430e0230a13.jpeg?v=1665402196&w=1920&h=1080",
        "publishedAt": "2022-10-10T11:43:16Z",
        "content": "Digital World Acquisition Corp., the shell company set to take Trump Media and Technology Group public, on Monday again adjourned an important shareholder meeting, this time until early next month. \r… [+4473 chars]"
    }
]
 capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 page=1; 
  constructor(props)
    {
        super(props);
        console.log("hello");
        this.state={
          articles : this.articles,
          loading : false,
          page : 1,
          totalResults: 6,
          cp:0
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}--NewsMonkey`;
        
    }
    async updateNews(pageNo){
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=99c9a6d4ec0c4f57be04b1d93734ea57&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({ loading: true });
        this.props.setProgress(40);
        let data = await fetch(url);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount()
    {
        // console.log("cdm");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99c9a6d4ec0c4f57be04b1d93734ea57&page=1&pageSize=${this.props.pagesize}`;
        // this.setState({
        //     loading:true
        // })
        // let data = await fetch(url); 
        // let parcedDaa = await data.json();
        // console.log(data);
        // console.log(parcedDaa);
        // this.setState({
        //     articles:parcedDaa.articles,
        //     totalResults:parcedDaa.totalResults,
        //     loading:false
        // });
        // console.log(this.state.page);
        this.updateNews();
    }
    //  handleNextClick= async()=>
    // {
    //     console.log(this.state.page);
        
    //     if(this.state.page+1 > Math.ceil(this.state.totalResults/21))
    //     {
    //         this.setState({
    //             cp: this.state.totalResults
    //         })
    //     }
    //     else{
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99c9a6d4ec0c4f57be04b1d93734ea57&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    //     this.setState({
    //         loading:true
    //     })
    //     let data = await fetch(url); 
    //     let parcedDaa = await data.json();
    //     console.log(parcedDaa);
    //     this.setState({
    //         page:this.state.page+1,
    //         articles:parcedDaa.articles,
    //         loading: false
    //     })
    //     }
    // }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    handlePreviousClick= async()=>
    {
        
            // console.log("Previous");
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99c9a6d4ec0c4f57be04b1d93734ea57&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
            // this.setState({
            //     loading:true
            // })
            // let data = await fetch(url);
            // let parsedData = await data.json()
            // console.log(parsedData);
            // this.setState({
            //     page: this.state.page - 1,
            //     articles: parsedData.articles,
            //     loading: false
            // })
            this.setState({ page: this.state.page - 1 });
            this.updateNews();
        
    }
    fetchMoreData = async () => {
        this.setState({page:this.state.page+1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=99c9a6d4ec0c4f57be04b1d93734ea57&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
      };
  render() {
    return (
      <>
        <h1 className="text-center" style={{margin:'30px 0px'}}>{`NewsMonkey-Top ${this.capitalizeFirstLetter(this.props.category)} Headline`}</h1>
        <div className="container my-9">
        {this.state.loading&&<SpinnerA/>}
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<SpinnerA/>}
        >
            <div className="container">
                <div className="row"> 
                {this.state.articles.map((elements)=>{
                return <div className="col-md-4" key={elements.url}>
                < NewsItems title={elements.title} description={elements.description} imageUrl={!elements.urlToImage?"https://s.yimg.com/ny/api/res/1.2/jKsFB9.prU_32aN8eizEWQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-10/cc3540a0-487c-11ed-bf6f-966d3c916001":elements.urlToImage} newsUrl={!elements.url?"https://finance.yahoo.com/news/stock-market-news-live-updates-october-10-2022-103354558.html":elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name}/>
                </div>
                })}
                </div>
            </div>
        </InfiniteScroll>

        {/* <div className="row">
          <div className="col-md-4">
            <NewsItems title="myTitle" description="mydesc" imageUrl="https://image.cnbcfm.com/api/v1/image/107131996-16654255772022-10-10t180704z_1617667071_rc2hyw944hsv_rtrmadp_0_ukraine-crisis-russia-missiles-czech.jpeg?v=1665426004&w=1920&h=1080" newsUrl="TOO"/>
          </div>
        </div> */}
        <div className="container my-10 d-flex justify-content-between">
        {/* <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button> */}
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
        {/* <button disabled={this.state.cp===this.state.totalResults} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button> */}
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/21)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        
        </div>
      </>
    )
  }
}

export default News