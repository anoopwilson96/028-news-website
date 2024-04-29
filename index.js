const apiKey= '28689f32d483407482232e6770fb33ee'
// my unique key from news api.org

const blogContainer = document.getElementById('blog-container')
// imported div where news articles are supposed to publish

// fetchRandomNews () will fetch api and apiUrl define my unique api key + api link for random newses
async function fetchRandomNews () {
  try { 
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&pageSize=15&apiKey=${apiKey}`;
    // pageSize=15 is parameter to control total number of news is fetched

      const response = await fetch(apiUrl)
      const data = await response.json() 
      return data.articles
      
    
  } catch (error) {
    console.log("Error in fetching random news", error)
    return[]
  }
}

// displayBlogs() will fill data(articles) from api[fetchRandomNews ()] to the HTML. Just like map=> method in React.
// thus from above received api data from fetchRandomNews () ,  will be updated in HTML using DOM

function displayBlogs(articles){

  blogContainer.innerHTML = " ";  // to clear if there is any existing data
  // foreach will do the loop like map=> in react
  articles.forEach(article => {
    const blogCard = document.createElement('div')
    blogCard.classList.add('blog-card') 
    const img = document.createElement('img')
    img.src = article.urlToImage || './dummy image.png'; // Default image if no URL from API
    img.alt = article.title
    const title = document.createElement('h2')
    const truncatedTitle =
    article.title.length >30
    ? article.title.slice(0,30) + "  ...." 
    : article.title
    title.textContent = truncatedTitle;
    const description = document.createElement('h3')
    description.textContent = article.description
    const button = document.createElement('button')
    button.innerText= "Read more"

// final code to append 

 blogCard.appendChild(img)
 blogCard.appendChild(title)
 blogCard.appendChild(description)
 blogCard.appendChild(button)
 blogContainer.appendChild(blogCard)
    
  });
}




// this sync bracket function will call fetchRandomNews () and displayBlogs(). 

(async  ()=> {
  try {
   const articles = await fetchRandomNews()
   displayBlogs(articles)
    
  } catch (error) {
    console.error('error fetching random data',error)
    
  }
} )
// calling bracket function and because of that all the above functions are called.
();



