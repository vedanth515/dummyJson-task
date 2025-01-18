

/// 1-Write a program where you  need to log the all products data:-

// async function getdata() {
//     let url = "https://dummyjson.com/products"

//     let alldata = await fetch(url)
//     try {
//         if (!alldata.ok) {
//             throw new Error("data not found")
//         }
//         let data = await alldata.json()
//         console.log(data);
        
//     } catch(err){
//         console.log(err);

//     }
// }
// getdata()


/// 2-Write a program where you need to log single product data:-

// async function getdata() {
//     let url = "https://dummyjson.com/products"

//     let alldata = await fetch(url)
//     try {
//         if (!alldata.ok) {
//             throw new Error("data not found")
//         }
//         let data = await alldata.json()
//         console.log(data.products[0]);
        
//     } catch(err){
//         console.log(err);

//     }
// }
// getdata()


/// 3-Write a program where you need to log all categories list in the api:-

// async function getdata() {
//     let url = "https://dummyjson.com/products"

//     let alldata = await fetch(url)
//     try {
//         if (!alldata.ok) {
//             throw new Error("data not found")
//         }
//         let data = await alldata.json()
           
//         data.products.forEach(element => {
//             console.log(element.category);
            
//         });
        
//     } catch(err){
//         console.log(err);

//     }
// }
// getdata()

/// 4-Write a program to sort the elements in the array based on the title:-

// async function getdata() {
//     let url = "https://dummyjson.com/products"

//     let alldata = await fetch(url)
//     try {
//         if (!alldata.ok) {
//             throw new Error("data not found")
//         }
//         let data = await alldata.json()
           
//         data.products.forEach(element => {
//             console.log(element.title);
            
//         });
        
//     } catch(err){
//         console.log(err);

//     }
// }
// getdata()



/// 5-Write a program to get the products  based on all category


// let url='https://dummyjson.com/products/categories'

// async function getData() {
//     let data=await fetch(url)
//     let specificCatge=await data.json()
//     console.log(specificCatge);
    
// }
// getData()



// /// 6-Write a program to get the products  based on specific category
 
// let url='https://dummyjson.com/products/category/smartphones'

// async function getData() {
//     let data=await fetch(url)
//     let specificCatge=await data.json()
//     console.log(specificCatge);
    
// }
// getData()

/// 7-Write a program to write to get all the quotes in the same api link 

// let url='https://dummyjson.com/quotes'

// async function getData() {
//     let data=await fetch(url)
//     let allQuotes=await data.json()
//     console.log(allQuotes);
    
// }
// getData()

/// 8-Write a program to get single quote 

// let url='https://dummyjson.com/quotes/5'

// async function getData() {
//     let data=await fetch(url)
//     let allQuotes=await data.json()
//     console.log(allQuotes);
    
// }
// getData()

/// 9-Write a program to get only 10 quotes in console (limit the range )


// let url='https://dummyjson.com/quotes?limit=10'

// async function getData() {
//     let data=await fetch(url)
//     let allQuotes=await data.json()
//     console.log(allQuotes);
    
// }
// getData()


/// 10-Write a program to get all the recipes in console

// let url='https://dummyjson.com/quotes?limit=10'

// async function getData() {
//     let data=await fetch(url)
//     let allQuotes=await data.json()
//     console.log(allQuotes);
    
// }
// getData()

/// 11-Write a program to get all the recipes in console 

// let url='https://dummyjson.com/recipes'

// async function getData() {
//     let data=await fetch(url)
//     let recipes=await data.json()
//     console.log(recipes);
    
// }
// getData()

 
/// 12-Write a program to sort the recipe based on the meal-type 

// let url='https://dummyjson.com/recipes/tag/indian'

// async function getData() {
//     let data=await fetch(url)
//     let recipes=await data.json()
//     console.log(recipes);
    
// }
// getData()
