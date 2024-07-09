
export const getStaticPaths = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {ninja: data}
    }

}

const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>Details Page</h1>
            <h3>{ninja.name}</h3>
            <p>Email: {ninja.email}</p>
            <p>Address: {ninja.address.street}, {ninja.address.suite}, {ninja.address.city} </p>
            <p>Website: {ninja.website} </p>
        </div>
     );
}
 
export default Details;