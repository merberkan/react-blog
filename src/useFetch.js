import { useState, useEffect } from "react";
const useFetch = (url) => {
    // Data içindeki jsondan çekeceğiz burada o yüzden null veriyoruz
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // we can use abortCont to stop fetching 
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                // console.log(res);
                // res.ok means fetch is okey or not
                if (!res.ok) {
                    throw Error("Could Not Fetch The Data For That Resource");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setError(err.message);
                    setIsPending(false);
                }
            });
        // örnek olarak url parametresini verdiğimizde artık url statesi tetiklendiğinde çalışacak.

        // Sayfalar arası geçiş yaparken data fetchlenmeden geçiş yaptığında hata alıyoruz. Bu sebepten useEffect clean up yapmak gerekiyor.
        return () => abortCont.abort();
    }, [url]);

    return {
        data,
        isPending,
        error
    }
};

export default useFetch;