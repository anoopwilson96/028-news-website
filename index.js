const apiKey= '28689f32d483407482232e6770fb33ee'

const blogContainer = document.getElementById('blog-container')

async function fetchRandomNews () {
  try { 
      const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&pageSize=15&apiKey=${apiKey}' 
    // pageSize=15 is parameter to control total number of news is fetched

      const response = await fetch(apiUrl)
      const data = await response.json() 
      console.log(data)
    
  } catch (error) {
    console.log("Error in fetching random news", error)
    return[]
  }
}

(async  ()=> {
  try {
    await fetchRandomNews()
    console.log(data);
    console.log('hi')

    
  } catch (error) {
    console.error('error fetching random data',error)
    
  }
} )

function Hi (){
  console.log('hi')
}