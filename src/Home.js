import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // let name = 'mario';
    // useState kullanarak tekrardan renderlanmasını sağlıyoruz. Böylece daha reactive oluyor
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);
    // const [blogs, setBlogs] = useState([
    //     {title: 'My new website', body: 'lorem ipsum...', author:'mario', id:1},
    //     {title: 'Welcome Party', body: 'lorem ipsum...', author:'yoshi', id:2},
    //     {title: 'Web dev top tips', body: 'lorem ipsum...', author:'mario', id:3},
    // ]);


    // const handleClick = () => {
    //     name = 'luigi';
    //     console.log(name);
    //     setName('luigi');
    //     setAge(30);
    // }

    // const handleClickAgain = (name) => {
    //     console.log('hello'+name);
    // }

    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     // Filtreleme ile birlikte aslında silme işlemini yapıyor.
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     // Daha sonra ise hooks ile verdiğimiz fonksiyon yardımıyla yeni değeri kayıt ediyor.
    //     setBlogs(newBlogs);
    // }
    // In every RENDER this function will be fired, Eğer ikinci bir parametre olarak array gönderirsek ne kadar çalışması gerektiğini,
    // belirleyebiliriz. Örneğin, boş array koyarsak ilk sayfa açıldığında ki renderda çalışıyor. Ancak bir sonraki renderlarda,
    // çalışmıyor.

    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
    return (
        <div className="home">
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}>Click me</button>  */}
            {/* <button onClick={()=> handleClickAgain('mario')}>Click me again</button> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {/* Alttaki kodda blogs olmaz ise datayı çekme süresi olduğundan bloglist.js de blogs null olarak gözüktüğünden map yapamıyor. */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}


            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"></BlogList> */}
            {/* <button onClick={() => setName('luigi')}>change name</button> */}
            {/* <p>{ name }</p> */}
        </div>
    );
};

export default Home;
