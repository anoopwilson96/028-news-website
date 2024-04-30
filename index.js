
const blogContainer = document.getElementById('blog-container')
// imported div where news articles are supposed to publish

// fetchRandomNews () will fetch api and apiUrl define my unique api key + api link for random newses
async function fetchRandomNews () {
  try { 
    const apiUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=d26219d1018fb73d35b512a9cdc0ab7a`;
  
    // max=10 is parameter to control total number of news is fetched

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
    img.src = article.image || './dummy image.png'; // Default image if no URL from API
    img.alt = article.title
    const title = document.createElement('h2')
    const truncatedTitle =
    article.title.length >30
    ? article.title.slice(0,40) + "  ...." 
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




//This sync bracket function will call fetchRandomNews () and displayBlogs(). 

(async  ()=> {
  try {
   const articles = await fetchRandomNews()
   displayBlogs(articles)
    
  } catch (error) {
    console.error('error fetching random data',error)
    
  }
} )
// Calling bracket function and because of that all the above functions are called.
();



