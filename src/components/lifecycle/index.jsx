import React, { Component } from "react";

export default class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
    };
    this.newsContRef = React.createRef();
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0d47ebeb9d044d2ebc1dda47cf8c9509")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          newsArticles: data.articles,
        });
      })
      .catch((err) => {
        console.err("Error fetching news:", err);
      });
  }

  renderArticles(articles) {
    const newsCont = this.newsContRef.current;
    newsCont.innerHTML = "";

    if (!articles.length) {
      newsCont.innerHTML = "<p>No articles found</p>";
      return;
    }

    articles.forEach((article, index) => {
      const createdDate = new Date(article.publishedAt);
      const changetoString = `${createdDate.getDate()}/${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`;

      const articleMarkup = `
        <div class="col-md-4" key="${index}">
          <div class="card mb-4 shadow-sm">
            <img src="${article.urlToImage}" alt="${article.title}">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p style="color: #909090;">${article.source.name}, ${article.author} - ${changetoString}</p>

              <p class="card-text">${article.description}</p>
              <a href="${article.url}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Read more...</a>
            </div>
          </div>
        </div>
      `;
      newsCont.insertAdjacentHTML("beforeend", articleMarkup);
    });
  }

  handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const { newsArticles } = this.state;
    const filteredArticles = newsArticles.filter((article) => article.title.toLowerCase().includes(searchTerm));
    this.renderArticles(filteredArticles);
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="row mt-2">
          <div className="col">
            <h1 className="text-center">Top Headlines in Technology Category</h1>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="input-group mb-3 shadow-sm rounded">
              <input type="text" className="form-control searchNews" placeholder="Search News" aria-label="Search News" aria-describedby="button-addon2" onKeyUp={this.handleSearch} />
              <button className="btn btn-primary" type="button" id="button-addon2">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="row newsCont" id="news-articles" ref={this.newsContRef}></div>
      </div>
    );
  }
}
