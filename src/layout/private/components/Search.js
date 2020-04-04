import React,{useState, useEffect} from 'react'
import Beer from './Beer';
import {getBeer} from '../../../services/api_service'
import { Link } from 'react-router-dom';
const Search=()=>{
    const [findBeer,setFindBeer]=useState([]);
    const [pomocni, setPomocni] = useState([]);

    useEffect(()=>{
        getBeer().then(data=>{
            setPomocni(data)})
    },[])

    const search=(e)=>{
        if(e.target.value === ''){
            setFindBeer([])
            return
        }
        let tmp=pomocni.filter(beer=>beer.name.toLowerCase()
                     .includes(e.target.value.toLowerCase()))
        setFindBeer(tmp)
        return
    }
    return(
        <>
        <Link to="main" className="nav-item">Back to main</Link>
        <div >
            <h3 className="h3">Find a beer</h3>
            <input className="input" type="text" onChange={search}/>
            <h3 className="h3">SearchResult</h3>
            <div className="list-item">
            {findBeer.map(beer=><Beer beer={beer} key={beer.id} />)}
            </div>
        </div>
        </>
    )
}
export default Search;