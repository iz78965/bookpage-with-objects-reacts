
export const bookFirst =  {
    title: "this is the thet title of the book",
    aurthur: "naseem",
    img: "./logo192.png",
};
export const bookSecond =  {
    title: "this is the thet title of the second book",
    aurthur: "Ibrahim",
    img: "./logo192.png",
};

const Book = (props) => {
    const {title,img,aurthur} = props;
        return(
        // ===================starts====================
        // uaing basic props versions directly in the ajx 



    //   <article className='book'>
        
    //     <img src={props.img} alt={props.title} />
    //     <h3>{props.title}</h3>
    //     <h3>{props.aurthur}</h3>
    //     {/* <h4>{props.number}</h4> */}
    //   </article>

// ====================ends===============================


// inheriting props values directly in one line as a short version

// ========================starts===========================

            <article className='book'>
                    <img src={img} alt={title} />
                    <h3>{title}</h3>
                    <h3>{aurthur}</h3>
                    {/* <h4>{props.number}</h4> */}
                    </article>

// ========================ends===========================


    )
};
export default Book;