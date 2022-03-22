const nameCategory= (category) => {
    switch(category){
        case "technology":
            return <p>TECHNOLOGIA</p>;
        case "culture":
            return <p>KULTURA</p>;
        case "moto":
            return <p>MOTORYZACJA</p>;
        case "program":
            return <p>PROGRAMOWANIE</p>;
        default:
            return<p>HISTORIA</p> ;
    }
}

export default nameCategory;