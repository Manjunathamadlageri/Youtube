import Categorie from '../style/categories.css'


const Categories = () => {
    let categories = [
        {link:"All"},
        {link:"Sports"},
        {link:"Comedy"},
        {link:"Travels"},
        {link:"Music"},
         {link:"Kids"},
         {link:"Gaming"},
         {link:"Movies"},
         {link:"Bollywood"},
         {link:"Recently uploaded"}
    ] 
    return ( 
        <div className="categories">
           <ul>
            {categories.map((data)=>{
                return(
                    <li><a href="">{data.link}</a></li>
                )
            })}
           </ul>
        </div>
     );
}
 
export default Categories;