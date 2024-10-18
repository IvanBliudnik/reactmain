import React, {useCallback, useMemo} from 'react';


export default {
    title: 'useCallBack.demo',
};

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = React.useState(0);
    const [books, setBooks] = React.useState(["React", "JS", "CSS", "HTML"]);

    // const addBook = () => {
    //     console.log(books)
    //     const newBooks = [...books, "Angular " + new Date().getTime()];
    //     setBooks(newBooks);
    // };
    //
    // const memorizedAddBook = useMemo(() => {
    //     return addBook
    // }, [books])
    // тоже самое но проще
    // const memorizedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         const newBooks = [...books, "Angular " + new Date().getTime()];
    //         setBooks(newBooks);
    //     };
    // }, [books])
    //useCallback кратко но по сути тоже самое
    const memorizedAddBook = useCallback(() => {
        console.log(books)
        const newBooks = [...books, "Angular " + new Date().getTime()];
        setBooks(newBooks);
    }, [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memorizedAddBook}/>
    </>;
}
type BookSecretPropsType = {
    addBook: () => void
}
const BookSecret = (props: BookSecretPropsType) => {
    console.log("BookSecret");
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>;
}
const Book = React.memo(BookSecret)