let container = document.getElementById("divcontainer")

async function fetchdata() {
    try {
        let data = await fetch("https://fakestoreapi.com/products")
        let finalData = await data.json()

        let result = finalData.filter(x => x.price > 200 && x.rating.rate > 3.5)

        result.forEach(x => {
            let card = document.createElement("div")
            card.style.width = "350px"
            card.style.height= "300px"
            card.style.backgroundColor = "lightcoral"
            card.style.padding = "5px"
            card.innerHTML = `<img src="${x.image}" style="width:100%; height:50%;"></img>   <h3>${x.title}</h3>   <p>Rating:${x.rating.rate}</p>  
                              <p>Price:${x.price}</p>`

            container.append(card)
        })

    }catch(error){
        console.error("error fetching data",error)
    }
}
fetchdata()



