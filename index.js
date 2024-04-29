const apiKey= '28689f32d483407482232e6770fb33ee'
// my unique key from news api.org

const blogContainer = document.getElementById('blog-container')
// imported div where news articles are supposed to publish

// fetchRandomNews () will fetch api and apiUrl define my unique api key + api link for random newses
async function fetchRandomNews () {
  try { 
      const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&pageSize=15&apiKey=${apiKey}' 
    // pageSize=15 is parameter to control total number of news is fetched

      const response = await fetch(apiUrl)
      const data = await response.json() 
      return data.articles
      
    
  } catch (error) {
    console.log("Error in fetching random news", error)
    return[]
  }
}

// from above received api data, we will update HTML using DOM
//

function displayBlogs(articles){
  blogContainer.innerHTML = " "
  
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


